import { Navbar, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";

function MyNavbar(props) {
    const { activeUser, onLogout } = props;

    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand variant="dark"><img src="https://i.pinimg.com/736x/00/5d/24/005d2473868e07481dc5fae29e5cd9e7.jpg" width="40px" /> גלילאו מערכת שכר </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {activeUser ? <Nav.Link href="#/entrance" title="Home Page"> <FaHome/> </Nav.Link> : null}
                </Nav>
                <Nav className="ml-auto">
                    {activeUser ? null : <Nav.Link href="#/login" title= "Login"> <FiLogIn/></Nav.Link>}
                    {activeUser ? null : <Nav.Link href="#/signup">הרשמ/י</Nav.Link>}
                    {activeUser ? <Nav.Link href="javascript:void(0)" onClick={() => onLogout()} title= "Logout"> <FiLogOut/></Nav.Link> : null}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar;