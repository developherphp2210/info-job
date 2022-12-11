import { useState} from "react";

const month = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']

export default function InfoJobMain(props){

    return (
    <div className="container">
        <div className="row mt-3 p-3">
            <TableInfo data={props.data} />
            <PeriodoInfo data={props.data} />            
        </div>
    </div>        
 )



function RequestJob(props){   

   // const url = '/request/request.php?action=select&data='+props.data;

   const response = [{"id":"38","data":"2022-12-02","ora_ini":"09:40:00","ora_fine":"00:00:00","prezzo":"23.3333","ore":"03:20:00"},{"id":"39","data":"2022-12-05","ora_ini":"09:40:00","ora_fine":"13:30:00","prezzo":"26.8333","ore":"03:50:00"},{"id":"40","data":"2022-12-07","ora_ini":"09:40:00","ora_fine":"12:50:00","prezzo":"22.1667","ore":"03:10:00"}];
   
   function Create_Data(Newdata){
       const now = new Date(Newdata);                      
       const Day = String(now.getDate()); 
       const Mese = String(now.getMonth()+1);
       return (Day.length===1?'0'+Day:Day)+'/'+(Mese.length===1?'0'+Mese:Mese)+'/'+now.getFullYear();                        
   }

   // return fetch(url)
   // .then((r) => r.json())
   // .then((response) => {
   return response.map((ele,index) => {       
           return (
               <tr key={index}>
               <td>{Create_Data(ele.data)}</td>
               <td>{ele.ora_ini}</td>        
               {(ele.ora_fine==="00:00:00")?<td><button className="btn btn-sm btn-success">Fine Lavoro</button></td>:<td>{ele.ora_fine}</td>}            
               {(ele.ora_fine==="00:00:00")?<td>0,00</td>:<td>{parseFloat(ele.prezzo).toFixed(2).replace('.',',')}</td>}
               {(ele.ora_fine==="00:00:00")?<td>0</td>:<td>{ele.ore}</td>}                            
               </tr>
           );
       });
}       

function TableInfo(props){
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
                <button className="btn btn-primary" >Nuovo Orario</button>
            </div>
        </div>
    )
}

function PeriodoInfo(props){
    console.log(props.data);
    const [data,setdata] = useState(props.data);
    console.log(data);
    const monthrif = data.slice(1,data.indexOf('-')-1);
    console.log(monthrif);

    return (
        <div className="col-xl-3">                                
            <div className="border border-info rounded p-3">
                <label className="form-label">Periodo di Riferimento</label>
                <div className="row mb-3">
                    <div className="col-md-7">                        
                        <select name="mese" id="mesi" className="form-select" onChange={(e) => {
                            console.log(e.target.value);
                            setdata(e.target.value+'-2022');                         
                            console.log(data);                        
                        }}>
                        {month.map((val,index) => {
                           return <option value={index+1} key={index} selected={(monthrif===index)?'true':'false'} >{val}</option>
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
                <p className="form-label" id="incasso">Totale Importo: </p> 
            </div>                                
        </div>
    )
}


}