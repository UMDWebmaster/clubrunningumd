import React from "react";
import "../CSS/About.css"; // Importing CSS styles
import dayImage from "../Pictures/dayPic.JPG"; // Importing images
import domImage from "../Pictures/dominick.png";
import zachImage from "../Pictures/zack.jpeg";
import evanImage from "../Pictures/evanProfile.png";
import lillianImage from "../Pictures/lillianProfile.JPG";
import samImage from "../Pictures/samPic.JPG";
import staceyImage from "../Pictures/staceyPic.JPG";
import jonahImage from "../Pictures/JonahProfile.jpeg";

function About() {
  return (
    <div className="about-us-container">
      {" "}
      {/* Main container */}
      {/* Zach's bio card */}
      <div className="bio-card">
        {" "}
        {/* Container for each team member */}
        <div className="align-left md:w-1/2">
          {" "}
          {/* Image container */}
          <img src={zachImage} alt="Zach Pic" /> {/* Zach's image */}
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          {" "}
          {/* Content container */}
          <h1 className="bio-content">President: Zach Kiedrowski</h1>{" "}
          {/* Zach's position */}
          <p className="text-black mb-6">
            {" "}
            {/* Zach's bio */}
            Zach is a third-year member of the club and an Aberdeen High School
            alum. He is pursuing a dual degree in environmental science and
            statistics. Zach started running his sophomore year of high school
            and fell in love the sport, acting as the captain of his track team
            his senior year. Zach ran 2:55:38 at the 2022 Baltimore Marathon but
            his crowning achievement is winning the 2023 Ice Cream Trifecta Run!
          </p>
        </div>
      </div>
      {/* Sam's bio card */}
      <div className="bio-card">
        <div className="align-left md:w-1/2 md:order-2">
          <img src={samImage} alt="Sam Pic" />
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          <h1 className="bio-content">Vice President: Sam Fields</h1>
          <p className="text-black mb-6">
            Sam Fields is a junior physics major from Towson, Maryland. When not
            running, Sam can be found listening to Jimmy Hendrix and JPEGmafia.
            In MarioKart Wii, he can be found using Funky Kong and the Flame
            Runner. As Vice President, Sam does all the behind the scenes work
            that allows you to attend races around the country!
          </p>
        </div>
      </div>
      {/* Lillian's bio card */}
      <div className="bio-card">
        <div className="align-left md:w-1/2 md:order-2">
          <img src={lillianImage} alt="Lillian Pic" />
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          <h1 className="bio-content">Co-Treasurer: Lillian Hsu</h1>
          <p className="text-black mb-6">
            Lillian is an environmental science major from Germantown, Maryland.
            After a year of being Vice President of the club she decided that
            she’d rather spend her free time looking at the club’s Venmo
            transactions as your Club Financial Treasurer. Lillian can also be
            found taking photos at meets (and she doesn’t charge for or
            watermark them which is a nice perk). She is also a collector of
            singlets and is currently in the market for a UM-Duluth singlet (if
            you know anyone).
          </p>
        </div>
      </div>
      {/* Day's bio card */}
      <div className="bio-card">
        <div className="align-left md:w-1/2">
          <img src={dayImage} alt="Day Pic" />
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          <h1 className="bio-content">Co-Treasurer: Day Leone</h1>
          <p className="text-black mb-6">
            Meet Day Leone, the enigmatic "undecided" STEM aficionado hailing
            from the hidden gem of Cecil County, Maryland (yeah I don’t know
            where that is either). Beyond the realm of complex equations and
            scientific conundrums, Day proudly assumes the role of your
            fundraising treasurer, weaving a tapestry of exciting opportunities
            to fuel your adventures on the track. When he's not deciphering the
            mysteries of STEM, you'll find Day carving through snow-capped peaks
            on skis or conquering long-distance runs with the finesse of a
            seasoned athlete. But that's not all – Day has a soft spot for
            e-girls and a special fondness for the elusive i-ladies, adding a
            touch of digital charm to his eclectic interests. In the realm of
            guilty pleasures, Day harbors a deep love for that mysterious place
            where Frosty's reign supreme, savoring every frosty delight with a
            twinkle in his eye. So, brace yourselves for a fundraising journey
            like no other, guided by Day's dynamic spirit, passion for the
            outdoors, and an unmistakable zest for life. Get ready to run, ski,
            and fundraise your way to victory with Day Leone at the helm!
          </p>
        </div>
      </div>
      {/* Dominick's bio card */}
      <div className="bio-card">
        <div className="align-left md:w-1/2">
          <img src={domImage} alt="dom Pic" />
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          <h1 className="bio-content">Sprint Chair: Dominick Cardone</h1>
          <p className="text-black mb-6">
            Dominick is a junior computer science major from the beautiful,
            definitely not smelly, plains of New Jersey. When not running, he
            enjoys lifting weights, eating, experimenting with new recipies, and
            playing other sports. His favorite part of track, aside from all the
            amazing people, is getting to sleep and becoming a glutton after
            every meet. Whether you want to set a club record or just want to
            run with friends, I'll do my best to help you. Come to the track and
            run with the sprinters!
          </p>
        </div>
      </div>
      {/* Stacey's bio card */}
      <div className="bio-card">
        <div className="align-left md:w-1/2 md:order-2">
          <img src={staceyImage} alt="Stacey Pic" />
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          <h1 className="bio-content">
            Apparel Coordinator: Stacey Fitzsimmons
          </h1>
          <p className="text-black mb-6">
            Stacey Fitzsimmons is a sophomore majoring in mathematics and
            economics from Milwaukee, Wisconsin. When he's not running through
            the frozen tundra of Wisconsin, he is probably watching every NBA
            game that happens to be on, keeping track of his beloved fantasy
            players (SGA is his favorite next to Giannis). On his high school
            team he was pretty much a professional alternate runner, going on
            free trips to state meets without the pressures of having to
            compete. He hopes to fulfill all of your apparel hopes and dreams
            and is always open to suggestions.
          </p>
        </div>
      </div>
      {/* Jonah's bio card */}
      <div className="bio-card">
        <div className="align-left md:w-1/2">
          <img src={jonahImage} alt="Jonah Pic" />
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          <h1 className="bio-content">Social Chair: Jonah Plotkin</h1>
          <p className="text-black mb-6">
            Jonah Plotkin is a freshman majoring in computer science from
            Bethesda, Maryland. He has been an avid runner since early middle
            school and was a varsity runner for the Walt Whitman Vikings. If you
            ever ask him where his favorite place to run, he will almost always
            say, "The canal!" (It will be long before the canal is dethroned).
            Aside from running, Jonah loves to ski, sail, learn guitar riffs,
            and follow NFL and Formula One. His future athletic ambitions
            include becoming a marathoner, possibly a triathlete, and running
            more PRs. He also really wants to visit the Grand Canyon. As social
            chair, Jonah aims to ensure club running is a memorable experience
            for everyone.
          </p>
        </div>
      </div>
      {/* Evan's bio card */}
      <div className="bio-card">
        <div className="align-left md:w-1/2 md:order-2">
          <img src={evanImage} alt="Evan Pic" />
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          <h1 className="bio-content">Webmaster: Evan Masiello</h1>
          <p className="text-black mb-6">
            Evan Masiello is a sophomore studying computer science. Evan is
            known for hosting the most elite radio show of all time "Yoshi City
            Subway" and he is also the creator of the least toxic and most loved
            social media app "Geo Cam". Evan started running in 5th grade and
            has been grinding ever since, becoming a captain and key member of
            the Voorhees Higschool 2022 Sectional Championship Cross Country
            Team. Evan is currently eyeing a big PR this spring in the Freddy
            half and is somewhat interested in running track races. Evan would
            also like to shoutout previous webamster Caleb Holland for creating
            this new website!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About; // Exporting the component
