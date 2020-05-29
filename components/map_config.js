/*global google*/
import React from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

function Map({ routeplan }) {

  // useEffect(() => {
  //   // console.log(routeplan);
  //   const directionsService = new google.maps.DirectionsService();
  //   const origin = { lat: 40.756795, lng: -73.954298 };
  //   const destination = { lat: 41.756795, lng: -78.954298 };

  //   directionsService.route(
  //     {
  //       origin: origin,
  //       destination: destination,
  //       travelMode: google.maps.TravelMode.DRIVING,
  //     },
  //     (result, status) => {
  //       if (status === google.maps.DirectionsStatus.OK) {
  //         console.log(result)
  //       } else {
  //         console.error(`Error  ${result}`);
  //       }
  //     }
  //   );
  // }, []);

  const Map = withGoogleMap(() => (
    <GoogleMap
      defaultCenter={{ lat: 19.407899, lng: -99.161045 }}
      defaultZoom={14}
    >
      <DirectionsRenderer directions={null} />
    </GoogleMap>
  ));
  return (
    <Map
      containerElement={<div style={{ height: `500px`, width: "100%" }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

const mapStateToProps = (state) => ({
  routeplan: state.routeplan,
});
export default connect(mapStateToProps)(Map);
