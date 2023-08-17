import React from 'react';
import '../CSS/Home.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import natsPic from '../Pictures/natsTeamPic.JPG';
import lillianCapital from '../Pictures/lillianCapital.JPG';
import fredHalfPic from '../Pictures/fredHalfTeam.JPG';



function Home() {

    const images = [
        {original: natsPic, description: 'Welcome to UMD Club Running!',},
        {original: lillianCapital, description: 'Welcome to UMD Club Running!',},
        {original: fredHalfPic, description: 'Welcome to UMD Club Running!',},
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
                <ImageGallery items={images} renderItem={renderCustomImageItem} showFullscreenButton={false} showPlayButton={false} autoPlay={true} slideInterval={5000}/>   
            </div>

            <section id="main" className="flex justify-center">
                <div className="rounded-xl border-2 border-white mt-10 mb-10 w-11/12 bg-white bg-opacity-70">
                    <h1 className="text-black font-bold text-2xl mb-4 mt-5 underline">About Us</h1>
                    <p className="text-black mb-2">
                        Please sign up to join us Mon-Fri at the <a href="https://www.google.com/maps/place/PP1,+College+Park,+MD+20740/@38.9933786,-76.9425631,148m/data=!3m2!1e3!4b1!4m2!3m1!1s0x89b7c69f4dc17645:0xd2d09f5ca7e6b0d9" className="text-blue-700 font-bold">School of Public Health (SPH)</a> East Side (closest to Xfinity Center) under the overhang starting<b> January 30th. Practices now start at 5pm! </b>
                    </p>

                    <p p className="text-black mb-7">
                        Our mission is to support and encourage a healthy approach to running and training for all members of the University of Maryland. We provide an atmosphere in which runners of all abilities can meet each other, share running knowledge and simply enjoy running together as well as compete against other club college teams.
                    </p>
                    <a href="https://docs.google.com/document/d/1AbWsGq4yMjutG-I_jPUq9fuutEBvtcoPZ5IwTnRc1Ns/edit#heading=h.vkmalmlatt01"><button class="button"><span>Join Us! </span></button></a>
                </div>
            </section>

        </div>
    );
}



export default Home;
