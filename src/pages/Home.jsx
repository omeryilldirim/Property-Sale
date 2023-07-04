import { Box } from "@mui/material";
import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Header from "../components/Header";
import Map from "../components/Map";
import sliderImages from "../helper/images";

export default function Home() {
  const [mapCenter, setMapCenter] = useState({ lat: 52.377956, lng: 4.897070 });

  return (
    <Box variant="contained">
      <SimpleImageSlider
        width="100%"
        height="400px"
        images={sliderImages}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={4}
      />
      <Header setMapCenter={setMapCenter} />
      <Map mapCenter={mapCenter}  />
    </Box>
  );
}
