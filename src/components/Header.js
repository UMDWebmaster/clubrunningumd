import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import "../CSS/Header.css";
import "../CSS/umd-fonts.css";
function Header() {
  // Get current URL location
  const location = useLocation();

  // State variables for mobile view and hamburger menu
  const [isMobileView, setIsMobileView] = useState(() => window.innerWidth <= 970);
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
    <header className="App-header">
      {isMobileView && ( // Render title on mobile view
        <div className="MobileHome">
          <a
            href="/home"
            className="home no-highlight text-xl text-white whitespace-nowrap no-underline"
          >
            <div>
              <h1 className="terrafont-mobile text-xl">
                maryland club running
              </h1>
              <p class="wallsmith">Turtles Aren't Slow</p>
            </div>
          </a>
        </div>
      )}

      <Tab.Group className={`tabs ${isMobileView ? "hidden" : ""}`}>
        <Tab.List
          className={`nav-tablist text-lg font-semibold text-white ${isMobileView ? "hidden" : ""}`}
        >
          {/* Tab items for desktop view. DOM order is left-to-right. */}
          <Tab className="tab home no-highlight text-xl text-red-600">
            <a href="/home">
              {" "}
              <h1 className="terrafont-desktop no-underline">
                maryland club running
              </h1>
              <h2 class="wallsmith">Turtles Aren't Slow</h2>
            </a>
          </Tab>
          <Tab className="tab">
            <a href="/joinus">Join Us</a>
          </Tab>
          <Tab className="tab">
            <a href="/calendar">Calendar</a>
          </Tab>
          {/* Racing: our schedule, our results, and the meets we host */}
          <Tab className="tab">
            <a href="/Races" className="dropdown-toggle">
              Compete
            </a>
            <ul className="dropdown">
              <li>
                <a href="/Races">Race Schedule</a>
              </li>
              <li>
                <a href="/Records">Club Records</a>
              </li>
              <li>
                <a href="/home-meet">Terrapin Invite</a>
              </li>
              <li>
                <a href="/old-bay-invite">Old Bay Invite</a>
              </li>
            </ul>
          </Tab>
          {/* Training resources */}
          <Tab className="tab">
            <a href="/Workouts" className="dropdown-toggle">
              Train
            </a>
            <ul className="dropdown">
              <li>
                <a href="/Workouts">Training Plans</a>
              </li>
              <li>
                <a href="/Routes">Running Routes</a>
              </li>
            </ul>
          </Tab>
          {/* Who we are and what we've done */}
          <Tab className="tab">
            <a href="/about" className="dropdown-toggle">
              Team
            </a>
            <ul className="dropdown">
              <li>
                <a href="/about">Officers</a>
              </li>
              <li>
                <a href="/Photos">Photos</a>
              </li>
              <li>
                <a href="/Emails">Newsletters</a>
              </li>
            </ul>
          </Tab>
          <Tab className="tab">
            <a href="https://umdclubrunningfundraising.lovable.app/">
              Fundraising
            </a>
          </Tab>
        </Tab.List>
      </Tab.Group>

      {isMobileView && ( // Render hamburger menu for mobile view
        <>
          <div className="header-wrapper flex justify-end">
            <button
              type="button"
              aria-label={isHamburgerOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isHamburgerOpen}
              className={`hamburger-menu ${
                isHamburgerOpen ? "change" : ""
              }`}
              onClick={toggleMenu}
            >
              <div className="bar1 bg-white/90 w-6 h-[5px] rounded"></div>
              <div className="bar2 bg-white/90 w-6 h-[5px] rounded"></div>
              <div className="bar3 bg-white/90 w-6 h-[5px] rounded"></div>
            </button>
          </div>
        </>
      )}

      {isMobileView &&
        isHamburgerOpen && ( // Render scrollable menu on hamburger menu click
          <div className="scrollmenu font-bold text-neutral-800">
            {/* Same order as the desktop tabs above */}
            <a href="/joinus">Join Us</a>
            <a href="/calendar">Calendar</a>
            <a href="/Races">Race Schedule</a>
            <a href="/Records">Club Records</a>
            <a href="/home-meet">Terrapin Invite</a>
            <a href="/old-bay-invite">Old Bay Invite</a>
            <a href="/Workouts">Training Plans</a>
            <a href="/Routes">Running Routes</a>
            <a href="/about">Officers</a>
            <a href="/Photos">Photos</a>
            <a href="/Emails">Newsletters</a>
            <a href="https://umdclubrunningfundraising.lovable.app/">
              Fundraising
            </a>
          </div>
        )}
    </header>
  );
}

export default Header;
