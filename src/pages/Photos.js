// Import React library for creating React components
import React from "react";

// Import CSS file for styling
import "../CSS/Photos.css";

// Import image for displaying in the component
import JimmyRun from "../Pictures/JimmyRun.JPG";

// Define a functional component named Races
function Races() {
  return (
    <div>
      {/* Container for displaying an image */}
      <div class="teamPic-container">
        <img src={JimmyRun} alt="" className="fredHalfPic" />
      </div>

      {/* Container for the photo archive */}
      <div className="flex flex-col items-center justify-center">
        {/* Heading for the photo archive */}
        <h3 className="text-white text-3xl font-bold mt-5 mb-5">
          Photo Archive
        </h3>

        {/* Container for the table */}
        <div className="tableContainer">
          <table className="mb-10">
            {/* Table header */}
            <thead>
              <tr>
                <th>Date</th>
                <th>Race</th>
                <th>Album</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {/* Row for each race */}
              <tr>
                <td>4/20/2024</td>
                <td>Terrapin Invitational</td>
                <td>
                  {/* Link to the Google Photos album for the race */}
                  <a href="https://drive.google.com/drive/folders/12P1xI3qQImU26LFs1NCeUefFSGyTXgSw">
                    Photos Link 1
                  </a>
                </td>
              </tr>
              <tr>
                <td>4/7/2024</td>
                <td>NIRCA Track & Field Nationals 2024</td>
                <td>
                  {/* Link to the Google Photos album for the race */}
                  <a href="https://photos.google.com/share/AF1QipOsA_8yi1eUvzF46phOkZuyz2nqTUi_7Hta1COwRbDCzNrL9faZHmfvAvOj1N-9UA?key=Z2dadEM5d2RjRHJKNHJXMk00TEtnc2k4RXM4RlNn">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>2/23/2024</td>
                <td>Capital Relays 2024</td>
                <td>
                  {/* Link to the Google Photos album for the race */}
                  <a href="https://photos.google.com/share/AF1QipNduQRjGfiCVpaH9_N-NnDIKud61hMdru39HixUxpUgw9lwmML8bGWFwjgwubcaYg?key=bzdhcUMtVU90UlBfUW9ER0VrTlhXV1BLNTZ4c2d3">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>2/10/2024</td>
                <td>Happy Valley Invitational 2024</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipMjTlKqfyDZjJiifFABmiJesH13_Lvmec3im3pKpdEFiKDOPzOGOxpQUVAajUcFtw?key=dVN6TmtEQzhlSXdkZ003c0tkQUpkREt1ckUybi13">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>11/11/2023</td>
                <td>NIRCA Nationals 2023</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipOstGlgRZfQgHAM094sA_siA4X5HnAwFIhUbKJnQUcq7kXI9kl6UNnSNyyKFU6veA?key=bVo4TW92b3dCUVRlTEJYdEVaaW12d1lTdFg5dzVR">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>10/21/2023</td>
                <td>NIRCA Regionals 2023</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipMsDUYHAHua1fFYUsIFcVZu5bm_90KcX6kIFgjhKKfP4G__xx5S6lC0iEuuWsuZ3Q?key=MTdTZGFFdTRUQzNCOVZhcUNSQXJCUkFjWmlDMHBR">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>10/7/2023</td>
                <td>Dashing Dukes XC 2023</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipNk7X6yEdye1o8JnG8zPUFOFAiODmemgcwvajG4DN9M1KREEK5TdMel1GL5Em8UsA?key=OE1xVG4yaEpnRDZ1WjdOY2ZrbUpNajFWajhUUW9B">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>9/30/2023</td>
                <td>Paul Short 2023</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipMKACaYj5t1NuzNi451TLYXpY8uD2lT9Cr_FPw2q5rgAMPLBnQamWPA2vY1imUsfQ?key=V19HaDlRT2YtOEFHemthb3M4QU9uRlFWZHlNZGV3">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>9/16/2023</td>
                <td>Cavalier Invite 2023</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipOcLTcEBoTdPRM7k1vpK5vzlezX88tJgHix0SarS4kp2X6KZpJNh-Jn0Om00FVwLA?key=YmtxWnpsVE5TZFNPR05oZ09UYlQ1SFVaSnRVVjhR">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>5/7/2023</td>
                <td>Frederick Half Marathon</td>
                <td>
                  <a href="https://photos.google.com/invite/share/AF1QipMPEgpBT07QC9C7RQaf307qyHypri_98nLTJArvuJ6GO3zHHQvdLcBTgD3xjHOBTA?inviteKey=VjZVajZScFpPN1Q3R19LWWVPa1J5Q1A0YmhGbGdR">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>5/5/2023</td>
                <td>Kehoe Twilight</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipM5tq_W3N6as_5Op58mI7BFCBCgLL30YU3ipPL-BhIlE8LBisogbzQfYOe9ZSM51Q?key=bTBXODZJVlg0RGRPRlRaUUw4aWxWUTFkc0J4NTNn">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>4/29/2023</td>
                <td>Paul Kaiser Invite</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipN_1rmZ-CYJrwZsji8-zMe7MkOjVjNsOfp5SnWRaOldTT9LN3PzhW-4j24GF7dHPQ?key=U0xveWZlenMzRXAwVkFaei1LQU0zbDNRY1B4UHV3">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>4/16/2023</td>
                <td>NIRCA Track and Field Nationals</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipOmLALdb3mnGYm7VjAJoxB1x1cAUgjNTt_mJv7XDvH7vBITsK81vkzojXRFnkxGHQ?key=a2p4Ul95VjR1VzQ3TU9OSDExdGJHZjNYZlkzVDln">
                    Photos
                  </a>{" "}
                  <a href="https://photos.google.com/share/AF1QipMkB4Zcj4EDueGFr38bCL-yuT5q5HKOIYB8vH_Lg2-EmKvJU4S_zcbF61eBxZnKMQ?key=NERvYzhJdEJDTFFZaVNaT1IzdlRuT3dIcUtuaGp3">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>3/25/2023</td>
                <td>Dashing Dukes Invitational - JMU</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipPHRZFVLZoRHT2kEHx-qrbmEOVSJqTUhuqhaZYajVAwdZXStoncKmKbYqdc6Bt51A?key=RWx2dS1aWXU4blR3R3RmSm0zd2Z3Q3ZlVnl0M0Z3">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>2/25/2023</td>
                <td>Capital Relays - American University</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipPwoP_0etxRH1tOypq4cp-Eb49kYv8uxFnFBYBnHfN57EzcYouozpu2d4mD4a6Aow?key=cXh6VXUzWWlLZWVqUWd4Xzlva1VKaVB4QVVfaE53">
                    Photos
                  </a>
                </td>
              </tr>
              <tr>
                <td>2/11/2023</td>
                <td>Happy Valley Invite</td>
                <td>
                  <a href="https://photos.google.com/share/AF1QipND2Vr74SP0TrqTWHh84gDJRJLBhufGdj9oAdieto567plVaUNCFvO2fesjYHpKeQ?key=T1MyTWVFVF9LT3N3MkhZcTZKWk8xOXhjb2x5czln">
                    Photos
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Races;
