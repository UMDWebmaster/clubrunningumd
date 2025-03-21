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
          <p>Join us for the 5th annual Terrapin Invitational on Sunday, April 27th! Meet day details and registration are up to date and you can take a look below. See you soon! 🏃‍♂️🏃‍♀️ </p>

          {/* Date and location of the event */}
          <h2 className="text-2xl font-bold mt-5 mb-5">
            When and Where?
          </h2>
          <ol>
            <li>
              <a href="https://maps.app.goo.gl/Yzw4hC2NY6ynLfP68">Kehoe Track and Field Complex
7898 Championship Ln, College Park, MD 20742</a></li>
            <li>April, 27th 2025</li>
          </ol>
       

        </div>

        {/* Section for order of events */}
        <div className="contentOrderOfEvents"></div>
        <h2 className="text-2xl font-bold mt-5 mb-5">
          Order of Events:
        </h2>
        <div class="p-4 mb-4 text-sm text-green-500 rounded-lg bg-yellow-50 dark:bg-gray-800" role="alert">
        ✅ Event details for this year's (2025) meet are up to date!
        </div>
          <p>Women's group first, followed by men's group</p>
          <h3 className="text-xl underline">Track Events (Starts at 10 AM)</h3>
          {/* List of track events */}
          <ol className="">
            <li>Alumni Mile (Combined)</li>
            <li>Swedish Medley Relay</li>
            <li>5000m Run</li>
            <li>4x800 Relay</li>
            <li>100m Dash</li>
            <li>100m Hurdles/110m Hurdles</li>
            <li>400m Dash</li>
            <li>1500m Run</li>
            <li>4x100m Relay</li>
            <li>800m Dash</li>
            <li>200m Dash</li>
            <li>4x400m Relay</li>
            <li>4x Anything but a 400 Relay (Not Scored): 
              <ol>
                <li>Four runners, four legs, 1600m total team distance. But you CANNOT run a 400! The team races a 1600m total and can hand off wherever so that each person can run any distance (each person still runs only one leg of the race).</li>
              </ol>
            </li>
          </ol>
          <h3 className="text-xl underline">Field Events</h3>
          <ol>
            <li>9:30am - High Jump</li>
            <li>10:00am - Shot Put (combined)</li>
            <li>11:15am - Women’s Long Jump</li>
            <li>12:00pm - Women’s Discus, Men’s Long Jump</li>
            <li>1:15pm - Men’s Discus, Women’s Triple Jump</li>
            <li>2:00pm - Men’s Triple Jump</li>
          </ol>
      </div>

      {/* Section for registration */}
      <div className="contentRegistration"></div>
      <h2 className=" text-2xl font-bold mt-5 mb-5">
        Registration </h2>
      <div class="p-4 mb-4 text-sm text-green-500 rounded-lg bg-yellow-50 dark:bg-gray-800" role="alert">
         ✅ Registration details for this year's (2025) meet are up to date!
        </div>
        <p>
        $30 per athlete or $450 per team.
        </p>
        <p>
        Registration opens on Friday March 21 and closes on Saturday April 19 at 11:59 PM
        </p>
        <p>
          Registration can be found by clicking <a className="text-red-500 underline" href="https://www.athletic.net/TrackAndField/meet/593578/">here</a>.
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
      <p>Meet records can be found <a className="underline text-red-500" href="/home-meet-records">here</a>.</p>
      <ol>
        <li className="underline"><a className="underline text-red-500" href="https://results.firstlanetiming.com/meets/35171">2024 Results</a></li>
      </ol>

    </div>
    
    </div>
   
  );
}