import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HomeMeet from "./pages/HomeMeet";
import HomeMeetRecords from "./pages/HomeMeetRecords";
import About from "./pages/About";
import Races from "./pages/Races";
import Records from "./pages/Records";
import Workouts from "./pages/Workouts";
import Photos from "./pages/Photos";
import Paths from "./pages/Routes";
import SignUp from "./pages/SignUp";
import EmailArchive from "./pages/EmailArchive";
import PrivatePage from "./internalTools/photoUpload";
import NewMemberInfo from "./pages/NewMemberInfo";
import Login from "./components/Login"
import TextEditor from "./components/TextEditor";
import Feed from "./pages/BlogFeed"
import Article from "./pages/Article";
import Calendar from "./pages/Calendar"
import XCHomeMeet from "./pages/XCHomeMeet";
import RecordManager from "./internalTools/recordManager";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation, Navigate
} from "react-router-dom";

function App() {
  const isLocalhost = window.location.hostname === "localhost";

  function ConditionalHeader() {
    const location = useLocation();
    return location.pathname === "/private" && isLocalhost ? null : <Header />;
  }
  function ConditionalFooter() {
    const location = useLocation();
    return location.pathname === "/private" && isLocalhost ? null : <Footer />;
  }

  return (
    <Router>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/joinus" element={<NewMemberInfo />} />{" "}
        <Route path="/races" element={<Races />} />
        <Route path="/home-meet" element={<HomeMeet />} />{" "}
        <Route path="/old-bay-invite" element = {<XCHomeMeet />}/>
        <Route
          path="/private"
          element={isLocalhost ? <PrivatePage /> : <Home />}
        />
         <Route path="/private/recordManager" element={isLocalhost ? <RecordManager /> : <Home />} />
        {/* Home Meet page */}
        <Route path="/home-meet-records" element={<HomeMeetRecords />} />{" "}
        {/* Home Meet Records page */}
        <Route path="/records" element={<Records />} />
        <Route path="/records/:season" element={<Records />} />{" "}
        {/* Records page with season parameter */}
        <Route path="/records/:gender" element={<Records />} />{" "}
        {/* Records page with gender parameter */}
        <Route path="/workouts" element={<Workouts />} /> 
        <Route path="/photos" element={<Photos />} /> 
        <Route path="/emails" element={<EmailArchive />} />{" "}

        {/* Email Archive page */}
        <Route path="/routes" element={<Paths />} /> {/* Routes page */}
        <Route path="/*" element={<Home />} /> {/* Join Us page */}
        {/* {Blog Editor page} */}
      <Route path="/blog" element={<Login/>}/>
      <Route path="/blog_feed" element={<Feed/>}/>
      <Route path="/article/:id" element={<Article/>}/>
        <Route path="/routes" element={<Paths />} /> 
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* Calendar page route */}
        <Route path="/calendar" element={<Calendar />}/>
      </Routes>
      <ConditionalFooter />
    </Router>
  );
}

export default App;
