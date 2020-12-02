import React, {Component} from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import NavBar from '../components/NavBar.js'
import SearchBar from '../components/SearchBar.js'
import {Card, CardColumns, Button, Modal} from 'react-bootstrap';
import PatientDetailsModal from '../components/PatientDetailsModal.js'

const PatientIndex = () => {
    
    const patientIndex = useSelector(state => state.patientIndex)
    const [modalShow, setModalShow] = React.useState(false)

    return(
        <div>
            <NavBar/>
            <SearchBar/>
            <br/>
            <CardColumns>
            {patientIndex.map(patient => {
                return (
                    <Card key={patient.id}>
                      <Card.Body>
                        <Card.Title>{patient.name}</Card.Title>
                        <Card.Subtitle>MRN: {patient.mrn}</Card.Subtitle>
                        <br/>
                        <Card.Text>
                         Date of Birth: {patient.dob} <br/>
                         Gender: {patient.gender === "F" ? "Female" : "Male"} <br/>
                         Age: {patient.age} years <br/>
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Insured?: {patient.insured ? "Yes" : "No"} </small>
                        </Card.Text>
                      </Card.Body>
                      <>
                        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
                            View Patient Details
                        </Button>
                        <PatientDetailsModal patient={patient} show={modalShow} onHide={() => setModalShow(false)}/>
                        </>
                    </Card>
                    )
            })}
            </CardColumns>
        </div>
    )
}

export default PatientIndex;

