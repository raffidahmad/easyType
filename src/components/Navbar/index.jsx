import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/EasyTypeLogo_Green.svg';
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{
        marginBottom: "10rem",
    }}>
      <Container style={{
        fontSize: '20px',
      }}>
        <Navbar.Brand>
            <img src={logo} alt="EasyType Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Our Mission</Nav.Link>
            <Nav.Link >Contant</Nav.Link>
          </Nav>
          <Nav>
            <button style={{
                backgroundColor:'transparent',
                border: '2px solid #000000',
                padding: '0.5rem 1rem',
                borderRadius: '32px',
                fontSize: '16px',
            }}>
                GET BETA ACCESS
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;