import { Container, Row, Col, Dropdown } from "react-bootstrap";
import ResultCardWidget from "./result_card";
export default function ResultsWidget() {
  return (
    <Container className="xl mt-4 mb-4">
      <Container className="text-right">
        <Row>
          <Col>Ordenar por:</Col>
          <Col>
            <Dropdown>
            {/* <Dropdown.Header>Dropdown header</Dropdown.Header> */}
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Kilometros
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Kilometros</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tiempo</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      <ResultCardWidget></ResultCardWidget>
      <ResultCardWidget></ResultCardWidget>
      <ResultCardWidget></ResultCardWidget>
    </Container>
  );
}
