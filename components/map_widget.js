import { Card } from "react-bootstrap";
import { withScriptjs } from "react-google-maps";
import Map from "./map_config";
const MapLoader = withScriptjs(Map);
import { constants } from "../environment/constants";

export default function MapWidget() {
  return (
    <Card>
      <Card.Body>
        <MapLoader
          googleMapURL={`https://maps.googleapis.com/maps/api/js?alternatives=true&key=${constants.APIKEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </Card.Body>
    </Card>
  );
}
