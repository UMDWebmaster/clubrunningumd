import React, { useState } from "react";

import "../CSS/Photos.css";
import "../CSS/table.css";
import EvanFlag from "../Pictures/evanFlag.png";

const emailList = require("..//emails/email_list.json");

function EmailArchive() {
  const [selectedEmail, setSelectedEmail] = useState("none");
  const [selectedEmailSubject, setSelectedEmailSubject] = useState("none");

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

        {selectedEmail !== "none" && (
          <section className="page-section">
            <div className="page-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-neutral-800">
                  {selectedEmailSubject}
                </h2>
                <button
                  type="button"
                  onClick={() => setSelectedEmail("none")}
                  className="inline-flex items-center gap-1 rounded-full border border-[rgba(29,27,41,0.15)] px-3 py-1 text-sm font-semibold text-neutral-700 transition-colors hover:border-[#d62828] hover:text-[#d62828]"
                >
                  Close
                </button>
              </div>
              <div className="mt-4 w-full overflow-hidden rounded-2xl border border-[rgba(29,27,41,0.12)] bg-white shadow-inner">
                <embed
                  src={require("..//emails/email_files/" + selectedEmail)}
                  width="100%"
                  height="900px"
                />
              </div>
            </div>
          </section>
        )}

        <section className="page-section">
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
                {emailList.map((item) => (
                  <tr key={`${item.date}-${item.subject}`}>
                    <td>{item.date}</td>
                    <td>{item.subject}</td>
                    <td>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-[rgba(29,27,41,0.12)] bg-white px-3 py-1 text-sm font-semibold text-[#d62828] transition-colors hover:border-[#f6a622] hover:bg-[#fff3da]"
                        onClick={() => {
                          setSelectedEmail(item.filename);
                          setSelectedEmailSubject(item.subject);
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
        </section>
      </div>
    </div>
  );
}

export default EmailArchive;
