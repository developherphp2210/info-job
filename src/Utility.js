import { useState} from "react";
import { Modal,Button,Form } from "react-bootstrap";

var tot_prezzo = 0;

export function Create_Time(now){
    const Ora = String(now.getHours());
    const Minuti = String(now.getMinutes());
    return (Ora.length===1?'0'+Ora:Ora)+':'+(Minuti.length===1?'0'+Minuti:Minuti);
}

export function Create_Data_App(now){                      
    const Day = String(now.getDate()); 
    const Mese = String(now.getMonth()+1);            
    return now.getFullYear()+'-'+(Mese.length===1?'0'+Mese:Mese)+'-'+(Day.length===1?'0'+Day:Day); 
}


export function Create_Data(Newdata){
    const now = new Date(Newdata);                      
    const Day = String(now.getDate()); 
    const Mese = String(now.getMonth()+1);
    return (Day.length===1?'0'+Day:Day)+'/'+(Mese.length===1?'0'+Mese:Mese)+'/'+now.getFullYear();                        
}

export function Gestione_Prezzo(prezzo){     
    tot_prezzo += parseFloat(prezzo);
    return parseFloat(prezzo).toFixed(2).replace('.',','); 
}



// export function RequestJob(periodo){ 

//     let tot_prezzo = 0;

    
    
//     const [show,setShow] = useState(false);
//     const [ora,setOra] = useState(new Date());

//     const handleShow = () => {
//         setOra(new Date());
//         setShow(true);
//     }

//     const handleHide = () => {
//         setShow(false);
//     }

//     console.log('periodo'+periodo);
  
  
// //    const url = '/request/request.php?action=select&data='+periodo;
   
//     const response = [{"id":"38","data":"2022-12-02","ora_ini":"09:40:00","ora_fine":"00:00:00","prezzo":"23.3333","ore":"03:20:00"},{"id":"39","data":"2022-12-05","ora_ini":"09:40:00","ora_fine":"13:30:00","prezzo":"26.8333","ore":"03:50:00"},{"id":"40","data":"2022-12-07","ora_ini":"09:40:00","ora_fine":"12:50:00","prezzo":"22.1667","ore":"03:10:00"}];   

// //    return fetch(url)
// //    .then( res => res.json())
// //    .then((response) => {
//       return [response.map((ele,index) => {       
//            return (
//                <tr key={index}>
//                <td>{Create_Data(ele.data)}</td>               
//                <td>{ele.ora_ini}</td>        
//                {(ele.ora_fine==="00:00:00")?<td>
//                 <button className="btn btn-sm btn-success" onClick={handleShow}>Fine Lavoro</button>
//                 <Modal show={show} onHide={handleHide}>
//                     <Modal.Header>
//                         <Modal.Title>Orario di Fine Lavoro</Modal.Title>
//                     </Modal.Header>
//                     <Form action="/request/request.php?action=confirm" method="post">
//                         <Modal.Body>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Ora Fine</Form.Label>
//                                 <Form.Control type="time" name="ora_fine" id="orafine" value={Create_Time(ora)} required />
//                             </Form.Group>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" type="button" onClick={handleHide}>
//                                 Close
//                             </Button>
//                             <Button variant="primary" type="submit">
//                                 Conferma
//                             </Button>
//                         </Modal.Footer>
//                     </Form>
//                 </Modal>
//                 </td>:<td>{ele.ora_fine}</td>}         
//                {(ele.ora_fine==="00:00:00")?<td>0,00</td>:<td>{Gestione_Prezzo(ele.prezzo)}</td>}               
//                {(ele.ora_fine==="00:00:00")?<td>0</td>:<td>{ele.ore}</td>}                                       
//                </tr>               
//            );
//        }),tot_prezzo];
//     // });
// }       


