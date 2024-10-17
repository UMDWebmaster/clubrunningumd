import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  // Get current URL location
  const location = useLocation();

  // State variables for mobile view and hamburger menu
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    // Remove active class from all tab items
    const listItems = document.querySelectorAll(".tab");
    listItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to current page tab on desktop
    const activeListItem = document.querySelector(
      `.tab a[href*="${location.pathname}"]`
    );
    if (activeListItem) {
      activeListItem.parentElement.classList.add("active");
    }

    // Check if the view is on mobile by checking window width
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 970);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [location]);

  // Toggle hamburger menu state
  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className="App-header bg-neutral-900">
      {isMobileView && ( // Render title on mobile view
        <div className="MobileHome">
          <a
            href="/home"
            className="home no-highlight text-xl text-red-600 font-bold whitespace-nowrap"
          >
            UMD CLUB RUNNING
          </a>
        </div>
      )}

      <Tab.Group className={`tabs ${isMobileView ? "hidden" : ""}`}>
        <Tab.List
          className={`text-white text-xl ${isMobileView ? "hidden" : ""}`}
        >
          {/* Tab items for desktop view */}
          <Tab className="tab home no-highlight text-xl text-red-600">
            <a href="/home">UNIVERSITY OF MARYLAND CLUB RUNNING</a>
          </Tab>
          <Tab className="tab">
            <a
              href="https://venmo.com/u/umdclubrunning"
              className="dropdown-toggle"
            >
              Donate
            </a>
          </Tab>
          <Tab className="tab">
            <a href="/signup" className="dropdown-toggle">
              Join Us
            </a>
            {/* Dropdown menu for Join Us tab */}
            <ul className="dropdown">
              <li>
                <a href="https://docs.google.com/document/d/1AbWsGq4yMjutG-I_jPUq9fuutEBvtcoPZ5IwTnRc1Ns/edit#heading=h.vkmalmlatt01">
                  How To
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform">
                  Emails
                </a>
              </li>
            </ul>
          </Tab>
          {/* Other tabs */}
          <Tab className="tab active:text-red-600">
            <a href="https://evanmasiello.com/clubrunning/">Blog</a>
          </Tab>
          <Tab className="tab">
            <a href="/Photos" className="dropdown-toggle">
              Archive
            </a>
            {/* Dropdown menu for Archive tab */}
            <ul className="dropdown">
              <li>
                <a href="/Photos">Photos</a>
              </li>
              <li>
                <a href="/Emails">Emails</a>
              </li>
            </ul>
          </Tab>
          {/* More tabs */}
          <Tab className="tab">
            <a href="/Races" className="dropdown-toggle">
              Info
            </a>
            {/* Dropdown menu for Info tab */}
            <ul className="dropdown">
              <li>
                <a href="/home-meet">Terapin Invite</a>
              </li>
              <li>
                <a href="/Races">Races</a>
              </li>
              <li>
                <a href="/Records">Records</a>
              </li>
              <li>
                <a href="/Workouts">Train</a>
              </li>
              <li>
                <a href="/Routes">Routes</a>
              </li>
            </ul>
          </Tab>
          <Tab className="tab">
            <a href="/about">About</a>
          </Tab>
        </Tab.List>
      </Tab.Group>

      {isMobileView && ( // Render hamburger menu for mobile view
        <>
          <div className="header-wrapper flex justify-end">
            <div
              className={`hamburger-menu mr-5 -mt-2 mb-1 ${
                isHamburgerOpen ? "change" : ""
              }`}
              onClick={toggleMenu}
            >
              <div className="bar1 bg-white w-6 h-[5px]"></div>
              <div className="bar2 bg-white w-6 h-[5px]"></div>
              <div className="bar3 bg-white w-6 h-[5px]"></div>
            </div>
          </div>
        </>
      )}

      {isMobileView &&
        isHamburgerOpen && ( // Render scrollable menu on hamburger menu click
          <div className="scrollmenu font-bold text-white">
            <a href="https://evanmasiello.com/clubrunning/">Blog</a>
            <a href="/Photos">Photos</a>
            <a href="/home-meet">Terp Invite</a>
            <a href="/Races">Races</a>
            <a href="/Records">Records</a>
            <a href="/Workouts">Workouts</a>
            <a href="/Routes">Routes</a>
            <a href="/about">Officers</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2us1hfXDZmbNgB9cDvSIaE09DtGH_9q4PHpZqoEFZJjdMEQ/viewform">
              Email List
            </a>
            <a href="https://docs.google.com/document/d/1AbWsGq4yMjutG-I_jPUq9fuutEBvtcoPZ5IwTnRc1Ns/edit">
              Join Us
            </a>
            <a href="https://venmo.com/u/umdclubrunning">Donate</a>
          </div>
        )}
    </header>
  );
}

export default Header;
