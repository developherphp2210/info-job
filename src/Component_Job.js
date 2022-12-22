import { useState} from "react";
import * as utility from "./Utility";
import { Modal,Button,Form } from "react-bootstrap";

var tot_prezzo = 0;
const month = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];


export function TableInfo(props){

    const [show,setShow] = useState(false);
    const [ora,setOra] = useState(new Date());

    // console.log(props.data);

    const handleShow = (props) => {
        setOra(new Date());        
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }
    
    return (
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
                <RequestJob data={props.data} />
                </tbody>
            </table>
            <div className="my-3">
                <button className="btn btn-primary" onClick={handleShow} >Nuovo Orario</button>
            </div>            
            <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Inserisci Nuovo Orario</Modal.Title>
                </Modal.Header>
                <Form action="/request/request.php?action=insert" method="post">
                <Modal.Body>                    
                    <Form.Group className="mb-3" controlId="group1">
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" name="data" id="data_lavoro" value={utility.Create_Data_App(ora)} required  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="group2">
                        <Form.Label>Ora inizio</Form.Label>
                        <Form.Control type="time" name="ora_ini" id="oraini" value={utility.Create_Time(ora)} required />
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
}

export function PeriodoInfo(props){    
    const [data,setdata] = useState(props.data);        
    const monthrif = Number.parseInt(data.split('-')[0]);
    return (
        <div className="col-xl-3">                                
            <div className="border border-info rounded p-3">
                <label className="form-label">Periodo di Riferimento</label>
                <div className="row mb-3">
                    <div className="col-md-7">                        
                        <select name="mese" id="mesi" className="form-select" value={monthrif} onChange={(e) => {                            
                            setdata(e.target.value+'-2022');                                                                             
                        }}>
                        {month.map((val,index) => {
                            const isSelected = (monthrif === 1+index) ? true : false;
                            return <option className={isSelected ? 'option_selected' : ''} value={index+1} key={index} selected={isSelected} >{val}</option>                        
                        })}                                                                                                          
                        </select>    
                    </div>
                    <div className="col-md-5">                        
                        <select name="anno" id="anni" className="form-select">
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>
                </div>
                {/* <p className="form-label" id="incasso">Totale Importo: {parseFloat(tot_prezzo / 2).toFixed(2).replace('.',',')}</p>  */}
            </div>                                
        </div>
    )
}

function RequestJob(props){   

    const [show,setShow] = useState(false);
    const [ora,setOra] = useState(new Date());

    const handleShow = () => {
        setOra(new Date());
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }
  
//    const url = '/request/request.php?action=select&data='+props.data;

  const response = [{"id":"38","data":"2022-12-02","ora_ini":"09:40:00","ora_fine":"00:00:00","prezzo":"23.3333","ore":"03:20:00"},{"id":"39","data":"2022-12-05","ora_ini":"09:40:00","ora_fine":"13:30:00","prezzo":"26.8333","ore":"03:50:00"},{"id":"40","data":"2022-12-07","ora_ini":"09:40:00","ora_fine":"12:50:00","prezzo":"22.1667","ore":"03:10:00"}];

//    return fetch(url)
//    .then( res => res.json())
//    .then((response) => {
      return response.map((ele,index) => {       
           return (
               <tr key={index}>
               <td>{utility.Create_Data(ele.data)}</td>               
               <td>{ele.ora_ini}</td>        
               {(ele.ora_fine==="00:00:00")?<td>
                <button className="btn btn-sm btn-success" onClick={handleShow}>Fine Lavoro</button>
                <Modal show={show} onHide={handleHide}>
                    <Modal.Header>
                        <Modal.Title>Orario di Fine Lavoro</Modal.Title>
                    </Modal.Header>
                    <Form>
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
                </td>:<td>{ele.ora_fine}</td>}         
               {(ele.ora_fine==="00:00:00")?<td>0,00</td>:<td>{utility.Gestione_Prezzo(ele.prezzo)}</td>}               
               {(ele.ora_fine==="00:00:00")?<td>0</td>:<td>{ele.ore}</td>}                            
               </tr>               
           );
       });
    // });
}       


