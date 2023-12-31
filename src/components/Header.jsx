import { useState } from "react";
import {
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
  Box,
} from "@mui/material";
import statesData from "../helper/states";
import countries from "../helper/countries";
import commerceTypes from "../helper/commerceTypes";
import defaultValues from "../helper/defaultValues";
import PriceRangeSlider from "./PriceRangeSlider";
import coordinates from "../helper/coordinates";
import salesList from "../helper/salesList";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

const Header = ({setMapCenter, setSalesList}) => {
  const [states, setStates] = useState([]);
  const [searchQuery, setSearchQuery] = useState({ ...defaultValues });
  

  const handleCommerceTypeChange = (e) => {
    e.target.checked
      ? setSearchQuery({
          ...searchQuery,
          commerceType: [...searchQuery.commerceType, e.target.value],
        })
      : setSearchQuery({
          ...searchQuery,
          commerceType: searchQuery.commerceType.filter(
            (type) => type !== e.target.value
          ),
        });
  };

  return (
    <Box   
      sx={{ display: "flex", justifyContent: "center", alignContent: "center", transform: "translateY(-4rem)" }}
    >
      <Grid
        container item
        alignContent="center"
        padding={4}
        justifyContent={"center"}
        gap={4}
        xs={8}
        borderRadius={3}
        backgroundColor={"#fff"}
        boxShadow={3}
      >
        <Grid
          item
          container
          alignContent={"center"}
          justifyContent={"center"}
          xs={12}
        >
          <Grid item >
            <Box>
              {commerceTypes.map((commerceType) => (
                <FormControlLabel
                  key={commerceType}
                  xs={3}
                  control={<Checkbox />}
                  label={commerceType}
                  value={commerceType.toLowerCase()}
                  checked={searchQuery.commerceType.includes(
                    commerceType.toLowerCase()
                  )}
                  onClick={handleCommerceTypeChange}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignContent={"center"}
          justifyContent={"center"}
          xs={12}
          gap={2}
        >
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="rentOrSale">Rent/Sale</InputLabel>
              <Select
                labelId="rentOrSale"
                id="select-rent-sale"
                value={searchQuery.category}
                label="Rent / Sale"
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, category: e.target.value })
                }
                defaultValue=""
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
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="country">Country</InputLabel>
              <Select
                labelId="country"
                id="select-country"
                label="Country"
                onChange={(e) => {
                  setStates(statesData[e.target.value]);
                  setSearchQuery({ ...searchQuery, country: e.target.value, state:"" });
                }}
                value={searchQuery.country}
              >
                <MenuItem selected value="">
                  <em>Select</em>
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country} value={country.toLowerCase()}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="state">State</InputLabel>
              <Select
                labelId="state"
                id="select-state"
                label="State"
                value={searchQuery.state}
                onChange={(e) =>{
                  setSearchQuery({ ...searchQuery, state: e.target.value })
                  e.target.value && setMapCenter(coordinates[e.target.value]) 
                }}
                defaultValue=""
              >
                <MenuItem selected value="">
                  <em>Select</em>
                </MenuItem>
                {states?.map((state) => (
                  <MenuItem key={state} value={state.toLowerCase()}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="room">Room</InputLabel>
              <Select
                labelId="room"
                id="select-room"
                label="Room"
                value={searchQuery.room}
                onChange={(e) =>
                  setSearchQuery({ ...searchQuery, room: e.target.value })
                }
                defaultValue=""
              >
                <MenuItem selected value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="1+1">1+1</MenuItem>
                <MenuItem value="2+1">2+1</MenuItem>
                <MenuItem value="3+1">3+1</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item alignSelf={'center'}>
            <Rating
              name="half-rating"
              value={searchQuery.star}
              defaultValue={0}
              precision={0.5}
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, star: +e.target.value })
              }
            />
          </Grid>
          <Grid item alignSelf={'center'}>
            <FormControlLabel
              control={<Checkbox />}
              checked={searchQuery.resale}
              label="ReSale"
              value={searchQuery.resale}
              onChange={() =>
                setSearchQuery({ ...searchQuery, resale: !searchQuery.resale })
              }
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignContent="center"
          justifyContent={"center"}
          gap={3}
          xs={12}
          sx={{ flexDirection: { xs: "column", lg: "row" } }}
        >
          <Grid item >
            <TextField
              label="Search..."
              variant="outlined"
              value={searchQuery.keyword}
              size="small"
              fullWidth
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, keyword: e.target.value })
              }
            />
          </Grid>

          <Grid item alignSelf={'center'}>
            <PriceRangeSlider
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Date"
              type="date"
              size="small"
              value={searchQuery.date}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, date: e.target.value })
              }
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignContent="center"
          justifyContent={"center"}
          gap={4}
          xs={12}
        >
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                setSalesList(salesList[searchQuery.state])
                console.log(searchQuery);
                searchQuery.state && toastSuccessNotify("Results Listed!");
              }}
              fullWidth
            >
              Search
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                setSearchQuery({ ...defaultValues })
                toastWarnNotify("Filters Cleared!");
              }}

              fullWidth
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
