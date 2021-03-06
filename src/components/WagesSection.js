import axios from "axios"
import { useEffect, useState } from "react"
import { Form, Row, Col, Button, Table } from "react-bootstrap"
import WageModel from "../Models/wageModel"
import './WagesSection.css'
import { FaFileExcel } from 'react-icons/fa';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



function WagesSection(props) {
    const [filterFName, setFilterFName] = useState("")
    const [filterLName, setFilterLName] = useState("")
    const [filterGamish, setFilterGamish] = useState("")
    const [filterMaagal, setFilterMaagal] = useState("")
    const [filterStartDate, setFilterStartDate] = useState("2004-12")
    const [filterEndDate, setFilterEndDate] = useState("2030-01")
   
    const [wagesData, setWagesData] = useState(null)
    // axios get
    // filters by onChange
    // return table of members each is clickble for wages view
    useEffect(() => {
        async function getWagesData() {
            const res = await axios.get("https://api.airtable.com/v0/appivINepijXjwR9W/Table%203?api_key=keyk7ppRxdcVwPFzd");
            const wagesRows = res.data.records.map((row) => new WageModel(row.fields, row.id));
            setWagesData(wagesRows);
        }
        getWagesData();
    }, []);

    let wagesToShow;
    if (wagesData !== null) {
        const filteredRows = wagesData.filter(wage=> 
            (wage.maagalHaim? wage.maagalHaim.includes(filterMaagal): true )
            &&(wage.fName.includes(filterFName) || wage.lName.includes(filterFName))
            && (wage.hitagdut? wage.hitagdut.includes(filterLName): true)
            && (wage.gamish? wage.gamish.includes(filterGamish):true)
            && (new Date(filterStartDate) <= wage.date&& wage.date <= new Date(filterEndDate))
            );
        

        wagesToShow = filteredRows.map((wage) =>
            <tr>
                <td>{wage.maagalHaim}</td>
                <td>{wage.hitagdut}</td>
                <td>{wage.fName}</td>
                <td>{wage.lName}</td>
                <td>{wage.idNum}</td>
                <td>{wage.month}</td>
                <td>{wage.year}</td>
                <td>{wage.gamish}</td>
                <td>{wage.employerCost}</td>
                <td>{wage.bruto}</td>
                <td>{wage.neto}</td>
                <td>{wage.socialSecutrity}</td>
                <td>{wage.pension}</td>
                <td>{wage.precentage}</td> 
                <td>{wage.membersTax}</td>
                <td><FaFileExcel /></td>
                <td><FaFileExcel /></td>
                <td><FaFileExcel /></td>
            </tr>
        );
    }


    return (
        <>
            <h1>שכר ועונש</h1>
            <Form id="wage-section-form">
                <Form.Group as={Row} controlId="formWageFilter">
                    <Form.Label column sm={2}>מעגל חיים</Form.Label>
                    <Col sm={4}><Form.Control type="text"  
                        value={filterMaagal} onChange={(e) => setFilterMaagal(e.target.value)} /></Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formWageFilter">
                    <Form.Label column sm={2}> חבר/ה</Form.Label>
                    <Col sm={4}><Form.Control type="text"
                        value={filterFName} onChange={(e) => setFilterFName(e.target.value)} /></Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formWageFilter">
                    <Form.Label column sm={2}>התאגדות</Form.Label>
                    <Col sm={4}><Form.Control type="text" 
                        value={filterLName} onChange={(e) => setFilterLName(e.target.value)}/></Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formWageFilter">
                    <Form.Label column sm={2}>מעסיק</Form.Label>
                    <Col sm={4}><Form.Control type="text" 
                        value={filterGamish} onChange={(e) => setFilterGamish(e.target.value)}/></Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formWageFilter">
                    <Form.Label column sm={2}>מתאריך</Form.Label>
                    <Col sm={4}><Form.Control type="month" min="2004-12"
                        value={filterStartDate} onChange={(e) => setFilterStartDate(e.target.value)}/></Col>
                    <Form.Label style={{display: filterStartDate!=="2004-12"? 'block': 'none'}} column sm={2}>עד תאריך</Form.Label>
                    <Col sm={4} style={{display: filterStartDate!=="2004-12"? 'block': 'none'}}><Form.Control type="month" min="2004-12"
                        value={filterEndDate} onChange={(e) => setFilterEndDate(e.target.value)}/></Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formWageFilter">
                    <Form.Label column sm={2}>אג"ש</Form.Label>
                    <Col sm={4}><Form.Control type="text" /></Col>
                    <Col sm={3}></Col> 
                    <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="galileo-data-4u"
                    sheet="tablexls"
                    buttonText="הורד כקובץ Excel" />
                </Form.Group>
                
            </Form>
            <div>
                <br />
                <Table responsive striped bordered hover variant="dark" id="table-to-xls">
                    <thead>
                        <tr>
                            <td>מעגל חיים</td>
                            <td>התאגדות</td>
                            <td>שם פרטי</td>
                            <td>שם משפחה</td>
                            <td> ת.ז</td>
                            <td>חודש</td>
                            <td>שנה</td>
                            <td>גמי"ש</td>
                            <td>עלות</td>
                            <td>ברוטו</td>
                            <td> נטו</td>
                            <td>ביטוח לאומי</td>
                            <td>פנסיה</td>
                            <td>אחוז משרה</td>
                            <td>דמי חבר</td>
                            <td>הצג תלוש</td>
                            <td>הצג תלוש</td>
                            <td>הצג תלוש</td>
                        </tr>
                    </thead>
                    <tbody> {wagesToShow} </tbody>
                </Table>
                <br />
                
            </div>
        </>
    )
}

export default WagesSection