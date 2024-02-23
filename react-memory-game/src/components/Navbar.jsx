import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary fixed-top" id="navbar">
      <Container className="container" id="container">
        <Row className="w-100">
          <Col xs={4}>
            <Navbar.Brand href="#home">Memory Game</Navbar.Brand>
          </Col>
          <Col xs={4} className="text-center">
            <h3>Hello Matey</h3>
          </Col>
          <Col xs={4} className="text-right">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Score: 0 | Top Score: 0</Navbar.Text>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
