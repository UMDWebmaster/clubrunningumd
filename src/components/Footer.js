import { Box, Stack, Link } from "@mui/material";
import { FaFacebook, FaTwitter, FaInstagram, FaStrava, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
      <Box className="bg-neutral-900 border-t border-white border-opacity-70 pt-6 pb-1 w-full"
        sx={{ '& a': { color: 'white' } }}>
        <Stack alignItems="center" spacing={1} className="mb-1">
          <Stack direction='row' spacing={3}>
            <Link href="https://www.facebook.com/UMDclubrunning/?fref=ts"><FaFacebook size={32} /></Link>
            <Link href="https://twitter.com/umdclubrunning"><FaTwitter size={32} /></Link>
            <Link href="https://www.instagram.com/umdclubrunning/"><FaInstagram size={32} /></Link>
            <Link href="mailto:umdclubrunning@gmail.com"><FaEnvelope size={32} /></Link>
            <Link href="https://www.strava.com/clubs/874154"><FaStrava size={32} /></Link>
          </Stack>
          <Link href="mailto:umdwebmast3r@gmail.com" underline="none">
            Report bugs or request features to <strong>umdwebmast3r@gmail.com</strong>
          </Link>
        </Stack>
      </Box>
  );
}
export default Footer;