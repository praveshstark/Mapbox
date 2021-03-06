import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { NavLink } from 'react-router-dom';
// import Home from './Home'
// import { Redirect, Route, Switch } from "react-router-dom";

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude:0,
    longitude: 0,
    zoom: 2
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <>
     <div className="map">
    	<NavLink  type="submit" activeClassName='menu_active' exact className="nav-link btn1" 
        to="/home">Log out</NavLink>
        <h2>Click on Find Your Location Icon</h2>
      </div>
      
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoicHJhdmVzaHN0YXJrIiwiYSI6ImNrbnczcHVrazBidDIydnBta3R0anhjb20ifQ.tnphSF5SZxiM03ymuyBGqw"}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
    </>
  )
}

export default Map
