import { Button, Modal } from "react-bootstrap";
import "./TasksAndProblemsModal.css";

function TasksAndProblemsModal(props) {
    const {show, handleClose}=props;
    
    return(
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Body id="problems">
                <img  src="rejects.jpg" alt="problems"/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>סגרי</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default TasksAndProblemsModal