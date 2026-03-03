import React, { useState, useEffect } from "react";

import "../CSS/Photos.css";
import "../CSS/table.css";
import EvanFlag from "../Pictures/evanFlag.png";

const DRIVE_FOLDER_URL =
  "https://script.google.com/macros/s/AKfycbye_nMUjOoPmsbkktSalBJWDHR6qaLh-bOlCFYoBbfH3UgFJ9Byd2JZzMfx7L3xTE7y/exec";

function EmailArchive() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDriveId, setSelectedDriveId] = useState(null);
  const [selectedEmailSubject, setSelectedEmailSubject] = useState("");

  useEffect(() => {
    fetch(DRIVE_FOLDER_URL)
      .then((res) => res.json())
      .then((data) => {
        setEmails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="page-shell">
      <div className="page-hero">
        <img
          src={EvanFlag}
          alt="Email team celebrating"
          className="page-hero-image contain"
        />
      </div>

      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Updates</span>
          <h1 className="page-title">Email Archive</h1>
          <p className="page-subtitle">
            Missed a weekly recap? Catch up on every message sent to the Maryland
            Club Running list — practice notes, meet recaps, social highlights,
            and more.
          </p>
        </header>

        {selectedDriveId && (
          <section className="page-section">
            <div className="page-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-neutral-800">
                  {selectedEmailSubject}
                </h2>
                <button
                  type="button"
                  onClick={() => setSelectedDriveId(null)}
                  className="inline-flex items-center gap-1 rounded-full border border-[rgba(29,27,41,0.15)] px-3 py-1 text-sm font-semibold text-neutral-700 transition-colors hover:border-[#d62828] hover:text-[#d62828]"
                >
                  Close
                </button>
              </div>
              <div className="mt-4 w-full overflow-hidden rounded-2xl border border-[rgba(29,27,41,0.12)] bg-white shadow-inner">
                <iframe
                  src={`https://drive.google.com/file/d/${selectedDriveId}/preview`}
                  title={selectedEmailSubject}
                  width="100%"
                  height="900px"
                  allow="autoplay"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </section>
        )}

        <section className="page-section">
          {loading ? (
            <p className="text-center text-neutral-500 py-8">Loading emails...</p>
          ) : (
            <div className="table-wrapper">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Open</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((item) => (
                    <tr key={item.driveId}>
                      <td>
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "numeric",
                          day: "numeric",
                          year: "2-digit",
                        })}
                      </td>
                      <td>{item.name.replace(/\.pdf$/i, "")}</td>
                      <td>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full border border-[rgba(29,27,41,0.12)] bg-white px-3 py-1 text-sm font-semibold text-[#d62828] transition-colors hover:border-[#f6a622] hover:bg-[#fff3da]"
                          onClick={() => {
                            setSelectedDriveId(item.driveId);
                            setSelectedEmailSubject(item.name.replace(/\.pdf$/i, ""));
                          }}
                        >
                          Read
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default EmailArchive;
