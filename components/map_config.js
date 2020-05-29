import React from "react";
// import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { responseRoute } from "../store/routeplan/action";
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

function Map({ inputRoute, responseRoute, drawRoute }) {
  // useEffect(() => {
  const directionsService = new google.maps.DirectionsService();
  const origin = {
    lat: inputRoute == null ? null : inputRoute.origin[0],
    lng: inputRoute == null ? null : inputRoute.origin[1],
  };
  const destination = {
    lat: inputRoute == null ? null : inputRoute.destination[0],
    lng: inputRoute == null ? null : inputRoute.destination[1],
  };
  directionsService.route(
    {
      origin: inputRoute == null ? null : { placeId: inputRoute.origin },
      destination:
        inputRoute == null ? null : { placeId: inputRoute.destination },
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        responseRoute(result);
      } else {
        console.error(`Error ${result}`);
      }
    }
  );
  // }, []);
  const Map = withGoogleMap(() => (
    <GoogleMap
      defaultOptions={false}
      defaultCenter={{ lat: 19.407891, lng: -99.161045 }}
      defaultZoom={14}
    >
      {drawRoute == null
        ? ""
        : drawRoute.routes.map((item, i) => {
            return (
              <DirectionsRenderer
                key={i}
                directions={drawRoute}
                defaultRouteIndex={i}
              />
            );
          })}
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
  inputRoute: state.routeplan.input,
  drawRoute: state.routeplan.responseRoute,
});
const mapDispatchToProps = (dispatch) => {
  return {
    responseRoute: bindActionCreators(responseRoute, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Map);
