import * as utility from "../utility";
import {Modal, Button, Form} from "react-bootstrap";
import {useState} from "react";

export function MyModal(props) {

    const [value, setValue] = useState(props.dataOra);
    const [date, setDate] = useState(utility.Create_Data_App(value));
    const [time, setTime] = useState(utility.Create_Time(value));

    function handleDateChange(e) {
        const eventDate = e.target.value;
        const newDate = new Date(eventDate);
        newDate.setTime(value.time);
        setValue(newDate);
        setDate(eventDate);
    }

    function handleTimeChange(e) {
        const time = e.target.value;
        const newDate = value;
        newDate.setTime(time);
        setValue(newDate);
        setTime(time);
    }

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Inserisci Nuovo Orario</Modal.Title>
            </Modal.Header>
            <Form action="./request/request.php?action=insert" method="post"> {/*it is not the proper way to do it...*/}
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" name="data" id="data_lavoro" value={date} onChange={handleDateChange} required  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ora inizio</Form.Label>
                        <Form.Control type="time" name="ora_ini" id="oraini" value={time} onChange={handleTimeChange} required />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Conferma
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export function MyModal2(props) {

    const [value, setValue] = useState(props.ora);

    // TODO: implement the same logic (look MyModal)

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header>
                <Modal.Title>Orario di Fine Lavoro</Modal.Title>
            </Modal.Header>
            <Form action="/request/request.php?action=confirm" method="post"> {/*it is not the proper way to do it...*/}
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Ora Fine</Form.Label>
                        <Form.Control type="time" name="ora_fine" id="orafine" value={utility.Create_Time(value)} onChange={(e) => setValue(e.target.value)}
                                      required/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="button" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Conferma
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}