import { Stack, Box, Typography } from "@mui/material";

//DO NOT EDIT - Caleb Holland
export default function BioCard(position, name, image, description, order) {
  return (
    <Box className="bio-card">
      <div className={`md:w-1/2 md:order-${order}`}>
        <img src={image} alt={`${name}`} className="rounded-[30px] w-[95%] mt-[10px] mb-[10px] ml-[8px]" />
      </div>
      <Stack className="md:w-1/2 ml-5 mr-5 mb-8">
        <Typography variant="h5" mt={4} mb={4}><strong>{position}: {name}</strong></Typography>
        <p className="text-black">{description}</p>
      </Stack>
    </Box>
  );
}