import "./EntrancePage.css";
import { Redirect } from "react-router-dom";
import Navbr from "../components/MyNavbar";
import Sidebar from "../components/Sidebar";
import TasksAndProblemsModal from "../components/TasksAndProblemsModal";
import { useState } from "react";
import { Row } from "react-bootstrap";


function EntrancePage(props) {
    const {activeUser, onLogout} = props;
    const [showModal, setShowModal] = useState(true);
    
    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="container p-entrance">
            <Navbr activeUser={activeUser} onLogout={onLogout}/>
            <Row>
                <Sidebar/>  
            </Row>
            <TasksAndProblemsModal show={showModal} handleClose={()=>setShowModal(false)}/>
        </div>
    )

}

export default EntrancePage;