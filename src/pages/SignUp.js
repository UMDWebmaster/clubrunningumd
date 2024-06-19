import React, { useEffect } from "react";

//DO NOT EDIT - Sincerely, Caleb Holland
function SignUp() {
  // Run once when component mounts to load Mailchimp script
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    // Set script source to Mailchimp validation script
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    // Asynchronously load script
    script.async = true;
    // Append script to body
    document.body.appendChild(script);

    // Once script is loaded
    script.onload = () => {
      const $ = window.jQuery; // Assuming jQuery is loaded by the Mailchimp script

      if ($) {
        // Ensure these variables are accessible globally
        window.fnames = window.fnames || [];
        window.ftypes = window.ftypes || [];

        // Set up form field names and types
        window.fnames[0] = "EMAIL";
        window.ftypes[0] = "email";
        window.fnames[1] = "FNAME";
        window.ftypes[1] = "text";
        window.fnames[2] = "LNAME";
        window.ftypes[2] = "text";
      }
    };
  }, []);

  // Render sign-up form
  return (
    <div className="construc-container">
      <div id="mc_embed_shell">
        {/* Link to Mailchimp stylesheet */}
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />

        <div id="mc_embed_signup">
          {/* Mailchimp sign-up form */}
          <form
            action="https://gmail.us4.list-manage.com/subscribe/post?u=aea7db195a60f69f817e5110d&amp;id=c08d6f1486&amp;f_id=002edfe8f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2>Maryland Club Running 2023-2024 Email List</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              {/* Email input */}
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email Address *</label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required=""
                />
              </div>
              {/* First name input */}
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name *</label>
                <input
                  type="text"
                  name="FNAME"
                  className=" text"
                  id="mce-FNAME"
                />
              </div>
              {/* Last name input */}
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name *</label>
                <input
                  type="text"
                  name="LNAME"
                  className=" text"
                  id="mce-LNAME"
                />
              </div>
              {/* Hidden field for tags */}
              <div hidden="">
                <input type="hidden" name="tags" value="7835950" />
              </div>
              {/* Response divs */}
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              {/* Subscription button and Mailchimp badge */}
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Subscribe"
                  />
                  <p>
                    <a
                      href="http://eepurl.com/h8EvGH"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      <span>
                        <img
                          className="refferal_badge"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
