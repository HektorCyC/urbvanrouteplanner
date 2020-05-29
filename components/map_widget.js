import { Card } from "react-bootstrap";
import { withScriptjs } from "react-google-maps";
import Map from "./map_config";
const MapLoader = withScriptjs(Map);

export default function MapWidget() {
  return (
    <Card>
      <Card.Body>
        <MapLoader
          googleMapURL={"https://maps.googleapis.com/maps/api/js?alternatives=true&key=AIzaSyAlMM6rsG0LrVu2y0GXdJyyt7zpc4TVnb8"}
          loadingElement={<div style={{ height: `100%` }} />}
        />
      </Card.Body>
    </Card>
  );
}
