import { Navbar, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";

function MyNavbar(props) {
    const { activeUser, onLogout } = props;

    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand variant="dark"><img src="brand.jpg" width="50px" /> גלילאו מערכת שכר </Navbar.Brand>
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