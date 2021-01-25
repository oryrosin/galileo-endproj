import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Modal, Button, Table } from "react-bootstrap";
import './MemberEditModal.css'

function MemberEditModal(props){
    const { show, handleClose, memberToEdit} = props;
    const [editableMember, setEditableMember]= useState(memberToEdit)

    function closeModal() {
        setEditableMember(memberToEdit)
        handleClose();
    }
    

    function handleEditMember() {
        axios({
            method: 'patch',
            url: "https://api.airtable.com/v0/appivINepijXjwR9W/Table%201?api_key=keyk7ppRxdcVwPFzd",
            data: { "records": [
                {"id": memberToEdit.id,
                 "fields": {
                    name: editableMember.name,
                    birthDate: editableMember.birthDate,
                    aliyaDate: editableMember.aliyaDate,
                    idNum: editableMember.idNum,
                    gamish: editableMember.gamish,
                    hitagdut: editableMember.hitagdut,
                    isActive: editableMember.isActive,
                    leaveDate: editableMember.leaveDate}
                    }
                ]}
          }).then(()=>closeModal());
    }

    return (
        <Modal show={show} onHide={closeModal} size="xl" className="c-new-recipe-modal">
            <Modal.Header closeButton>
                <Modal.Title>ערוך פרטי חברה</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table responsive striped bordered hover variant="info">
                <thead>
                <tr>
                    <td>שם</td>
                    <td>תאריך לידה</td> 
                    <td>תאריך עליה</td> 
                    <td>ת.ז</td>  
                    <td>גמי"ש</td> 
                    <td>התאגדות</td> 
                    <td>חבר פעיל?</td> 
                    <td>תאריך עזיבה</td>  
                </tr>
                </thead>
                <tbody id="modal-edit-member"> 
                    <tr>
                        <td>
                            <input type="text" value={editableMember.name}
                            onChange={(e)=> 
                                {console.log( e.target.value)
                                setEditableMember({...editableMember,name: e.target.value})}} />
                        </td>
                        <td>
                            <input type="text" value={editableMember.birthDate}
                            onChange={(e)=> 
                                {console.log( e.target.value)
                                setEditableMember({...editableMember,birthDate: e.target.value})}} />
                        </td>
                        <td>
                            <input type="text" value={editableMember.aliyaDate}
                            onChange={(e)=> 
                                {console.log( e.target.value)
                                setEditableMember({...editableMember,aliyaDate: e.target.value})}} />
                        </td>
                        <td>
                            {editableMember.idNum}
                        </td>
                        <td>
                            <input type="text" value={editableMember.gamish}
                            onChange={(e)=> 
                                {console.log( e.target.value)
                                setEditableMember({...editableMember,gamish: e.target.value})}} />
                        </td>
                        <td>
                            <input type="text" value={editableMember.hitagdut}
                            onChange={(e)=> 
                                {console.log( e.target.value)
                                setEditableMember({...editableMember,hitagdut: e.target.value})}} />
                        </td>
                        <td>
                            <input type="text" value={editableMember.isActive}
                            onChange={(e)=> 
                                {console.log( e.target.value)
                                setEditableMember({...editableMember,isActive: e.target.value})}} />
                        </td>
                        <td>
                            <input type="text" value={editableMember.leaveDate} 
                            onChange={(e)=> 
                                {console.log( e.target.value)
                                setEditableMember({...editableMember,leaveDate: e.target.value})}} />
                        </td>
                    </tr>
                </tbody>
            </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    בטלי
                </Button>
                <Button variant="primary" 
                onClick={handleEditMember}>
                    שמור שינויים
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default MemberEditModal