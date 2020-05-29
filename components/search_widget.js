import { Container, Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { submitRoute } from "../store/routeplan/action";

// const Paragraph = styled.p`
//   font-weight: bold;
//   text-transform: uppercase;
// `;
const SearchButton = styled(Button)`
  width: 100%;
  background-color: #437cc2;
`;
const CustomLabel = styled(Form.Label)`
  text-transform: uppercase;
  font-weight: bold;
  color: #696d7d;
  font-size: 0.8rem;
`;

const CustomInput = styled(Form.Control)`
  border: 1px grey;
  box-shadow: 0px 0px 5px 3px #ebebeb;
`;

function SearchWidget({ submitRoute }) {
  const submitRouteHandler = (args) => {
    let reqBody = {
      origin: [19.375416, -99.154712],
      destination: [19.422241, -99.150014]
    }
    submitRoute(reqBody);
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="formOrigin">
          <CustomLabel>¿De donde sales?</CustomLabel>
          <CustomInput type="text" placeholder="Origen" />
        </Form.Group>

        <Form.Group controlId="formDestination">
          <CustomLabel>¿A donde te diriges?</CustomLabel>
          <CustomInput type="text" placeholder="Destino" />
        </Form.Group>
        <SearchButton onClick={submitRouteHandler}>Buscar ruta</SearchButton>
      </Form>
    </Container>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    submitRoute: bindActionCreators(submitRoute, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchWidget);
