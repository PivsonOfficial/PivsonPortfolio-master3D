import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './navigace.css';

function NavigationMenu() {
    return (
        <div className="navigace" >
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home" style= {{ fontSize: '200%', color:'#BDFFBC' }}>Pivson Vydra</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#section1" style= {{ fontSize: '130%', color:'aliceblue' }} >Domovská stránka</Nav.Link>
                        <Nav.Link href="#section2" style= {{ fontSize: '130%', color:'aliceblue' }}>O mně</Nav.Link>
                        <Nav.Link href="#section3" style= {{ fontSize: '130%', color:'aliceblue' }}>Mé projekty</Nav.Link>
                        <Nav.Link href="#section4" style= {{ fontSize: '130%', color:'aliceblue' }}>Skills</Nav.Link>
                        <Nav.Link href="#section5" style= {{ fontSize: '130%', color:'aliceblue' }}>Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavigationMenu;