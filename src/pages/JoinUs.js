import React from 'react';
import '../CSS/Construc.css';
import construcPic from '../Pictures/trafficcone.png';


function Routes() {

    return (
        <div className="construc-container">
            <main>
                <h1>Under Construction</h1>
                <img src={construcPic} alt="Under Construction" className="construction-img" />
                <p>We are currently working on something awesome. Stay tuned!</p>
            </main>
        </div>
    );
}

export default Routes;
