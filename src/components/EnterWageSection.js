import { useState } from "react"
import { Button, Container, Card, Form, Table, Row, Col} from "react-bootstrap";
import gamishim from "../DB/gamishim.json";
import './EnterWageSection.css'
import * as XLSX from "xlsx";

function EnterWageSection(props) {
    const {show, handleClose}=props;
    const [readFile, setReadFile]= useState([]);
    const [dataToShow, setDataToShow]= useState(null);
    
    
    function handleAddWage() {
        alert("הקובץ הוזן בהצלחה למערכת");
        }
    function readExcel(file){
        let promise= new Promise((resolve, reject)=>{
            const fileReader= new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e)=>{
                const bufferArray = e.target.result;
                const workBook = XLSX.read(bufferArray, { type: "buffer" }); 
                const workSheetName = workBook.SheetNames[0];
                const workSheet = workBook.Sheets[workSheetName];
                const fileData= XLSX.utils.sheet_to_json(workSheet);
                resolve(fileData);
            };
            fileReader.onerror = (error) => {
                reject(error);
              };
        });
        promise.then((data)=>{setReadFile(data.map((row)=>
        
            <tbody>
                <td>{row["מס.עובד"]}</td>
                <td>{row["ת.זהות"]}</td>
                <td>{row["שם פרטי"]}</td>
                <td>{row["שם משפחה"]}</td>
                <td>{row["חודש"]}</td>
                <td>{row["שנה"]}</td>
                <td>{row["מחלקה"]}</td>
                <td>{row["נטו"]}</td>
                <td>{row["ב.ל. עובד"]}</td>
                <td>{row["ברוטו מס"]}</td>
            </tbody>
        
        ));
        console.log(data)})
    }
    
     

    return(
        <div className="section-wage-enter">
            <h1>הזנת שכר</h1>
            <Container className="wage-enter col-sm-12">
                <Col>
                <Form.Group >
                    <Form.File id="exel" label="הזיני קובץ אקסל תקין" 
                    onChange= {(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                      }}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>בחרי גמיש</Form.Label>
                    <Form.Control  as="select" custom>
                        <option>{gamishim[0].name}</option>
                        <option>{gamishim[1].name}</option>
                        <option>{gamishim[2].name}</option>
                        <option>{gamishim[0].name}</option>
                        <option>{gamishim[1].name}</option>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Button variant="info" onClick={handleAddWage}>הוסף קובץ</Button>
                
            </Container>
            {readFile!==[]?
            <Table striped hover variant="dark">
                <thead className="table-head">
                    <tr>
                        <td>מס.עובד</td>
                        <td>ת.זהות</td>
                        <td>שם פרטי</td>
                        <td>שם משפחה</td>
                        <td>חודש</td>
                        <td>שנה</td>
                        <td>מחלקה</td>
                        <td>נטו</td>
                        <td>ב.ל. עובד</td>
                        <td>ברוטו מס</td>
                    </tr>
                </thead>
                 {readFile} 
            </Table>:null}
                
            
            
        </div>

    )
}
export default EnterWageSection

