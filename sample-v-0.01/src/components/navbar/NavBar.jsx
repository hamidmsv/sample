import React, {useState} from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

function NavBar(props) {

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Navbar className="navbar" bg={colorChange ? "white" : "trasparent"} expand="lg" fixed="top" style={{boxShadow: colorChange? "0 2px 15px #cccccc": "none"}}>
      <Container>

        <Navbar.Brand href="#home" className="nav-brand">
          AR SHAKIR
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">

          <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               item2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">item 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                item 4
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Templates" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        <div className="nav-start-btns">
          <Button
            type="button"
            className="btn btn-outline-dark bg-transparent"
            style={{ border: "none" }}
          >
            sign in
          </Button>
          <Button
            type="button"
            className="btn btn-primary ms-2"
            style={{ backgroundColor: "#4F46BA", border: "none" }}
          >
            start free
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
