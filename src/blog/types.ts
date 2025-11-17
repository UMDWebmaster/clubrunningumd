import type {
  DocumentData,
  FirestoreDataConverter,
  Timestamp,
} from "firebase/firestore";

export type PostStatus = "draft" | "published";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  status: PostStatus;
  authorId: string;
  authorDisplayName: string;
  profileSlug?: string;
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
  publishedAt: Timestamp | null;
}

export type BlogPostDraft = Partial<Omit<BlogPost, "id">> & {
  id?: string;
};

export interface Profile {
  id: string;
  uid: string;
  slug: string;
  displayName: string;
  role?: string;
  team?: string;
  gradYear?: string;
  bio?: string;
  photoUrl?: string;
  socials?: {
    instagram?: string;
    strava?: string;
    twitter?: string;
  };
  favoriteRaces?: string[];
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
}

const clean = (data: DocumentData) =>
  Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined));

export const blogPostConverter: FirestoreDataConverter<BlogPost> = {
  toFirestore(post: BlogPost): DocumentData {
    return clean({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage || null,
      tags: post.tags,
      status: post.status,
      authorId: post.authorId,
      authorDisplayName: post.authorDisplayName,
      profileSlug: post.profileSlug || null,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      publishedAt: post.publishedAt,
    });
  },
  fromFirestore(snapshot, options): BlogPost {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      title: data.title ?? "",
      slug: data.slug ?? snapshot.id,
      excerpt: data.excerpt ?? "",
      content: data.content ?? "",
      coverImage: data.coverImage ?? undefined,
      tags: Array.isArray(data.tags) ? data.tags : [],
      status: (data.status as PostStatus) ?? "draft",
      authorId: data.authorId ?? "",
      authorDisplayName: data.authorDisplayName ?? "",
      profileSlug: data.profileSlug ?? undefined,
      publishedAt: data.publishedAt ?? null,
      createdAt: data.createdAt ?? null,
      updatedAt: data.updatedAt ?? null,
    };
  },
};

export const profileConverter: FirestoreDataConverter<Profile> = {
  toFirestore(profile: Profile): DocumentData {
    return clean({
      uid: profile.uid,
      slug: profile.slug,
      displayName: profile.displayName,
      role: profile.role || null,
      team: profile.team || null,
      gradYear: profile.gradYear || null,
      bio: profile.bio || null,
      photoUrl: profile.photoUrl || null,
      socials: profile.socials || {},
      favoriteRaces: profile.favoriteRaces || [],
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
    });
  },
  fromFirestore(snapshot, options): Profile {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      uid: data.uid ?? "",
      slug: data.slug ?? snapshot.id,
      displayName: data.displayName ?? "Club Runner",
      role: data.role ?? undefined,
      team: data.team ?? undefined,
      gradYear: data.gradYear ?? undefined,
      bio: data.bio ?? undefined,
      photoUrl: data.photoUrl ?? undefined,
      socials: data.socials ?? {},
      favoriteRaces: Array.isArray(data.favoriteRaces) ? data.favoriteRaces : [],
      createdAt: data.createdAt ?? null,
      updatedAt: data.updatedAt ?? null,
    };
  },
};

export const createSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
