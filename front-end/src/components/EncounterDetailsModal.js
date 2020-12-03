import React from 'react'
import {Button, Modal} from 'react-bootstrap';

function EncounterDetailsModal (props) {

    let encounter = props.encounter

    return (
    <div>
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {encounter.chief_complaint} <br/>
                <small className="text-muted">Date of Encounter: {encounter.date} </small><br/>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h5>Acuity</h5>
            <p>{encounter.acuity} </p>
            <h5>Vital Signs</h5>
            <p>{encounter.vitals}</p>
            <h5>Hisotry of Present Illness</h5>
            <p>{encounter.hpi}</p>
            <h5>Review of Systems | Physical Exam </h5>
            <p>{encounter.physical_exam}</p>
            <h5>Assessment</h5>
            <p>{encounter.assessment}</p>
            <h5>Treatment</h5>
            <p>{encounter.treatment}</p>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
</div>
    );
}

export default EncounterDetailsModal;