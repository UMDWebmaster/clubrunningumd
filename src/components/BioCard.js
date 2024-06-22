import React from "react";
import { Stack, Box } from "@mui/material";

//DO NOT EDIT - Caleb Holland
function BioCard(position, name, image, description, order) {
  return (
    <Box className="bio-card">
      <div className={`md:w-1/2 md:order-${order}`}>
        <img src={image} alt={`${name}`} className="rounded-[30px] w-[95%] mt-[10px] mb-[10px] ml-[8px]" />
      </div>
      <Stack className="md:w-1/2 ml-5 mr-5 mb-8">
        <h1 className="font-bold text-black mb-8 mt-8 text-2xl">{position}: {name}</h1>
        <p className="text-black">{description}</p>
      </Stack>
    </Box>
  );
}

export default BioCard;