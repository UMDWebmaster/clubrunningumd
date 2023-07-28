import React from 'react';
import '../CSS/Home.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import natsPic from '../Pictures/natsTeamPic.JPG';
import lillianCapital from '../Pictures/lillianCapital.JPG';
import fredHalfPic from '../Pictures/fredHalfTeam.JPG';



function Home() {

    const images = [
        {
            original: natsPic,
            description: 'Welcome to UMD Club Running!', 
        },
        {
            original: lillianCapital,
            description: 'Welcome to UMD Club Running!', 
        },
        {
            original: fredHalfPic,
            description: 'Welcome to UMD Club Running!', 
        },
        
    ];

    const renderCustomImageItem = (item) => {
        return (
            <div className="image-gallery-image">
                <img src={item.original} alt={item.originalAlt} />
                {item.description && (
                    <div className="image-gallery-description">
                        <p>{item.description}</p>
                    </div>
                )}
            </div>
        );
    };

   

    return (
        <div className="Home-container home-page">


            <div class="teamPic-container">
                <ImageGallery items={images} renderItem={renderCustomImageItem} showFullscreenButton={false} showPlayButton={false} autoPlay={true}
                    slideInterval={5000}/>   
            </div>

            <section id="main" className="race-table-container records">


                <div className="container">
                    <h1>About Us</h1>
                    <p>
                        Please sign up to join us Mon-Fri at the School of Public Health (SPH) East Side (closest to Xfinity Center) under the overhang starting January 30th. Practices now start at 5pm!

                        Our mission is to support and encourage a healthy approach to running and training for all members of the University of Maryland. We provide an atmosphere in which runners of all abilities can meet each other, share running knowledge and simply enjoy running together as well as compete against other club college teams.
                    </p>

                    <div class="divider"></div>


                </div>
            </section>
        </div>
    );
}



export default Home;
