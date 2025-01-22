import React, { useState } from "react";

import "../CSS/Photos.css";
import "../CSS/table.css";
import natsPic from "../Pictures/natsTeamPic.JPG";
import "../CSS/Info.css";
function EmailArchive() {
  return (
    <>
        <div class="teamPic-container">
          <img src={natsPic} alt="" className="fredHalfPic" />
        </div>
        <body class="bg-black text-white font-sans">
  <div class="max-w-4xl mx-auto p-6 text-left">
    <h1 class="text-4xl font-bold text-red-600 mb-6">Maryland Club Running</h1>
    <p class="italic mb-8">“Our mission is to support and encourage a healthy approach to running and training for all members of the University of Maryland.”</p>

    <h2 class="text-3xl font-bold text-yellow-400 mb-4">Table of Contents</h2>
    <ol class="list-decimal list-inside mb-8">
      <li><a href="#officers" class="text-red-400 underline">Who is in charge of the club?</a></li>
      <li><a href="#contact" class="text-red-400 underline">How do I contact the club?</a></li>
      <li><a href="#join" class="text-red-400 underline">How do I join? (EMAIL LIST SIGNUP!!)</a></li>
      <li><a href="#practices" class="text-red-400 underline">When/where are practices?</a></li>
      <li><a href="#sprinters" class="text-red-400 underline">Does the club take sprinters, hurdlers, jumpers, and throwers?</a></li>
      <li><a href="#training" class="text-red-400 underline">How does the club train?</a></li>
      <li><a href="#beginners" class="text-red-400 underline">What if I’m out of shape or not an experienced runner?</a></li>
      <li><a href="#competition" class="text-red-400 underline">How can I compete with the club?</a></li>
      <li><a href="#cost" class="text-red-400 underline">How much does the club cost?</a></li>
    </ol>

    <section id="officers" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">Who is in charge of the club?</h2>
      <p>We have a team of 8 officers elected every December! They manage practices, competition travel, funds, and social events. You can learn more about our officers <a className="text-red-400 underline" href="/about">here</a>.</p>
    </section>

    <section id="contact" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">How do I contact the club?</h2>
      <p>The best way to contact us is via email: <a href="mailto:umdclubrunning@gmail.com" class="text-red-400 underline">umdclubrunning@gmail.com</a>. You can also connect with us on:</p>
      <ul class="list-disc list-inside">
        <li><a href="https://umdclubrunning.com" class="text-red-400 underline">Website</a></li>
        <li><a href="https://groupme.com/join_group/101188221/kLKAA5Pg" class="text-red-400 underline">GroupMe</a></li>
        <li><a href="https://www.strava.com/clubs/UMDCR" class="text-red-400 underline">Strava</a></li>
        <li><a href="https://instagram.com/umdclubrunning" class="text-red-400 underline">Instagram</a></li>
      </ul>
    </section>
    <section id="join" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">How do I join?</h2>
      <p>Follow these three easy steps to join the club:</p>
      <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
  <span class="font-medium">IMPORTANT: As of 8/25/2024 the new 2024-2025 imleagues team is now available to
sign up for. It is vital that you sign up on the most current roster before attending
practice</span> Change a few things up and try submitting again.
</div>
      <ol class="list-decimal list-inside">
        <li>Join the email list <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform" class="text-red-400 underline">here</a>.</li>
        <p>If for some reason you do not get any emails, you can find them archived <a class="text-red-400 underline" href="/Emails">here</a>!</p>
        <li>Sign up on <a href="https://www.imleagues.com/spa/club/4395e0c781af4905a4088a9561509399/home" class="text-red-400 underline">IMLeagues</a>:
          <ol class="list-decimal list-inside ml-4">
            <li>Log in with your UMD Directory ID and password.</li>
            <li>Search for "Maryland Club Running."</li>
            <li>Click "Join" and complete the required waiver forms.</li>
          </ol>
        </li>
        <li>Register on <a href="https://terplink.umd.edu" class="text-red-400 underline">TerpLink</a>:
          <ol class="list-decimal list-inside ml-4">
            <li>Log in with your UMD Directory ID and password.</li>
            <li>Search for "Maryland Club Running."</li>
            <li>Click "Join" and fill out your profile information.</li>
          </ol>
        </li>
      </ol>
    </section>


    <section id="practices" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">When/where are practices?</h2>
      <p><b>First day of practice:</b> September 3, 2024 (Fall), January 27 (Spring) </p>
      <p><b>Schedule:</b> Monday-Friday at 5:00 PM (4:00 PM after daylight savings).</p>
      <p>Meeting locations:</p>
      <ul class="list-disc list-inside">
        <li><b>Distance team:</b> School of Public Health overhang.</li>
        <li><b>Sprinters/throwers:</b> Kehoe Track.</li>
      </ul>
    </section>

    <section id="sprinters" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">Does the club take sprinters, hurdlers, jumpers, and throwers?</h2>
      <p>Yes! We have year-round practices and attend 5-7 track meets each spring.</p>
    </section>

    <section id="training" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">How does the club train?</h2>
      <p>Training plans are shared via weekly emails and on the website. Practices include:</p>
      <ul class="list-disc list-inside">
        <li><b>Workouts:</b> Structured training on the track or trails.</li>
        <li><b>Easy runs:</b> Flexible distances and paces decided at practice.</li>
      </ul>
    </section>

    <section id="beginners" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">What if I’m out of shape or not an experienced runner?</h2>
      <p>Everyone is welcome! We have runners of all experience levels, from beginners to varsity-level athletes.</p>
    </section>

    <section id="competition" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">How can I compete with the club?</h2>
      <p>Competitions are completely voluntary and include cross-country meets, track meets, and road races. Most meets are day trips, but some overnight meets are club-sponsored.</p>
    </section>

    <section id="cost" class="mb-8">
      <h2 class="text-2xl font-bold text-yellow-400 mb-4">How much does the club cost?</h2>
      <p>The club is free for non-competing members. Competing members pay:</p>
      <ul class="list-disc list-inside">
        <li>$20 per semester or $30 per year.</li>
        <li>$5 per meet (excluding Nationals).</li>
      </ul>
      <p>Financial assistance is available. Contact an officer if you need help.</p>
    </section>
  </div>
</body>
    </>
  );
}

export default EmailArchive;
