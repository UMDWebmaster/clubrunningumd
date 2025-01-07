import "../CSS/Photos.css";
import "../CSS/table.css";
import natsPic from "../Pictures/natsTeamPic.JPG";

function EmailArchive() {
  return (
    <>
      <div class="teamPic-container">
        <img src={natsPic} alt="" className="fredHalfPic" />
      </div>

      {/* Container for the photo archive */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-white text-3xl font-bold mt-5 mb-5">
          New Member Information
        </h3>
        <p className="text-white">
          Sign up for emails:{" "}
          <strong>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </strong>
          <br />
          Join GroupMe:{" "}
          <strong>
            <a
              href="https://groupme.com/join_group/101188221/kLKAA5Pg"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </strong>
        </p>
        <div>
          <embed
            src={require("..//Maryland Club Running Spring 2024 Information.pdf")}
            width="800px"
            height="2100px"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default EmailArchive;
