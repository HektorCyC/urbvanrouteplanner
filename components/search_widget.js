import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { submitRoute } from "../store/routeplan/action";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";

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

const CustomInput = styled(GooglePlacesAutocomplete)`
  border: 1px grey;
  box-shadow: 0px 0px 5px 3px #ebebeb;
`;

function SearchWidget({ submitRoute }) {
  const [originId, setOriginId] = useState("");
  const [destinationId, setDestinationId] = useState("");

  const submitRouteHandler = (args) => {
    let reqBody = {
      origin: originId,
      destination: destinationId,
    };
    submitRoute(reqBody);
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="formOrigin">
          <CustomLabel>¿De donde sales?</CustomLabel>
          <CustomInput
            onSelect={(e) => setOriginId(e.place_id)}
            // apiKey="AIzaSyAlMM6rsG0LrVu2y0GXdJyyt7zpc4TVnb8"
            placeholder="Origen"
          />
        </Form.Group>

        <Form.Group controlId="formDestination">
          <CustomLabel>¿A donde te diriges?</CustomLabel>
          <CustomInput
            onSelect={(e) => setDestinationId(e.place_id)}
            placeholder="Destino"
          />
        </Form.Group>
        <SearchButton onClick={submitRouteHandler}>Buscar ruta</SearchButton>
      </Form>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  inputRoute: state.routeplan.input,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitRoute: bindActionCreators(submitRoute, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchWidget);
