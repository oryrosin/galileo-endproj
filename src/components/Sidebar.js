import "./Sidebar.css";
import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FaUserEdit , FaFileUpload ,FaMoneyBillWaveAlt} from 'react-icons/fa';
import EnterWageSection from "./EnterWageSection";
import EditMembers from "./EditMembers";
import WagesSection from "./WagesSection";


function Sidebar(props) {
    const [showSection, setShowSection]= useState(null)

    function addWage(){
        alert("כאן תוקם קריאת שרת מפוארת")
    }
    const sections= [<EnterWageSection addWage={addWage}/>, <EditMembers />, <WagesSection/>]

    return(
        <Container>
            <Row className="container">
                <div className="sidebar col-sm-3">
                    <Button variant="info" onClick={()=>
                        setShowSection(0)}> הזן קובץ שכר <FaFileUpload/></Button>
                    <Button variant="info" onClick={()=>
                        setShowSection(1)}> ערוך חברים <FaUserEdit/></Button>
                    <Button  variant="info" onClick={()=>
                        setShowSection(2)}> הצג שכר <FaMoneyBillWaveAlt/></Button>
                </div>
                <div className= "main-section col-sm-9">
                    {sections[showSection]}
                </div>
            </Row>
        </Container>
    )  
}
export default Sidebar;