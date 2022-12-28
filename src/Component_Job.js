import { useState} from "react";
import * as utility from "./utility";
import { Modal,Button,Form } from "react-bootstrap";

export default function MainInfo(props){

    const [show,setShow] = useState(false);
    const [data_ora,setData_ora] = useState(new Date());
    const [valdata,setValdata] = useState(props.newdata);            
    const monthrif = Number.parseInt(valdata.split('-')[0]);
    const yearrif = valdata.substr(valdata.indexOf('-')+1,4);
    const month = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
    

    const handleShow = () => {
        setData_ora(new Date());        
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    const handleChangeMonth = (e) => {
        setValdata(e.target.value+'-'+yearrif);          
        // utility.RequestJob(valdata);                                                               
    }

    const handleChangeYear = (e) => {
        setValdata(monthrif+'-'+e.target.value);          
        // utility.RequestJob(valdata);                                                               
    }

    const request = utility.RequestJob(valdata);

    console.log(__filename);

    const TableInfo = (
        <div className="col-xl-9 border border-primary rounded mb-3">
            <table className="table">
                <thead>
                    <tr>
                        <th>Giorno</th>                                                       
                        <th>Ora Inizio</th>
                        <th>Ora Fine</th>
                        <th>Importo</th>
                        <th>Ore</th>
                    </tr>
                </thead>
                <tbody>
                {request[0]}
                </tbody>
            </table>
            <div className="my-3">
                <button className="btn btn-primary" onClick={handleShow} >Nuovo Orario</button>
            </div>            
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
        </div>
    )

    const PeriodoInfo = (
        <div className="col-xl-3">                                
            <div className="border border-info rounded p-3">
                <label className="form-label">Periodo di Riferimento</label>
                <div className="row mb-3">
                    <div className="col-md-7">                        
                        <select name="mese" id="mesi" className="form-select" value={monthrif} onChange={handleChangeMonth} >
                        {month.map((val,index) => {
                            const isSelected = (monthrif === 1+index) ? true : false;
                            return <option className={isSelected ? 'option_selected' : ''} value={index+1} key={index} selected={isSelected} >{val}</option>                        
                        })}                                                                                                          
                        </select>    
                    </div>
                    <div className="col-md-5">                        
                        <select name="anno" id="anni" className="form-select" value={yearrif} onChange={handleChangeYear}>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>
                </div>
                <p className="form-label" id="incasso">Totale Importo: {parseFloat(request[1]).toFixed(2).replace('.',',')}</p> 
            </div>                                
        </div>
    )
 
    
    return (<>{TableInfo}{PeriodoInfo}</>)
}





