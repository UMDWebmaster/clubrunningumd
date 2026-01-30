import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function useContentDoc(docId, defaults) {
  const [data, setData] = useState(defaults);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Setting up listener for ${docId}`);
    const ref = doc(db, "siteContent", docId);
    const unsubscribe = onSnapshot(
      ref,
      (snap) => {
        console.log(`Snapshot received for ${docId}:`, snap.exists() ? snap.data() : "No document");
        if (snap.exists()) {
          const newData = { ...defaults, ...snap.data() };
          console.log(`Merged data for ${docId}:`, newData);
          setData(newData);
        } else {
          console.log(`Document ${docId} doesn't exist, using defaults`);
          setData(defaults);
        }
        setLoading(false);
      },
      (err) => {
        console.error(`Error listening to ${docId}:`, err);
        setError(err);
        setData(defaults);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [docId, defaults]);

  return { data, loading, error };
}
