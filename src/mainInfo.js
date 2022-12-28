import { TableInfo } from "./tableInfo";
import { PeriodoInfo } from "./periodoInfo";
import { useState, useEffect } from "react";
import {SetInitialControlData} from "./utility";

export default function MainInfo(props){

    const [data, setData] = useState(SetInitialControlData());

    return (
    <div className="container">
        <div className="row mt-3 p-3">
            <TableInfo newdata={data}/>
            <PeriodoInfo newdata={data} onChange={setData} />
        </div>
    </div>        
)

}