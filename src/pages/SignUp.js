import "../CSS/SignUp.css";

export default function SignUp() {
  return (
    <div className="page-shell tight join-page">
      <div className="content-container">
        <header className="page-header">
          <span className="page-eyebrow">Stay In The Loop</span>
          <h1 className="page-title">Join The Email List</h1>
          <p className="page-subtitle">
            We send one (sometimes two) emails a week with practice plans, race
            sign-ups, and the occasional meme. Drop your info below and
            you&apos;re in.
          </p>
        </header>

        <section className="page-section">
          <p>
            If the embedded form below refuses to load,{" "}
            <strong>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform"
                target="_blank"
                rel="noreferrer"
              >
                open the Google Form in a new tab
              </a>
            </strong>{" "}
            and you&apos;ll see the same questions.
          </p>

          <div className="signup-embed">
            <iframe
              className="signUpIframe rounded-2xl"
              title="UMD Club Running email sign up form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform?embedded=true"
              width="100%"
              height="1036"
              marginWidth="0"
              style={{ border: "0", minHeight: "720px" }}
            >
              Loading…
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
