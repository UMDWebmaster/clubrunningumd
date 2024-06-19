import React from "react";

//DO NOT EDIT - Caleb Holland
function BioCard(position, name, image, description, order) {
  return (
    <div className="bio-card">
        <div className={`md:w-1/2 md:order-${order}`}>
          <img src={image} alt={`${name}`} />
        </div>
        <div className="flex flex-col md:w-1/2 ml-5 mr-5">
          <h1 className="bio-content">{position}: {name}</h1>
          <p className="text-black mb-6">{description}</p>
        </div>
    </div>
   
  );
}

export default BioCard;