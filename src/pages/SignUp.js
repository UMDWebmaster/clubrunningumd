import "../CSS/SignUp.css";

export default function SignUp() {
  return (
    <>
      <span>
        <br></br>
      </span>
      <h3 className="text-white text-3xl font-bold mt-7 mb-5">
        UMD Club Running Email Sign Up
      </h3>
      <p>
        Please sign up for the email list using this{" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform">
          <strong>link</strong> if the form isn't working
        </a>
      </p>
      <div className="iframeWrapper">
        <iframe
          className="signUpIframe"
          title='signup'
          src="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform?embedded=true"
          width="100%"
          height="1036"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}