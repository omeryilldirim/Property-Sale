import { Box } from "@mui/material";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Header from "../components/Header";

export default function Home() {
//    const sliderImages = [
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTdUmK6fRPfPQIMyOxUOjiTnR2VYizvkkWUxLhGoVJNobm5Id3fpRhsIGtPj3H06ujPb4&usqp=CAU",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQduUpBWhSdgkWqqIrSmw5MMU697Xlx3SCjlB4eZSv0Q&s",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTnzApyh1ZmbXLBUg_iFRio23hzRyAJfwBRfnVozXdEnu-NK4jFt2_gsYujKf-CbT6Cr_A&usqp=CAU",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTDnfOIY9gjVyoT4ulMp55roiV5KefqaDByUc0HdD8p3tdpXuwxTaXjhLdyUFeQzZ2ZwE&usqp=CAU",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
//       },
//       {
//          url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
//       },
//       {
//          url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
//       },
//   ];
const sliderImages = [
    'https://media.istockphoto.com/id/163196980/photo/sunset-panorama.jpg?s=612x612&w=0&k=20&c=kHv1TLoxBv5D2wZVnFUvyrU4KFbvJ9tEiXoG7h9y6ig=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHX4_cEgpm26cHWKMn6t__E_ruzVLr0x-vyl2OV3dmZLQjTjD3szpHqbPIgw01tlOQUc&usqp=CAU',
    'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg',
    "https://cdn.unenvironment.org/styles/article_billboard_image/s3/2022-09/nicolai-kramer-unsplash.jpg?h=f9e4ef51&itok=TeteMOES",
    'https://wowslider.com/sliders/demo-5/data/images/reef.jpg'
]
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