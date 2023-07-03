import React, { useState } from 'react';
import { Slider, Typography, TextField, Grid } from '@mui/material';

const PriceRangeSlider = ({searchQuery, setSearchQuery}) => {
  const [priceRange, setPriceRange] = useState([searchQuery.minPrice, searchQuery.maxPrice]);


  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    setSearchQuery({...searchQuery, minPrice: newValue[0], maxPrice: newValue[1]});
  };

  const handleMinPriceChange = (event) => {
    const newMinPrice = event.target.value === '' ? 0 : Number(event.target.value);
    const newPriceRange = [newMinPrice, priceRange[1]];
    setPriceRange(newPriceRange);
    setSearchQuery({...searchQuery, minPrice: newMinPrice, maxPrice: priceRange[1]});
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = event.target.value === '' ? 0 : Number(event.target.value);
    const newPriceRange = [priceRange[0], newMaxPrice];
    setPriceRange(newPriceRange);
    setSearchQuery({...searchQuery, minPrice: priceRange[0], maxPrice: newMaxPrice});
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} >
        <Typography display={'inline'} id="price-range-slider" gutterBottom>
          Price:
        </Typography>
        <TextField
          label="Min Price"
          variant="outlined"
          type="number"
          size='small'
          value={searchQuery.minPrice}
          sx={{maxWidth: '110px', paddingY: '5px'}}
          onChange={handleMinPriceChange}
        />  
        <TextField
          label="Max Price"
          variant="outlined"
          type="number"
          value={searchQuery.maxPrice}
          size='small'
          sx={{maxWidth: '110px', paddingY: '5px'}}
          onChange={handleMaxPriceChange}
        />
        <Slider
          value={[searchQuery.minPrice, searchQuery.maxPrice]}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="price-range-slider"
          min={0}
          max={1000000}
          color='warning'
        />
      </Grid>
    </Grid>
  );
};

export default PriceRangeSlider;
