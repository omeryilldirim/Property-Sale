import React, { useState } from 'react';
import { Slider, Typography, TextField, Grid } from '@mui/material';

const PriceRangeSlider = ({setSearchQuery}) => {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [minPrice, setMinPrice] = useState(priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };

  const handleMinPriceChange = (event) => {
    const newMinPrice = event.target.value === '' ? 0 : Number(event.target.value);
    const newPriceRange = [newMinPrice, priceRange[1]];
    setSearchQuery({...setSearchQuery, minPrice: newMinPrice});
    setPriceRange(newPriceRange);
    setMinPrice(newMinPrice);
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = event.target.value === '' ? 0 : Number(event.target.value);
    const newPriceRange = [priceRange[0], newMaxPrice];
    setPriceRange(newPriceRange);
    setMaxPrice(newMaxPrice);
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
          value={minPrice}
          sx={{maxWidth: '110px', paddingY: '5px'}}
          onChange={handleMinPriceChange}
        />  
        <TextField
          label="Max Price"
          variant="outlined"
          type="number"
          value={maxPrice}
          size='small'
          sx={{maxWidth: '110px', paddingY: '5px'}}
          onChange={handleMaxPriceChange}
        />
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="price-range-slider"
          min={0}
          max={1000000}
          color='warning'
        />
      </Grid>
      <Grid item >

      </Grid>
      <Grid item >

      </Grid>
    </Grid>
  );
};

export default PriceRangeSlider;
