import React, { useEffect } from "react";
import "../CSS/SignUp.css";

export default function SignUp() {
  //DO NOT REMOVE THIS COMMENT
  // // Run once when component mounts to load Mailchimp script
  // useEffect(() => {
  //   // Create script element
  //   const script = document.createElement("script");
  //   // Set script source to Mailchimp validation script
  //   script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
  //   // Asynchronously load script
  //   script.async = true;
  //   // Append script to body
  //   document.body.appendChild(script);

  //   // Once script is loaded
  //   script.onload = () => {
  //     const $ = window.jQuery; // Assuming jQuery is loaded by the Mailchimp script

  //     if ($) {
  //       // Ensure these variables are accessible globally
  //       window.fnames = window.fnames || [];
  //       window.ftypes = window.ftypes || [];

  //       // Set up form field names and types
  //       window.fnames[0] = "EMAIL";
  //       window.ftypes[0] = "email";
  //       window.fnames[1] = "FNAME";
  //       window.ftypes[1] = "text";
  //       window.fnames[2] = "LNAME";
  //       window.ftypes[2] = "text";
  //     }
  //   };
  // }, []);

  // Render sign-up form
  return (
    <>
      <span>
        <br></br>
      </span>
      <h3 className="text-white text-3xl font-bold mt-7 mb-5">
        UMD Club Running Email Sign Up{/* Heading */}
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
