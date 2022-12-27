import { Modal,Button,Form } from "react-bootstrap";
import { useState} from "react";
import * as utility from "./Utility";

export function TableInfo(props) {

    console.log('TableInfo');

    const response = [{"id":"38","data":"2022-12-02","ora_ini":"09:40:00","ora_fine":"00:00:00","prezzo":"23.3333","ore":"03:20:00"},{"id":"39","data":"2022-12-05","ora_ini":"09:40:00","ora_fine":"13:30:00","prezzo":"26.8333","ore":"03:50:00"},{"id":"40","data":"2022-12-07","ora_ini":"09:40:00","ora_fine":"12:50:00","prezzo":"22.1667","ore":"03:10:00"}];   

    const [show,setShow] = useState(false);
    const [ora,setOra] = useState(new Date());
    const [data_ora,setData_ora] = useState(new Date());

    const handleShow = () => {
        setData_ora(new Date());        
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    const handleShow2 = () => {
        setOra(new Date());
        setShow(true);
    }

    const tableHeader = (
        <thead>
            <tr>
                <th>Giorno</th>                                                       
                <th>Ora Inizio</th>
                <th>Ora Fine</th>
                <th>Importo</th>
                <th>Ore</th>
            </tr>
        </thead>
    )

    const modal2 = (
        <Modal show={show} onHide={handleHide}>
            <Modal.Header>
                <Modal.Title>Orario di Fine Lavoro</Modal.Title>
            </Modal.Header>
            <Form action="/request/request.php?action=confirm" method="post">
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Ora Fine</Form.Label>
                        <Form.Control type="time" name="ora_fine" id="orafine" value={utility.Create_Time(ora)} required />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={handleHide}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Conferma
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

    const tableBody = (
        <tbody>
        {
            response.map((ele,index) => {       
                return (
                    <tr key={index}>                        
                        <td>{utility.Create_Data(ele.data)}</td>
                        <td>{ele.ora_ini}</td>        
                        {(ele.ora_fine==="00:00:00")?<td><button className="btn btn-sm btn-success" onClick={handleShow2}>Fine Lavoro</button>{modal2}</td>:<td>{ele.ora_fine}</td>} 
                        {(ele.ora_fine==="00:00:00")?<td>0,00</td>:<td>{utility.Gestione_Prezzo(ele.prezzo)}</td>}                    
                        {(ele.ora_fine==="00:00:00")?<td>0</td>:<td>{ele.ore}</td>}                                                       
                    </tr>               
                );
            }
            )
        }
        </tbody>
    )

    const modal = (
        <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>
            <Modal.Title>Inserisci Nuovo Orario</Modal.Title>
        </Modal.Header>
        <Form action="./request/request.php?action=insert" method="post">
        <Modal.Body>                    
            <Form.Group className="mb-3" controlId="group1">
                <Form.Label>Data</Form.Label>
                <Form.Control type="date" name="data" id="data_lavoro" value={utility.Create_Data_App(data_ora)} required  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="group2">
                <Form.Label>Ora inizio</Form.Label>
                <Form.Control type="time" name="ora_ini" id="oraini" value={utility.Create_Time(data_ora)} required />
            </Form.Group>                    
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" type="button" onClick={handleHide}>
                Close
            </Button>
            <Button variant="primary" type="submit">
                Conferma
            </Button>
        </Modal.Footer>
        </Form>
    </Modal>
    )

    const table = (
        <div className="col-xl-9 border border-primary rounded mb-3">
            <table className="table">
                {tableHeader}
                {tableBody}
            </table>
            <div className="my-3">
                <button className="btn btn-primary" onClick={handleShow} >Nuovo Orario</button>
            </div>
                {modal}                
        </div> 
    )

return table;
} 
    