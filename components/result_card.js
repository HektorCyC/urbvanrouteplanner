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
export default function ResultCardWidget() {
  return (
    <ResultCard className="mt-3 mb-3">
      <Card.Body>
        <Row>
          <Col xs={8}>
            <CardTitle>Eje central 306, Portales norte</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              @19.12381283812, -12.12182182
            </CardSubtitle>
          </Col>
          <Col xs={4} md={4} className="text-center">
            <Paragraph>
              55 min
              <br />
              de viaje
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <CardTitle>Reforma 222, Juarez</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              @19.12381283812, -12.12182182
            </CardSubtitle>
          </Col>
          <Col xs={4} md={4} className="text-center">
            <Paragraph>
              12.56 km
              <br />
              de viaje
            </Paragraph>
          </Col>
        </Row>
      </Card.Body>
    </ResultCard>
  );
}
