import React, { useEffect, useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import "../CSS/Photos.css";
import "../CSS/table.css";
import Cam from "../Pictures/photos.JPG";

function Photos() {
  let [photoArchive, setPhotoArchive] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "archives/photos");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setPhotoArchive(Object.values(snapshot.val()));
      }
    };

    fetchData();
  }, []);

  photoArchive.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const tableRows = photoArchive.map((archive) => (
    <tr key={`${archive.date}-${archive.raceName}`}>
      <td>{archive.date}</td>
      <td>{archive.raceName}</td>
      <td>
        <div className="flex flex-wrap gap-2">
          {archive.links.map((link, index) => (
            <a
              key={`${archive.raceName}-${index}`}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(29,27,41,0.12)] bg-white px-3 py-1 text-sm font-semibold text-[#d62828] transition-colors hover:border-[#f6a622] hover:bg-[#fff3da]"
            >
              Album {index + 1}
            </a>
          ))}
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={Cam}
          alt="Club photographers capturing the action"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Archive</span>
          <h1 className="page-title">Photo Library</h1>
      
        </header>

        <section className="page-section">
          <div className="page-card">
            <p>
              Each link opens a gallery captured by our team photographers or
              community members. Spot something missing? Send new albums to{" "}
              <a href="mailto:umdclubrunning@gmail.com">
                umdclubrunning@gmail.com
              </a>{" "}
              and we&apos;ll add them here.
            </p>
          </div>
        </section>

        <section className="page-section">
          {photoArchive.length === 0 ? (
            <div className="page-card">
              <p>We&apos;re loading the archive — hang tight!</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Albums</th>
                  </tr>
                </thead>
                <tbody>{tableRows}</tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Photos;
