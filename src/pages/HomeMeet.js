import React from "react";
import natsPic from "../Pictures/terpInvite.png";

export default function About() {
  return (
 
    <div className="text-white font-bold bg-black">
      {/* Container for the team picture */}
      <div class="teamPic-container">
        {/* Display the team picture */}
        <img src={natsPic} alt="" className="teamPic" />
      </div>
      <div className="text-left max-w-4xl mx-auto p-6 text-left">
      {/* Section for event details */}
      <div>
        {/* Main content container */}
        <div className="flex flex-col">
          {/* Title of the event */}
     
          <h1 className="text-5xl font-bold mt-5 mb-5 text-center">
            5th Annual Terrapin Invitational
          </h1>
          <p>Join us for the 5th annual Terrapin Invitational on Sunday, April 27th! Meet day details and registration are still being worked out. You can take a look below at last year's information for a general idea of what to expect. See you soon! 🏃‍♂️🏃‍♀️ </p>

          {/* Date and location of the event */}
          <h2 className="text-2xl font-bold mt-5 mb-5">
            When and Where?
          </h2>
          <ol>
            <li>
              <a href="https://maps.app.goo.gl/Yzw4hC2NY6ynLfP68">Kehoe Track and Field Complex
7898 Championship Ln, College Park, MD 20742</a></li>
            <li>April, 27th 2025 (Start time probably same as last year, 10 AM)</li>
          </ol>
       

        </div>

        {/* Section for order of events */}
        <div className="contentOrderOfEvents"></div>
        <h2 className="text-2xl font-bold mt-5 mb-5">
          Order of Events:
        </h2>
        <div class="p-4 mb-4 text-sm text-orange-500 rounded-lg bg-yellow-50 dark:bg-gray-800" role="alert">
         ⚠️ We have not finalized this year's order of events. It will likely be similar to last year's which you can find below.
        </div>
          <p>Women's group first, followed by men's group</p>
          <h3 className="text-xl underline">Track Events (Starts at 10 AM)</h3>
          {/* List of track events */}
          <ol className="">
            <li>Alumni Mile (Combined)</li>
            <li>Swedish Medley Relay</li>
            <li>5000m Run</li>
            <li>4x800 Relay</li>
            <li>100m Hurdles/110m Hurdles</li>
            <li>100m Dash</li>
            <li>400m Dash</li>
            <li>1500m Run</li>
            <li>400m Hurdles</li>
            <li>1500m Racewalk</li>
            <li>4x100m Relay</li>
            <li>800m Dash</li>
            <li>200m Dash</li>
            <li>4x400m Relay</li>
          </ol>
          <h3 className="text-xl underline">Field Events</h3>
          <ol>
            <li>9:30am - High Jump</li>
            <li>10:00am - Shot Put (combined)</li>
            <li>11:15am - Women’s Long Jump</li>
            <li>12:00 - Women’s Discus, Men’s Long Jump</li>
            <li>1:15pm - Men’s Discus, Women’s Triple Jump</li>
            <li>2:00pm - Men’s Triple Jump</li>
          </ol>
      </div>

      {/* Section for registration */}
      <div className="contentRegistration"></div>
      <h2 className=" text-2xl font-bold mt-5 mb-5">
        Registration </h2>
      <div class="p-4 mb-4 text-sm text-orange-500 rounded-lg bg-yellow-50 dark:bg-gray-800" role="alert">
         ⚠️ We have not finalized this year's registration. It will likely be similar to last year's which you can find below.
        </div>
        <p>
        $20 per runner or $300 per team.
        </p>
        <p>
        Registration opens on March 25, 2024 and closes on April 18, 2024 at
          11:59pm
        </p>
      {/* Section for awards */}
      <h2 className="text-2xl font-bold mt-5">
        Awards
      </h2>
      <p>
        The winner of each event will receive a Terrapin Invite pint glass.
        Team awards will go to the top 3 teams overall.
      </p>
     
      <h2 className="text-2xl">Archived Meet Results</h2>
      <p>Meet records can be found <a className="underline" href="/home-meet-records">here</a>.</p>
      <ol>
        <li className="underline"><a href="https://results.firstlanetiming.com/meets/35171">2024 Results</a></li>
      </ol>

    </div>
    
    </div>
   
  );
}