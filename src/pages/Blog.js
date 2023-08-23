import React, { useEffect } from 'react';
import '../CSS/Construc.css';
import construcPic from '../Pictures/trafficcone.png';


function Records() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const $ = window.jQuery; // Assuming jQuery is loaded by the Mailchimp script

            if ($) {
                // Ensure these variables are accessible
                window.fnames = window.fnames || [];
                window.ftypes = window.ftypes || [];

                window.fnames[0] = 'EMAIL';
                window.ftypes[0] = 'email';
                window.fnames[1] = 'FNAME';
                window.ftypes[1] = 'text';
                window.fnames[2] = 'LNAME';
                window.ftypes[2] = 'text';

                const $mcj = $.noConflict(true);
            }
        };
    }, []); // Run the effect only once

    return (
        <div className="construc-container">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css"/>
                <div id="mc_embed_signup">
                <form action="https://gmail.us4.list-manage.com/subscribe/post?u=aea7db195a60f69f817e5110d&amp;id=c08d6f1486&amp;f_id=002edfe8f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                        <h2>Maryland Club Running Email List</h2>

                            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                                </label>
                                <input type="email" name="EMAIL" class="required email" id="mce-EMAIL"/>
                                    <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-FNAME">First Name </label>
                                <input type="text" name="FNAME" class="" id="mce-FNAME"/>
                                    <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
                            </div>
                            <div class="mc-field-group">
                                <label for="mce-LNAME">Last Name </label>
                                <input type="text" name="LNAME" class="" id="mce-LNAME"/>
                                    <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
                            </div>
                            <div><input type="hidden" name="tags" value="7025981"/></div>
                            <div id="mce-responses" class="clear foot">
                                <div class="response" id="mce-error-response"></div>
                                <div class="response" id="mce-success-response"></div>
                            </div>    
                            <div class="optionalParent">
                                <div class="clear foot">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/>
                                        <p class="brandingLogo"><a href="http://eepurl.com/h8EvGH" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" alt="mail"/></a></p>
                                </div>
                            </div>
                        </div>
                    </form>
                  
                </div>
        </div>
    );
}

export default Records;
