import React, { useState } from "react";

import "../CSS/Photos.css";
import "../CSS/table.css";
import EvanFlag from "../Pictures/evanFlag.png";

const emailList = require("..//emails/email_list.json");

function EmailArchive() {
  const [selectedEmail, setSelectedEmail] = useState("none");
  const [selectedEmailSubject, setSelectedEmailSubject] = useState("none");

  return (
    <>
      <div class="teamPic-container">
        <img src={EvanFlag} alt="" className="fredHalfPic" />
      </div>

      {/* Container for the photo archive */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-white text-3xl font-bold mt-5 mb-5">
          Email Archive
        </h3>
        {selectedEmail === "none" ? (
          <span></span>
        ) : (
          <div>
            <p
              onClick={(e) => {
                setSelectedEmail("none");
              }}
              style={{ color: "white" }}
            >
              Close Email
            </p>
            <p>{selectedEmailSubject}</p>
            <embed
              src={require("..//emails/email_files/" + selectedEmail)}
              width="800px"
              height="2100px"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}
        <br></br>
        <div className="tableContainer">
          <table className="mb-10">
            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping over filtered records to display in the table */}
              {emailList.map((item) => (
                <tr>
                  <td>{item.date}</td>
                  <td>{item.subject}</td>
                  <td>
                    <span
                      onClick={(e) => {
                        setSelectedEmail(item.filename);
                        setSelectedEmailSubject(item.subject);
                      }}
                    >
                      Click to read
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default EmailArchive;
