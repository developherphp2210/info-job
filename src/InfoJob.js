import { TableInfo,PeriodoInfo } from "./Component_Job";


export default function InfoJobMain(props){

    return (
    <div className="container">
        <div className="row mt-3 p-3">
            <TableInfo data={props.data} />
            <PeriodoInfo data={props.data} />            
        </div>
    </div>        
)

}