import { ModalStartJob ,ModalEndJob }  from "./modal";
import * as utility from "./utility";
import { useState} from "react";

export function TableInfo(props) {

    console.log('TableInfo' + props.newdata);

    

    const response = [{"id":"38","data":"2022-12-02","ora_ini":"09:40:00","ora_fine":"00:00:00","prezzo":"0.00","ore":"03:20:00"},{"id":"39","data":"2022-12-05","ora_ini":"09:40:00","ora_fine":"13:30:00","prezzo":"26.8333","ore":"03:50:00"},{"id":"40","data":"2022-12-07","ora_ini":"09:40:00","ora_fine":"12:50:00","prezzo":"22.1667","ore":"03:10:00"}];   
    // const url = 'request/request.php?action=select&data='+props.newdata;

    const [showstart,setShowstart] = useState(false);
    const [showend,setShowend] = useState(false);  
    const [data_ora,setData_ora] = useState(new Date());  
    
    const handleShowEnd = () => {        
        setData_ora(new Date()) 
        setShowend(true);
    }

    const handleShowStart = () => {
        setData_ora(new Date())      
        setShowstart(true);
    }

    const handleHideStart = () => {
        setShowstart(false);
    }

    const handleHideEnd = () => {
        setShowend(false);
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

    const tableBody = (
        <tbody>
        {
            
            // fetch(url)
            // .then( res => res.json() 
            // ).then((response) => {
                // debugger;
                response.map((ele,index) => {                    
                    return (
                        <tr key={index}>                        
                            <td>{utility.Create_Data(ele.data)}</td>
                            <td>{ele.ora_ini}</td>        
                            {(ele.ora_fine==="00:00:00")?<td><button className="btn btn-sm btn-success" onClick={handleShowEnd}>Fine Lavoro</button>
                            <ModalEndJob show={showend} hide={handleHideEnd} value_time={utility.Create_Time(data_ora)} /> </td>:<td>{ele.ora_fine}</td>} 
                            <td>{utility.Gestione_Prezzo(ele.prezzo)}</td>                   
                            {(ele.ora_fine==="00:00:00")?<td>0</td>:<td>{ele.ore}</td>}                                                       
                        </tr>               
                    );
                })
            // })
        }
        </tbody>
    )

    
    const table = (
        <div className="col-xl-9 border border-primary rounded mb-3">
            <table className="table">
                {tableHeader}
                {tableBody}
            </table>
            <div className="my-3">
                <button className="btn btn-primary" onClick={handleShowStart} >Nuovo Orario</button>
            </div>            
                <ModalStartJob show={showstart} hide={handleHideStart} value_data={utility.Create_Data_App(data_ora)} value_time={utility.Create_Time(data_ora)}  />
        </div>     )

return table;
} 
    