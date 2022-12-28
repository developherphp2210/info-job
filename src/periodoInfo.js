import {MONTHS} from "./utility";

export function PeriodoInfo(props){

    console.log('PeriodoInfo');

    // const [valdata,setValdata] = useState(props.newdata);   

    const monthRif = Number.parseInt(props.newdata.split('-')[0]);
    const yearRif = props.newdata.substring(props.newdata.indexOf('-')+1,4);
    
    const handleChangeMonth = (e) => {
        props.onChange(e.target.value+'-'+yearRif);                  
    }

    const handleChangeYear = (e) => {
        props.onChange(monthRif+'-'+e.target.value);                  
    }

    return (
        <div className="col-xl-3">                                
            <div className="border border-info rounded p-3">
                <label className="form-label">Periodo di Riferimento</label>
                <div className="row mb-3">
                    <div className="col-md-7">                        
                        <select name="mese" id="mesi" className="form-select" value={monthRif} onChange={handleChangeMonth} >
                        {MONTHS.map((val,index) => {
                            const isSelected = (monthRif === 1+index) ? true : false;
                            return <option className={isSelected ? 'option_selected' : ''} value={index+1} key={index} selected={isSelected} >{val}</option>                        
                        })}                                                                                                          
                        </select>    
                    </div>
                    <div className="col-md-5">                        
                        <select name="anno" id="anni" className="form-select" value={yearRif} onChange={handleChangeYear}>
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
    