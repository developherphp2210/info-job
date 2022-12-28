import {MONTHS} from "./utility";

export function PeriodoInfo(props) {

    const [monthRif, yearRif] = props.newdata.split('-');

    const handleChangeMonth = (e) => {
        props.onChange(e.target.value + '-' + yearRif)
    }
    const handleChangeYear = (e) => props.onChange(monthRif + '-' + e.target.value)

    return <div className="col-xl-3">
        <div className="border border-info rounded p-3">
            <label className="form-label">Periodo di Riferimento</label>
            <div className="row mb-3">
                <div className="col-md-7">
                    <select name="mese" id="mesi" className="form-select" value={monthRif} onChange={handleChangeMonth}>
                        {MONTHS.map((val, index) => <option
                            className={monthRif === (1 + index) ? 'option_selected' : ''} value={index + 1}
                            key={index}>{val}</option>)}
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
}
    