import React from "react";
import "../CSS/Home.css";
import "../CSS/SignUp.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import natsPic from "../Pictures/2025-team.jpeg";
import lillianCapital from "../Pictures/lillianCapital.JPG";
import stillTrain from "../Pictures/IMG_3948.JPG";
import people from "../Pictures/grouppiccropped.jpg";
import sprinting from "../Pictures/sprintPic.JPG";
import blogImg from  "../Pictures/lol.JPG"
export default function Home() {  
  const images = [
    {
      original: natsPic,
      subdescription: "Learn More About Our Club Below!",
      description: "WELCOME TO MARYLAND CLUB RUNNING!",
      link: "",
    },
    {
      original: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5a/b9/ba/terrapin-beach-park.jpg?w=900&h=500&s=1',
      subdescription: "Click Here To Learn About Our First Home XC Meet!",
      description: "RACE ALONG THE BAY!",
      link: "/old-bay-invite",
    },
    {
      original: sprinting,
      subdescription: "Check Out The Sprinter Training Plan Here!",
      description: "SPRINT WORKOUTS ARE HERE!",
      link: "https://docs.google.com/spreadsheets/d/1fj68G6LMrUwHmI1imWAxgUwwEmS-ZkZcERkE2z5CbcY/edit?gid=2070129658#gid=2070129658",
    },
    {
      original: stillTrain,
      subdescription: "Check Out The Distance Training Plan Here!",
      description: "DISTANCE PLAN HERE!",
      link: "https://docs.google.com/spreadsheets/d/1fXUqcuotXMNfaRq0uRI9C7rgnyxK4TNF_hamKlKUXdQ/edit?gid=1947588523#gid=1947588523",
    },
    {
      original: blogImg,
      subdescription: "Stay tuned for new details.",
      description: "NEW BLOG COMING SOON!",
      link: "",
    },
  ];

  // check if the date is april first
  var aprilFools = {
    month: 3,
    date: 1,
  };
  var now = new Date();
  var isItAprilFools =
    now.getMonth() === aprilFools.month && now.getDate() === aprilFools.date;

  // Function to render custom image item for image gallery
  const renderCustomImageItem = (item) => {
    return (
      <div className="image-gallery-image">
        <img src={item.original} alt={item.originalAlt} />
        <div className="image-gallery-description">
          <p className="pt-1">
            {item.description}
            <div className="md:-mt-6 pb-2 ">
              <a
                href={item.link}
                className="md:text-base sm:text-sm text-red-300"
              >
                {item.subdescription}
              </a>
            </div>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="Home-container home-page">
      {/* Load video if it's april 1st */}
      {isItAprilFools ? (
        <iframe
          class="iframe"
          height="400"
          style={{ width: "100%", margin: "auto" }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Y-eYRSVjhBzI4piz&autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : (
        <span></span>
      )}
      <div class="teamPic-container">
        {/* Image Gallery Component */}
        <ImageGallery
          items={images}
          renderItem={renderCustomImageItem}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={5000}
        />
      </div>

      {/* About Us Section */}
      <section
        id="main"
        className="flex flex-col items-center md:flex-row justify-center"
      >
        <div className="rounded-xl border-2 border-white mt-10 mb-10 w-11/12 bg-white bg-opacity-70 flex flex-col md:flex-row">
          <div className="align-left md:w-1/2">
          <iframe width="100%"class="rounded-xl" height="100%" src="https://www.youtube.com/embed/CHT-1unx3wo" title="UMD CLUB RUNNING HYPE VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </div>
          <div className="flex flex-col md:w-1/2 ml-5 mr-5 ">
            <h1 className="text-black font-bold text-3xl mb-4 mt-5 md:mt-20 underline">
              About Us
            </h1>
            <p className="text-black mb-6">
              Please sign up to join us Mon-Fri at the{" "}
              <a
                href="https://www.google.com/maps/place/PP1,+College+Park,+MD+20740/@38.9933786,-76.9425631,148m/data=!3m2!1e3!4b1!4m2!3m1!1s0x89b7c69f4dc17645:0xd2d09f5ca7e6b0d9"
                className="text-blue-700 font-bold"
              >
                School of Public Health (SPH)
              </a>{" "}
              East Side (closest to Xfinity Center) starting{" "}
              <b>Tuesday, September 2nd. Practices start at 5pm! </b>
            </p>
            <p className="text-black mb-7">
              Our mission is to support and encourage a healthy approach to
              running and training for all members of the University of
              Maryland. We provide an atmosphere in which runners of all
              abilities can meet each other, share running knowledge and simply
              enjoy running together as well as compete against other club
              college teams.
            </p>
            <a href="/joinus">
              <button className="button">
                <span>Join Us!</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Weekly Newsletter Section */}
      <section
        id="main"
        className="flex flex-col items-center md:flex-row justify-center"
      >
        <div className="rounded-xl border-2 border-white mt-10 mb-10 w-11/12 bg-white bg-opacity-70 flex flex-col md:flex-row">
          <div className="align-left md:w-1/2 md:order-2">
            <img src={people} alt="Team Pic" className="rounded-xl" />
          </div>
          <div className="flex flex-col md:w-1/2 ml-5 mr-5">
            <h1 className="text-black font-bold text-3xl mb-4 mt-5 md:mt-20 underline">
              Weekly Newsletter
            </h1>
            <p className="text-black mb-6">
              Stay in the loop! Subscribe to our weekly mailing list to learn
              all about our upcoming social events, practices, races, and more!
              Whether you're a seasoned runner or just starting out, being part
              of our listserv is the best way to stay informed and engaged.
              Don't miss out on the latest opportunities to run and connect with
              fellow club runners!
            </p>

            {/* Sign-up Button */}
              <a href="SignUp">
                <button className="button" href="/SignUp">
                  <span>Sign-Up!</span>
                </button>
              </a>
          </div>
        </div>
      </section>
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=umdclubrunning%40gmail.com&ctz=America%2FNew_York"  width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
    </div>
  );
}