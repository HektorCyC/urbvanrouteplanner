import { Container } from "react-bootstrap";
import styled from "styled-components";

const ImageWrapper = styled.img`
  width: 150px
`;
function Header() {
  return (
    <Container className="mb-4">
      <ImageWrapper src="logo.svg"></ImageWrapper>
    </Container>
  );
}

export default Header;
