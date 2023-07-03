import { useState } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Grid,
  Button,
  Rating,
  TextField,
} from "@mui/material";
import statesData from "../helper/states";
import commerceTypes from "../helper/commerceTypes";
import PriceRangeSlider from "./PriceRangeSlider";

const Header = () => {
const [states, setStates] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    commerceType: [],
    category: "",
    country: "",
    state: "",
    room: "",
    star: "",
    resale: false,
    date: "",
    keyword: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleSearch = () => {
    console.log(searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Grid
      container
      spacing={2}
      alignContent="center"
      padding={4}
      justifyContent={"center"}
    >
      <Grid item container alignContent={'center'} justifyContent={"center"} xs={12} >
        <FormGroup row >
          {commerceTypes.map((commerceType) => (
            <FormControlLabel key={commerceType} xs={3}
              control={<Checkbox />}
              label={commerceType}
              value={commerceType.toLowerCase()}
              onClick={(e) => {
                e.target.checked ? 
                    setSearchQuery({...searchQuery, commerceType: [...searchQuery.commerceType, e.target.value]}) 
                    : setSearchQuery({...searchQuery, commerceType: searchQuery.commerceType.filter((type) => type !== e.target.value)})
                    console.log(searchQuery);
              }}
            />
          ))}
        </FormGroup>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
          <InputLabel id="rentOrSale">Rent/Sale</InputLabel>
          <Select
            labelId="rentOrSale"
            id="select-rent-sale"
            // value={age}
            label="Rent / Sale"
            onChange={(e) => setSearchQuery({...searchQuery, category: e.target.value})}
            defaultValue=''
          >
            <MenuItem selected value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="rent">Rent</MenuItem>
            <MenuItem value="sale">Sale</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
          <InputLabel id="country">Country</InputLabel>
          <Select
            labelId="country"
            id="select-country"
            label="Country"
            onChange={(e) => {
                setSearchQuery({...searchQuery, country: e.target.value})
                setStates(statesData[e.target.value])}}
            defaultValue=''
          >
            <MenuItem selected value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="turkey">Turkey</MenuItem>
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="germany">Germany</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
          <InputLabel id="state">State</InputLabel>
          <Select
            labelId="state"
            id="select-state"
            label="State"
            onChange={(e) => setSearchQuery({...searchQuery, state: e.target.value})}
            defaultValue=''
          >
            <MenuItem selected value="">
              <em>Select</em>
            </MenuItem>
            {states?.map((state) => (
              <MenuItem value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
          <InputLabel id="room">Room</InputLabel>
          <Select
            labelId="room"
            id="select-room"
            label="Room"
            onChange={(e) => setSearchQuery({...searchQuery, room: e.target.value})}
            defaultValue=''
          >
            <MenuItem selected value=''>
              <em>Select</em>
            </MenuItem>
            <MenuItem value="1+1">1+1</MenuItem>
            <MenuItem value="2+1">2+1</MenuItem>
            <MenuItem value="3+1">3+1</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e)=> setSearchQuery({...searchQuery, star:+e.target.value})} />
      </Grid>
      <Grid item>
        <FormControlLabel control={<Checkbox />} label="ReSale" onChange={()=>setSearchQuery({...searchQuery, resale: !searchQuery.resale})} />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="Search..."
          variant="outlined"
          defaultValue=''
          size="small"
          fullWidth
          onChange={(e)=>setSearchQuery({...searchQuery, keyword: e.target.value})}
        />
      </Grid>

      <Grid item xs={4}>
        <PriceRangeSlider setSearchQuery={setSearchQuery} />
      </Grid>

      <Grid item>
        <TextField
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e)=>setSearchQuery({...searchQuery, date: e.target.value})}
        />
      </Grid>

      <Grid
        container
        spacing={2}
        alignContent="center"
        justifyContent={"center"}
      >
        <Grid item xs={4} sm={2}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSearch}
            fullWidth
          >
            Search
          </Button>
        </Grid>

        <Grid item xs={2} sm={1}>
          <Button
            variant="contained"
            color="warning"
            //   onClick={handleClear}
            fullWidth
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
