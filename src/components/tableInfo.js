import {useState, useEffect} from "react";
import * as utility from "../utility";
import {MyModal, MyModal2} from "./modals";

export function TableInfo(props) {

    // MOCK DATA
    const initialResponse = [{
        "id": "38",
        "data": "2022-12-02",
        "ora_ini": "09:40:00",
        "ora_fine": "00:00:00",
        "prezzo": "23.3333",
        "ore": "03:20:00"
    }, {
        "id": "39",
        "data": "2022-12-05",
        "ora_ini": "09:40:00",
        "ora_fine": "13:30:00",
        "prezzo": "26.8333",
        "ore": "03:50:00"
    }, {
        "id": "40",
        "data": "2022-12-07",
        "ora_ini": "09:40:00",
        "ora_fine": "12:50:00",
        "prezzo": "22.1667",
        "ore": "03:10:00"
    }];

    const [show, setShow] = useState(false);
    const [ora, setOra] = useState(new Date());
    const [dataOra, setDataOra] = useState(new Date());
    const [serviceResponse, setServiceResponse] = useState(initialResponse);

    useEffect(() => {

        console.log('set service call here');
        console.log(props.newdata);

        let newResponse = []; // put here the result of the new service call

        if (props.newdata === '12-2022'){
            newResponse = initialResponse;
        }

        setServiceResponse(newResponse);

    }, [props.newdata])

    const handleShow = () => {
        setDataOra(new Date());
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    const handleShow2 = () => {
        setOra(new Date());
        setShow(true);
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
                {
                    serviceResponse.map((ele, index) => {
                            return (
                                <tr key={index}>
                                    <td>{utility.Create_Data(ele.data)}</td>
                                    <td>{ele.ora_ini}</td>
                                    {(ele.ora_fine === "00:00:00") ? <td>
                                        <button className="btn btn-sm btn-success" onClick={handleShow2}>Fine Lavoro
                                        </button>
                                        <MyModal2 show={show} onHide={handleHide} ora={ora} onChange={setOra}/>
                                    </td> : <td>{ele.ora_fine}</td>}
                                    {(ele.ora_fine === "00:00:00") ? <td>0,00</td> :
                                        <td>{utility.Gestione_Prezzo(ele.prezzo)}</td>}
                                    {(ele.ora_fine === "00:00:00") ? <td>0</td> : <td>{ele.ore}</td>}
                                </tr>
                            );
                        }
                    )
                }
                </tbody>
            </table>
            <div className="my-3">
                <button className="btn btn-primary" onClick={handleShow}>Nuovo Orario</button>
            </div>
            <MyModal show={show} onHide={handleHide} dataOra={dataOra} onChange={setDataOra}/>
        </div>
    )
} 
    