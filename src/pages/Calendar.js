import dab from "../Pictures/calPhoto.JPG";
export default function Calendar(){


    return(
        <div className="bg-black">
              <div className="teamPic-container">
                    <img src={dab} alt="" className="teamPic" />
                  </div>
        <h3 className="text-red-600 text-3xl font-bold mt-5 mb-5">
            Calendar 🗓️
          </h3>
          <p>Meets, social events, and more can be found below!</p>

        <center>
        <iframe className="rounded-lg" src="https://calendar.google.com/calendar/embed?src=umdclubrunning%40gmail.com&ctz=America%2FNew_York"  width="800" height="600" frameborder="0" scrolling="no"></iframe>
       
        </center>
        </div>
    )
}