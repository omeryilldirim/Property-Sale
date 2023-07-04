import { Box } from "@mui/material";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Header from "../components/Header";
import sliderImages from "../helper/images";

export default function Home() {


   return (
      <Box variant='contained'>
         <SimpleImageSlider
            width='100%'
            height={500}
            images={sliderImages}
            showNavs={true}
            autoPlay={true} 
            autoPlayDelay = {3}
         />
         <Header />
      </Box>
   );
}