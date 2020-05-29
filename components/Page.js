import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
// Import Components
import Header from "../components/header";
import SearchWidget from "../components/search_widget";
import ResultsWidget from "../components/results_widget";
import MapWidget from "../components/map_widget";

const Page = () => (
  <Container className="lg mt-3">
    <Head>
      <title>Urbvan Route Planner</title>
    </Head>
    <Row>
      <Col>
        <Header />
        <SearchWidget />
        <ResultsWidget />
      </Col>
      <Col md={7}>
        <MapWidget />
      </Col>
    </Row>
    <footer className="cntr-footer">Urbvan ® 2020</footer>
  </Container>
);

export default Page;
