import { Modal,Button,Form } from "react-bootstrap";

export function ModalEndJob(props) {



    return <Modal show={props.show} onHide={props.hide}>
        <Modal.Header>
            <Modal.Title>Orario di Fine Lavoro</Modal.Title>
        </Modal.Header>
        <Form action="request/request.php?action=confirm" method="post">
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Ora Fine</Form.Label>
                    <Form.Control type="time" name="ora_fine" id="orafine" value={props.value_time} required />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" type="button" onClick={props.hide}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Conferma
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>
}

export function ModalStartJob(props){

    const header =  <Modal.Header closeButton>
                        <Modal.Title>Inserisci Nuovo Orario</Modal.Title>
                    </Modal.Header>

    const body =    <Modal.Body>                    
                        <Form.Group className="mb-3" controlId="group1">
                            <Form.Label>Data</Form.Label>
                            <Form.Control type="date" name="data" id="data_lavoro" value={props.value_data} required  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="group2">
                            <Form.Label>Ora inizio</Form.Label>
                            <Form.Control type="time" name="ora_ini" id="oraini" value={props.value_time} required />
                        </Form.Group>                    
                    </Modal.Body>

    const footer =  <Modal.Footer>
                        <Button variant="secondary" type="button" onClick={props.hide}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Conferma
                        </Button>
                    </Modal.Footer>
    
    const form =    <Form action="request/request.php?action=insert" method="post">                    
                    {body}
                    {footer}
                    </Form>

    const modal =   <Modal show={props.show} onHide={props.hde}>
                    {header}
                    {form}
                    </Modal>

    return modal;                
}