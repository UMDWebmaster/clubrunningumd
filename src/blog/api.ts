import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
  type WithFieldValue,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import {
  BlogPost,
  BlogPostDraft,
  Profile,
  blogPostConverter,
  createSlug,
  profileConverter,
} from "./types";

const postsRef = () => collection(db, "posts").withConverter(blogPostConverter);
const profilesRef = () =>
  collection(db, "profiles").withConverter(profileConverter);

export async function fetchPublishedPosts(max = 12): Promise<BlogPost[]> {
  const q = query(
    postsRef(),
    where("status", "==", "published"),
    orderBy("publishedAt", "desc"),
    limit(max)
  );
  const snap = await getDocs(q);
  return snap.docs.map((docSnap) => docSnap.data());
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const q = query(postsRef(), where("slug", "==", slug), limit(1));
  const snap = await getDocs(q);
  return snap.empty ? null : snap.docs[0].data();
}

export async function fetchPostById(id: string): Promise<BlogPost | null> {
  const ref = doc(db, "posts", id).withConverter(blogPostConverter);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() ?? null : null;
}

export async function fetchPostsForProfile(
  profileSlug: string
): Promise<BlogPost[]> {
  const q = query(
    postsRef(),
    where("profileSlug", "==", profileSlug),
    where("status", "==", "published"),
    orderBy("publishedAt", "desc"),
    limit(6)
  );
  const snap = await getDocs(q);
  return snap.docs.map((docSnap) => docSnap.data());
}

export async function fetchProfileBySlug(
  slug: string
): Promise<Profile | null> {
  const q = query(profilesRef(), where("slug", "==", slug), limit(1));
  const snap = await getDocs(q);
  return snap.empty ? null : snap.docs[0].data();
}

export interface SavePostOptions {
  draft: BlogPostDraft;
  profileSlug?: string;
}

export async function savePost({
  draft,
  profileSlug,
}: SavePostOptions): Promise<string> {
  if (!draft.title) {
    throw new Error("Post title is required.");
  }

  const user = auth.currentUser;
  if (!user) {
    throw new Error("You must be signed in to publish.");
  }

  const isPublishing = draft.status === "published";
  const slug = draft.slug
    ? createSlug(draft.slug)
    : createSlug(draft.title ?? "");
  const docData: WithFieldValue<BlogPost> = {
    id: draft.id ?? "",
    title: draft.title ?? "",
    slug,
    excerpt: draft.excerpt ?? "",
    content: draft.content ?? "",
    coverImage: draft.coverImage,
    tags: draft.tags ?? [],
    status: draft.status ?? "draft",
    authorId: user.uid,
    authorDisplayName:
      user.displayName || draft.authorDisplayName || user.email || "Editor",
    profileSlug: profileSlug ?? draft.profileSlug,
    createdAt:
      draft.createdAt ??
      (serverTimestamp() as unknown as BlogPost["createdAt"]),
    updatedAt: serverTimestamp() as unknown as BlogPost["updatedAt"],
    publishedAt:
      isPublishing && !draft.publishedAt
        ? (serverTimestamp() as unknown as BlogPost["publishedAt"])
        : draft.publishedAt ?? null,
  };

  if (draft.id) {
    const ref = doc(db, "posts", draft.id).withConverter(blogPostConverter);
    await setDoc(ref, docData, { merge: true });
    return draft.id;
  }

  const created = await addDoc(postsRef(), docData);
  return created.id;
}

export async function saveProfile(profile: Profile): Promise<string> {
  const existing = profile.uid
    ? await getDocs(
        query(profilesRef(), where("uid", "==", profile.uid), limit(1))
      )
    : null;
  const payload: Profile = {
    ...profile,
    id: existing?.empty ? profile.id ?? "" : existing?.docs[0]?.id ?? "",
    createdAt:
      profile.createdAt ??
      (serverTimestamp() as unknown as Profile["createdAt"]),
    updatedAt: serverTimestamp() as unknown as Profile["updatedAt"],
  };

  if (existing && !existing.empty) {
    const ref = doc(db, "profiles", existing.docs[0].id).withConverter(
      profileConverter
    );
    await setDoc(ref, payload, { merge: true });
    return existing.docs[0].id;
  }

  const created = await addDoc(profilesRef(), payload);
  return created.id;
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  const q = query(postsRef(), orderBy("updatedAt", "desc"), limit(50));
  const snap = await getDocs(q);
  return snap.docs.map((docSnap) => docSnap.data());
}
