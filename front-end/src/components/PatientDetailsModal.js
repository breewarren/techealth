import React from 'react'
import {Button, Modal} from 'react-bootstrap';

function PatientDetailsModal (props) {

    let patient = props.patient

    return (
    <div>
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {patient.name} <br/>
                <small className="text-muted">MRN: {patient.mrn} </small>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h5>Medications </h5>
            <p>{patient.medications}</p>
            <h5>Allergies </h5>
            <p>{patient.allergies}</p>
            <h5>Medical History </h5>
            <p>{patient.mhx}</p>
            <h5>Surgical History </h5>
            <p>{patient.shx}</p>
            <h5>Fmaily History </h5>
            <p>{patient.fhx}</p>
            <h5>Social History </h5>
            <p>{patient.sohx}</p>
            <h5>Last Encounter </h5>
            <p>{patient.encounters.map(encounter => `${encounter.chief_complaint}, ${encounter.date}`)}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
</div>
    );
}

export default PatientDetailsModal;