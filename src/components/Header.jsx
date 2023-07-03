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
  Form,
} from "@mui/material";
import statesData from "../helper/states";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState({
    commerceType: [],
    category: "",
    country: "",
    state: "",
    room: "",
    star: "",
    resale: false,
    price: "",
    date: "",
    keyword: "",
  });

  const handleSearch = () => {
    // Pass the search query to the parent component for further processing
    console.log(searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item alignItems="center" xs={12} sm={10}>
        <FormGroup row sx={{ margin: "2rem" }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Home"
            value="home"
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Residence"
            value="residence"
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Landfarm"
            value="landfarm"
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Workplace"
            value="workplace"
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Lake"
            value="lake"
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Historic"
            value="historic"
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Rest/Fun"
            value="rest/fun"
            onChange={(e) => {
              console.log(e.target.checked);
            }}
          />
        </FormGroup>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" autoWidth>
          <InputLabel id="rentOrSale">Rent/Sale</InputLabel>
          <Select
            labelId="rentOrSale"
            id="select-rent-sale"
            // value={age}
            label="Rent / Sale"
            //   onChange={handleChange}
            autoWidth
          >
            <MenuItem selected value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="rent">Rent</MenuItem>
            <MenuItem value="sale">Sale</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" autoWidth>
          <InputLabel id="country">Country</InputLabel>
          <Select
            labelId="country"
            id="select-country"
            // value={country}
            label="Country"
            //   onChange={handleChange}
            autoWidth
          >
            <MenuItem selected value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="turkey">Turkey</MenuItem>
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="germany">Germany</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" autoWidth>
          <InputLabel id="state">State</InputLabel>
          <Select
            labelId="state"
            id="select-state"
            // value={state}
            label="State"
            //   onChange={handleChange}
            autoWidth
          >
            <MenuItem selected value="">
              <em>Select</em>
            </MenuItem>
            {statesData.country?.map((state) => (
                <MenuItem value={state}>{state}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" autoWidth>
          <InputLabel id="room">Room</InputLabel>
          <Select
            labelId="room"
            id="select-room"
            // value={room}
            label="Room"
            // onChange={handleChange}
            autoWidth
          >
            <MenuItem selected value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value="1+1">1+1</MenuItem>
            <MenuItem value="2+1">2+1</MenuItem>
            <MenuItem value="3+1">3+1</MenuItem>
          </Select>
        </FormControl>
          <Rating name="half-rating" defaultValue={0} precision={0.5} />
      </Grid>
      <Grid item xs={12}>
        {/* <TextField
          label="Search properties"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleChange}
        /> */}
      </Grid>
      <Grid item xs={4} sm={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          fullWidth
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
