import Header from "../components/Header"
import Navbar1 from "../components/Navbar1"
import picture2 from '../assets/picture2.jpeg'
import { Container, Row, Col, Spinner } from "react-bootstrap"
import Footer from "../components/Footer";
import AddCompleteProjectModal from '../components/AddCompleteProjectModal'
import axios from "axios"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../components/AuthProvider";
import CompleteProjectCard from '../components/CompleteProjectCard';
import '../App.css'



export default function CompletedProjects() {
    const url = "https://paramount2.onrender.com"
    const [completedProjects, setCompletedProject] = useState([])
    const { currentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Fetch data from your backend API when the component mounts
        fetchCompletedProjects();
    }, []);


    const fetchCompletedProjects = async () => {
        try {
            const response = await axios.get(`${url}/allcompletedprojects`);
            setCompletedProject(response.data); // Set the fetched projects to state
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };




    const handleDeleteProject = async (id) => {
        try {
            await axios.delete(`${url}/completedprojects/${id}`);
            fetchCompletedProjects(); // Fetch updated bookings after deletion
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <>

            <Header />
            <Navbar1 />
            <Container fluid>
                <Row>
                    <Col sm={12} className="p-0 position-relative">
                        <img src={picture2} alt="Your image" height="250px" className="w-100 " style={{ filter: 'brightness(0.3)' }}></img>
                    </Col>
                    <h2 style={{ fontFamily: '"Source Sans Pro", sans-serif', left: '60px', top: '250px' }} className="font-weight-bold position-absolute text-white ">COMPLETED PROJECTS</h2>
                </Row>
            </Container>
            <Col sm={12} className="d-flex align-items-center justify-content-center" style={{ marginBottom: "20px", paddingTop: "50px" }}>
                {currentUser && currentUser.email === "user@admin.com" && (
                    <AddCompleteProjectModal />
                )}
            </Col>

            {
                loading ? ( // Render spinner if loading
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        <Spinner animation="border" variant="primary" style={{ width: '5rem', height: '5rem' }} />
                    </div >
                ) : (
                    <Row >
                        {completedProjects.map((completedProject, index) => (
                            <Col key={index} sm={12} className="mb-5">
                                <CompleteProjectCard
                                    key={completedProject.id}
                                    id={completedProject.id}
                                    price={completedProject.price}
                                    image_url={completedProject.image_url}
                                    title={completedProject.title}
                                    location={completedProject.location}
                                    description={completedProject.description}
                                    car_park={completedProject.car_park}
                                    bathroom={completedProject.bathroom}
                                    bedroom={completedProject.bedroom}
                                    room_size={completedProject.room_size}
                                    onDelete={() => handleDeleteProject(completedProject.id)}

                                />

                            </Col>
                        ))}
                    </Row>

                )
            }

            <Footer />
        </>
    )
}