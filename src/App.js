import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
require("dotenv").config();

mapboxgl.accessToken = process.env.REACT_APP_OPENSTREET_API;

const App = () => {
  const [lng, setLng] = useState(-7.250445);
  const [lat, setLat] = useState(112.768845);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map-area",
      style: "mapbox://styles/mapbox/streets-v11",
    });
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
    });
  }, []);
  return (
    <>
      <div className="bg-black absolute z-10 m-3 p-3 bg-opacity-50 rounded-md w-96">
        <p className="text-white text-center">
          Longitude: {lng}, Latitude: {lat}
        </p>
      </div>
      <div id="map-area" className="h-screen w-full" />
    </>
  );
};

export default App;
