import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/login-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} alt="logo" style={{ width: "100px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto gap-3">
                <Nav.Link href="#home">Join now</Nav.Link>
                <Nav.Link href="#" className="text-center a-2">
                  Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
