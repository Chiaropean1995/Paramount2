import companylogo from "../assets/companylogo.jpeg"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider"
import {
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth"




export default function Navbar1() {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        if (currentUser && currentUser.isAuthenticated) {
            navigate("/profilepage");
        }
    }, [currentUser, navigate]);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
            window.alert("Login successful!");
            handleClose();
            navigate("/profilepage");
        } catch (error) {
            console.error(error);
            // Show error message
            setErrorMessage("Invalid username or password. Please try again.");
        }
    };

    const handleClose = () => {
        setShowLoginModal(false);
    };

    const handleShowLogin = () => {
        // Only show the login modal if the user is not already logged in
        if (!currentUser) {
            setShowLoginModal(true);
        } else {
            // Show alert message that the user is already logged in
            window.alert("You are already logged in.");
        }
    };

    const handleLogout = () => {
        if (!currentUser) {
            // If user is already logged out, show alert
            alert("You are already logged out.");
            return;
        }

        auth.signOut()
            .then(() => {
                // Show logout success message
                alert("Logout successful!");
                // Navigate to profilepage.jsx
                navigate("/profilepage");
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };
    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/profilepage">
                        <img
                            src={companylogo}
                            alt="Your Logo"
                            height="70"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                            <Nav.Link className="me-4" as={Link} to="/profilepage">Home</Nav.Link>
                            <Nav.Link className="me-4" as={Link} to="/aboutus">About Us</Nav.Link>
                            <NavDropdown title="Projects" id="navbarDropdown" className="me-4">
                                <NavDropdown.Item as={Link} to="/upcomingprojects">Upcoming Projects</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/completedprojects">Completed Projects</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="me-4" as={Link} to="/gallery">Gallery</Nav.Link>
                            <Nav.Link className="me-4" as={Link} to="/jointventure">Joint Venture</Nav.Link>
                            <Nav.Link className="me-4" as={Link} to="/loancalculator">Loan</Nav.Link>
                            <Nav.Link className="me-4" as={Link} to="/contactus">Contact Us</Nav.Link>
                            <Nav.Link className="custom-nav-link" as={Link} to="/adminmanagement" style={{ display: currentUser && currentUser.email === 'user@admin.com' ? 'block' : 'none' }}>Admin Management</Nav.Link>

                            {currentUser ? (
                                <Nav.Link className="me-4">
                                    <i
                                        className="bi bi-box-arrow-right"
                                        style={{ fontSize: "1.5rem", marginLeft: "10px" }}
                                        onClick={handleLogout}
                                    ></i>
                                </Nav.Link>
                            ) : (
                                <Nav.Link className="me-4">
                                    <i
                                        className="bi bi-box-arrow-in-right"
                                        style={{ fontSize: "1.5rem", marginLeft: "10px" }}
                                        onClick={handleShowLogin}
                                    ></i>
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <Modal show={showLoginModal} onHide={handleClose} centered>
                <Modal.Body>
                    <h2 className="mb-4" style={{ fontWeight: "bold" }}>
                        Log in to your account
                    </h2>
                    <Form className="d-grid gap-2 px-5" onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                onChange={(e) => setUsername(e.target.value)}
                                type="email"
                                placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password" />
                        </Form.Group>
                        {errorMessage && <p style={{ color: "red", marginBottom: "15px" }}>{errorMessage}</p>}
                        <p style={{ fontSize: "12px" }}>
                            By signing up, you agree to the Terms of Service and Policy,
                            including Cookie Use. ParamountValley may use your contact
                            information, including your email address and phone number for
                            purposes outlined in our Privacy Policy,like keeping your account
                            secure and personalising our services, including ads. Learn more.
                            Others will be able to find you by email or phone number, when
                            provided, unless you choose otherwise here.
                        </p>
                        <Button className="rounded-pill" type="submit">
                            Log in
                        </Button>
                        <Button className="rounded-pill" onClick={handleClose}>
                            Close
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    )
}
