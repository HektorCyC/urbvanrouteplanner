import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import ResultCardWidget from "./result_card";
function ResultsWidget({ drawRoute }) {
  return drawRoute == null ? (
    ""
  ) : (
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
      {drawRoute.routes.map((item, i) => {
        return (
          <ResultCardWidget
            key={i}
            origin={item.legs[0].start_address}
            destination={item.legs[0].end_address}
            via={item.summary}
            travelTime={item.legs[0].duration.text}
            travelDistance={item.legs[0].distance.text}
          ></ResultCardWidget>
        );
      })}
      {/* <ResultCardWidget></ResultCardWidget>
      <ResultCardWidget></ResultCardWidget> */}
    </Container>
  );
}
const mapStateToProps = (state) => ({
  drawRoute: state.routeplan.responseRoute,
});

export default connect(mapStateToProps)(ResultsWidget);
