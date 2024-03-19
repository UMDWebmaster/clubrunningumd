import React from "react";
import "../CSS/About.css";
import natsPic from "../Pictures/terpInvite.png";

function About() {
  return (
    <div>
      <div class="teamPic-container">
        <img src={natsPic} alt="" className="teamPic" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-4xl font-bold mt-5 mb-5">
            4th Annual Terrapin Invitational
          </h3>
          <h2 className="text-white text-2xl font-bold mt-5 mb-5">
            4/20/2024 - College Park, MD{"\n"}
            <br></br>View{" "}
            <a
              href="./home-meet-records"
              style={{ textDecorationLine: "underline" }}
            >
              Meet Records
            </a>{" "}
            {" - "} Results Coming Soon
          </h2>
          <div className="contentLocation"></div>
          <h4 className="text-white text-2xl font-bold mt-5 mb-5">
            Location: <br></br>Kehoe Track and Field Complex<br></br> 7898
            Championship Ln, College Park, MD 20742
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.999025924254!2d-76.95096242204218!3d38.98797578534567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c69065bd94bb%3A0x3c9fa3164b2eee7!2sLudwig%20Field!5e0!3m2!1sen!2sus!4v1710859163671!5m2!1sen!2sus"
            width="500"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contentOrderOfEvents"></div>
        <h4 className="text-white text-2xl font-bold mt-5 mb-5">
          Order of Events:
        </h4>
        <h5 className="text-white text-s font-bold mt-5 mb-5">
          Women followed by Men <br></br>
          <br></br> Track:<br></br> 9:00am: 10k (combined) **[Pending interest]{" "}
          <br></br> 10:00am: Alumni Mile (combined) <br></br> Swedish Medley
          Relay <br></br> 5000m Run <br></br> 4x800 Relay <br></br> 100mH/110mH{" "}
          <br></br> 100m Dash <br></br> 400m Dash <br></br> 1500m Run <br></br>{" "}
          400m Hurdles <br></br> 3k Steeplechase <br></br> 4x100m Relay{" "}
          <br></br> 800m Dash <br></br> 200m Dash <br></br> 4x400m Relay
          <br></br> <br></br>Field:<br></br> 9:30am- High Jump <br></br>{" "}
          10:00am- Shot Put (combined)<br></br> 11:15am- Women’s Long Jump{" "}
          <br></br> 12:00- Women’s Discus, Men’s Long Jump <br></br> 1:15pm-
          Men’s Discus, Women’s Triple Jump <br></br> 2:00pm Men’s Triple Jump
        </h5>
      </div>
      <div className="contentRegistration"></div>
      <h4 className="text-white text-2xl font-bold mt-5 mb-5">
        Registration: <br></br>
        <span className="text-lg">
          Registration opens on March 25, 2024 and closes on April 14, 2024 at
          11:59pm<br></br>
          Cost: $20 per runner or $300 per team.
        </span>
      </h4>
      <h4 className="text-white text-2xl font-bold mt-5 mb-5">
        Awards: <br></br>
        <span className="text-lg">
          The winner of each event will receive a Terrapin Invite pint glass.
          <br></br>
          Team awards will go to the top 3 teams overall.
        </span>
      </h4>
    </div>
  );
}

export default About;
