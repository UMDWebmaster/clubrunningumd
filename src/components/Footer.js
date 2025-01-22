import { Box, Link } from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaStrava,
  FaEnvelope,
} from "react-icons/fa";
import "../CSS/footer.css";


export default function Footer() {
  return (
    <footer>
      <Box
        className="border-t border-white border-opacity-50 pt-3 pb-3 w-full footer"
        sx={{ "& a": { color: "white" } }}
      >
        <div class="footer-content">
          <div>
            <Link href="/contact" underline="none">
              Report bugs or request features to{" "}
              <strong>umdwebmast3r@gmail.com</strong>
            </Link>
          </div>
          <div class="logos">
            <Link href="https://www.facebook.com/UMDclubrunning/?fref=ts" class='link'>
              <FaFacebook size={26} />
            </Link>
            <Link href="https://twitter.com/umdclubrunning" class='link'>
              <FaTwitter size={26} />
            </Link>
            <Link href="https://www.instagram.com/umdclubrunning/" class='link'>
              <FaInstagram size={26} />
            </Link>
            <Link href="mailto:umdclubrunning@gmail.com" class='link'>
              <FaEnvelope size={26} />
            </Link>
            <Link href="https://www.strava.com/clubs/874154" class='link'>
              <FaStrava size={26} />
            </Link>
          </div>
        </div>
      </Box>
    </footer>
  );
}
