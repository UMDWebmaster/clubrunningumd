import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export async function fetchContentDoc(docId) {
  const ref = doc(db, "siteContent", docId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

export async function saveContentDoc(docId, payload, options = {}) {
  const { allowUnsigned = false } = options;
  const user = auth.currentUser;
  if (!user && !allowUnsigned) {
    throw new Error("You must be signed in to save content.");
  }

  const ref = doc(db, "siteContent", docId);
  const data = {
    ...payload,
    updatedAt: serverTimestamp(),
    updatedBy: user ? user.email || user.uid : "local-dev",
  };
  if (!payload?.createdAt) {
    data.createdAt = serverTimestamp();
  }

  await setDoc(ref, data, { merge: true });
}
