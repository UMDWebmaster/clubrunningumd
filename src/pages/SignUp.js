import React, { useEffect } from "react";
import "../CSS/SignUp.css";

//DO NOT EDIT - Sincerely, Caleb Holland
function SignUp() {
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
    <div className="construc-container">
      <h3 className="text-white text-3xl font-bold mt-5 mb-5">
        UMD Club Running Email Sign Up{/* Heading */}
      </h3>
      <div className="iframeWrapper">
        <iframe
          className="signUpIframe"
          src="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform?embedded=true"
          width="640"
          height="1036"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default SignUp;
