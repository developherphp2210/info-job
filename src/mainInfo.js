import { TableInfo } from "./tableInfo";
import { PeriodoInfo } from "./periodoInfo";

export default function MainInfo(props){

    return (
    <div className="container">
        <div className="row mt-3 p-3">
            <TableInfo newdata={props.data}/>
            <PeriodoInfo newdata={props.data} />
        </div>
    </div>        
)

}