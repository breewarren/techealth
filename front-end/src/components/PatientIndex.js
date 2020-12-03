import React from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import NavigationBar from '../components/NavigationBar.js'
import SearchBar from '../components/SearchBar.js'
import {Card, CardColumns, Button} from 'react-bootstrap';
import PatientDetailsModal from '../components/PatientDetailsModal.js'

const PatientIndex = () => {
    
    const patientIndex = useSelector(state => state.patientIndex)
    const searchInput = useSelector(state => state.searchInput)
    const filterPatientIndex = patientIndex.filter(patient => patient.name.toLowerCase().includes(searchInput.toLowerCase()))
    const [modalShow, setModalShow] = React.useState(false)

    return(
        <div>
            <NavigationBar/>
            <div className="patient-index">
            <br/>
            <SearchBar/>
            <br/>
            <br/>
            <CardColumns>
            {filterPatientIndex.map(patient => {
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
                        <Button className="pt-details-button" variant="outline-secondary" onClick={() => setModalShow(true)}>View Patient Details</Button>
                        <Button className="pt-assign-button" variant="outline-secondary" onClick={null}>Assign to My Patients</Button>
                        <PatientDetailsModal patient={patient} show={modalShow} onHide={() => setModalShow(false)}/>
                        </>
                    </Card>
                    )
            })}
            </CardColumns>
            </div>
        </div>
    )
}

export default PatientIndex;

