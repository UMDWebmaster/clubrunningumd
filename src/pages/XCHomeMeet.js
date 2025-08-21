import React from "react";

export default function XCHomeMeet(){

    return(
        <div className="text-white font-bold bg-black text-left">
              {/* Container for the team picture */}
              <div class="teamPic-container">
                {/* Display the team picture */}
                <img src='https://cdn.wallpapersafari.com/17/20/zOCIhp.jpg' alt="" className="teamPic" />
              </div>
             <div className="bg-black text-white font-sans py-10 px-4">
      <div className="max-w-5xl mx-auto border-4 border-yellow-500 rounded-xl overflow-hidden shadow-2xl">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-red-700 via-black to-yellow-500 p-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-wide text-white uppercase drop-shadow-md">
            Old Bay Invitational
          </h1>
          <p className="text-lg mt-2 text-white font-medium">
            Hosted by University of Maryland Club Running
          </p>
          <p className="text-md text-yellow-300 mt-1">📅 September 27, 2025</p>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-black">
          {/* Race Info */}
          <div className="bg-yellow-600 text-black rounded-lg p-4 border-2 border-white shadow-lg">
            <h2 className="text-2xl font-bold mb-2">🏃 Race Info</h2>
            <p><strong>📍 Location:</strong> Terrapin Nature Park, Stevensville, MD</p>
            <p><strong>🌿 Terrain:</strong> Flat, sandy soft gravel with views of the Bay</p>
            <p><strong>👟 Spikes:</strong> Optional</p>
            <p><strong>🏆 Awards:</strong> Top 3 per race + top men’s & women’s teams</p>
          </div>

          {/* Schedule */}
          <div className="bg-red-700 text-white rounded-lg p-4 border-2 border-yellow-400 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">📅 Event Schedule</h2>
            <ul className="list-disc ml-5">
              <li><strong>10:00 AM</strong> – Men's 8k</li>
              <li><strong>11:00 AM</strong> – Women's 6k</li>
            </ul>
            <p className="text-sm mt-2 text-yellow-200">*Schedule subject to change</p>
          </div>

          {/* Travel */}
          <div className="bg-white text-black rounded-lg p-4 border-2 border-red-700 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">🛏️ Travel</h2>
            <p className="text-black"><strong>Hotel:</strong> Holiday Inn Annapolis-Kent Narrows</p>
            <p><strong>Directions:</strong> <a href="https://maps.google.com/?q=38.989874,-76.321294" className="text-blue-600 underline" target="_blank" rel="noreferrer">Google Maps</a></p>
            <p className="text-sm">GPS: (38.989874, -76.321294)</p>
          </div>

          {/* Registration */}
          <div className="bg-yellow-700 text-black rounded-lg p-4 border-2 border-white shadow-lg">
            <h2 className="text-2xl font-bold mb-2">📝 Registration</h2>
            <p><strong>Opens:</strong> Sept 1, 2025</p>
            <p><strong>Closes:</strong> Sept 22, 2025 @ 11:59 PM</p>
            <p><strong>Fee:</strong> $25/runner or $500/team</p>
            <p><strong>Checks:</strong> Payable to University of Maryland Club Running</p>
            <p className="mt-2 text-sm">📧 Email: <a href="mailto:umdclubrunning@gmail.com" className="underline text-blue-700">umdclubrunning@gmail.com</a></p>
          </div>

          {/* Eligibility */}
          <div className="bg-black border-2 border-yellow-600 rounded-lg p-4 text-white shadow-lg md:col-span-2">
            <h2 className="text-2xl font-bold mb-2">🎯 Eligibility & Nationals</h2>
            <p>This is a <strong className="text-yellow-400">QUALIFYING</strong> event for NIRCA Nationals.</p>
            <p>All competitors must be student members of a NIRCA club.</p>
            <p>Participation here satisfies one qualifying criterion for Nationals.</p>
            <p>🌐 <a href="https://clubrunning.org/races/eligibility.php" target="_blank" rel="noreferrer" className="underline text-yellow-300">View Eligibility Info</a></p>
          </div>

          {/* Extras */}
          <div className="bg-red-600 text-white rounded-lg p-4 border-2 border-white shadow-lg">
            <h2 className="text-2xl font-bold mb-2">🎽 Extras</h2>
            <p><strong>T-shirt:</strong> Yes</p>
            <p><strong>Social Event:</strong> No</p>
          </div>

          {/* Cancellation */}
          <div className="bg-yellow-800 text-black rounded-lg p-4 border-2 border-red-700 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">🚫 Cancellation Policy</h2>
            <p>Entries are final as of Sept 22. Payment is due at the meet.</p>
            <p className="text-sm">No refunds for cancellations after that date.</p>
          </div>
        </div>
      </div>
    </div> 
            
        </div>
    )
}