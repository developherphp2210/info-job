import { useState} from "react";

export function PeriodoInfo(props){

    console.log('PeriodoInfo');

    const [valdata,setValdata] = useState(props.newdata);   

    const monthrif = Number.parseInt(valdata.split('-')[0]);
    const yearrif = valdata.substring(valdata.indexOf('-')+1,4);
    const month = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

    const handleChangeMonth = (e) => {
        setValdata(e.target.value+'-'+yearrif);          
        // utility.RequestJob(valdata);                                                               
    }

    const handleChangeYear = (e) => {
        setValdata(monthrif+'-'+e.target.value);          
        // utility.RequestJob(valdata);                                                               
    }

    return (
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
                {/* <p className="form-label" id="incasso">Totale Importo: {parseFloat().toFixed(2).replace('.',',')}</p>  */}
            </div>                                
        </div>
    )
}
    