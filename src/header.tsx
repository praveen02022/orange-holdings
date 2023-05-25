import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function HeaderNav() {
  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="logo.png" style={{ width: "190px " }} alt="test" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{marginLeft:'10%'}} className="me-auto">
            <Nav.Link href="#features" style={{color:'#22205F',fontWeight:'600'}}>Seller</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'#22205F',fontWeight:'600'}}>Reseller</Nav.Link>
            <Nav.Link href="#features" style={{color:'#22205F',fontWeight:'600'}}>Supplier</Nav.Link>
            <Nav.Link href="#features" style={{color:'#22205F',fontWeight:'600'}}>Features</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'#22205F',fontWeight:'600'}}>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="primary"
              size="sm"
              style={{
                marginRight: "10px",
                background: "#22205F",
                color: "white",
                border: "none",
              }}
            >
              Login
            </Button>
            <Button
              variant="primary"
              className=""
              style={{
                marginRight: "10px",
                background: "#22205F",
                color: "white",
                border: "none",
              }}
              size="sm"
            >
              Create Store
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
