import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";
const ResultCard = styled(Card)`
  box-shadow: 0px 2px 5px 1px #cccccc;
  border: none;
  background-color: #f4f4f4;
  border-radius: 1rem;
`;

const CardTitle = styled(Card.Title)`
  font-size: 1rem;
`;

const CardSubtitle = styled(Card.Subtitle)`
  font-size: 0.9rem;
`;
const Paragraph = styled.p`
  font-size: 0.85rem;
  color: grey;
`;
export default function ResultCardWidget({
  origin,
  destination,
  travelTime,
  travelDistance,
  originLatLong,
  destinationLatLong
}) {
  return (
    <ResultCard className="mt-3 mb-3">
      <Card.Body>
        <Row>
          <Col xs={8}>
            <CardTitle>{origin}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              @{originLatLong}
            </CardSubtitle>
          </Col>
          <Col xs={4} md={4} className="text-center">
            <Paragraph>
              {travelTime}
              <br />
              de viaje
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <CardTitle>{destination}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              @{destinationLatLong}
            </CardSubtitle>
          </Col>
          <Col xs={4} md={4} className="text-center">
            <Paragraph>
              {travelDistance}
              <br />
              de viaje
            </Paragraph>
          </Col>
        </Row>
      </Card.Body>
    </ResultCard>
  );
}
