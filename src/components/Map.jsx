import {
  GoogleMap,
  Marker,
  LoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import { Box } from "@mui/material";
import { useState } from "react";

const Map = ({ mapCenter, salesList }) => {
  // const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });
  // const center = useMemo(() => ({ lat: 48, lng: 15 }), []);

  const handleMarkerClick = (id, desc) => {
    setInfoWindowData({ id, desc });
    setIsOpen(true);
  };
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

          onClick={() => setIsOpen(false)}
        >
          {salesList?.map(({lat, lng, desc}, index) => (
            <>
              <Marker
                key={index}
                position={{ lat: lat, lng: lng }}
                onClick={() => {
                  handleMarkerClick(index, desc);
                }}
              >
                {isOpen && infoWindowData?.id === index && (
                <InfoWindow  
                onCloseClick={() => {
                  setIsOpen(false);
                }}>
                  <div>
                    <h1 style={{ fontSize: 12, fontColor: `#08233B` }}>
                      {infoWindowData?.desc}
                    </h1>
                  </div>
                </InfoWindow>
                )}
              </Marker>
            </>
          ))}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default Map;
