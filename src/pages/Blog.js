import React from 'react';
import '../CSS/Construc.css';
import construcPic from '../Pictures/trafficcone.png';


function Records() {

    return (
        <div className="construc-container">
            <main>
                <script>window.location.replace("https://evanmasiello.com/clubrunning/");</script>
                <h1>Under Construction</h1>
                <img src={construcPic} alt="Under Construction" className="construction-img" />
                <p color="blue"><strong><a href="https://evanmasiello.com/clubrunning/">You can find the new blog here!</a></strong></p>
            </main>
        </div>
    );
}

export default Records;
