import { GoogleMap, Marker, LoadScript, InfoBox } from "@react-google-maps/api";
import { Box } from "@mui/material";

const Map = ({ mapCenter, salesList }) => {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });
  // const center = useMemo(() => ({ lat: 48, lng: 15 }), []);

  return (
    <Box
      width={"600px"}
      height={"400px"}
      sx={{ margin: "auto", transform: "translateY(-2rem)" }}
    >
      {/* {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerClassName="map-container" zoom={4} center={center} options={{mapId:'4eb4c7fdbd63a078'}}>
          <Marker position={{ lat: 48, lng: 15 }} icon={"http://maps.google.com/mapfiles/ms/icons/pink-dot.png"}/>
        </GoogleMap>
      )} */}

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerClassName="map-container"
          zoom={11}
          center={mapCenter}
          options={{ mapId: "4eb4c7fdbd63a078" }}
        >
          {salesList?.map((sale) => (
            <Marker
              key={Date.now() + Math.random()}
              position={{ lat: sale.lat, lng: sale.lng }}
            >
              <InfoBox position={{ lat: sale.lat, lng: sale.lng }}>
                <div>adress</div>
              </InfoBox>
            </Marker>
          ))}

        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default Map;
