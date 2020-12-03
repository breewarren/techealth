import React from 'react'
import history from '../history'
import {useSelector} from 'react-redux'
import {Button, Jumbotron, Card} from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar'
import Slider from "react-slick";
import EncounterDetailsModal from '../components/EncounterDetailsModal.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MedicalProviderProfile = () => {
    
    const currentMedicalProvider = useSelector(state => state.currentMedicalProvider)
    const [modalShow, setModalShow] = React.useState(false)


    const toEditProfile = () => {
        // history.push('/medical_provider/edit')
    }

    const toViewAllPatients = () => {
        history.push('/patient/index')
    }

    const toNewPatientForm = () => {
        history.push('/patient/new')
    }

    const toNewEncounterForm = () => {
        history.push('/encounter/new')
    } 

    const handleClick = () => {

    }

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
   
    return(
        <div>
            {currentMedicalProvider ?
            <div>
                <div><NavigationBar/></div>
            <div className="mp-profile">
                {/* <div><img className="mp-image" src={currentMedicalProvider.image} height="200px"/></div> */}
                <Jumbotron>
                    <h1>{currentMedicalProvider.name}, {currentMedicalProvider.credentials}</h1>
                    <h4>{currentMedicalProvider.specialty}</h4>
                    <h5>{currentMedicalProvider.practice}</h5>
                    <br/>
                    <Button onClick={toEditProfile} variant="outline-secondary">Profile Details</Button>
                </Jumbotron>
                <h5>Active Patients</h5> 
                <Slider {...settings}>
                    {currentMedicalProvider.patients.map(patient => {
                    return  <Card patient={patient} key={patient.id}>
                                <Card.Header>{patient.name}</Card.Header>
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
                                <Button className="pt-details-button" variant="outline-secondary" onClick={null}>View Patient Details</Button>
                                <Button className="pt-assign-button" variant="outline-secondary" onClick={null}>Remove from My Patients</Button>
                            </Card>
                        })}
                </Slider>
                <br/>
                <Button className="mp-profile-button" onClick={toViewAllPatients} variant="outline-secondary">View All Patients</Button>
                <br/>
                <br/>
                <h5>Current Encounters</h5>
                <Slider {...settings}>
                    {currentMedicalProvider.encounters.map(encounter => {
                    return <Card>
                            <Card.Header>{encounter.chief_complaint}</Card.Header>
                            <Card.Body>
                                <Card.Title>{encounter.chief_complaint}</Card.Title>
                                <Card.Subtitle>Date of Encounter: {encounter.date}</Card.Subtitle>
                                <Card.Text>
                                    <small className="text-muted">Acuity: {encounter.acuity} </small>
                                </Card.Text>
                            </Card.Body>
                            <>
                            <Button className="encounter-details-button" variant="outline-secondary" onClick={() => setModalShow(true)}> View Encounter Details</Button>
                            <EncounterDetailsModal encounter={encounter} show={modalShow} onHide={() => setModalShow(false)}/>
                            </>
                           </Card>})}                    
                </Slider>
                <br/>
                <Button className="mp-profile-button" onClick={toNewEncounterForm} variant="outline-secondary">Create Encounter</Button>
                <br/>
                <br/>
                <h5>Diagnostic Testing</h5>
                <Slider {...settings}>
                {currentMedicalProvider.diagnostics.map(diagnostic => {
                return <Card>
                        <Card.Header>{diagnostic.description}</Card.Header>
                        <Card.Body><Card.Title>{diagnostic.description}</Card.Title>
                                <Card.Subtitle>Date of Diagnostic: {diagnostic.date}</Card.Subtitle>
                                <Card.Text>
                                    <small className="text-muted">Status: {diagnostic.received ? "Received" : "Pending"}</small>
                                </Card.Text>Abnormalities: {diagnostic.abnormalities}</Card.Body>
                       </Card>})}                    
                </Slider>
                <br/>
                <Button className="mp-profile-button" nClick={handleClick} variant="outline-secondary">Order Diagnostic Test</Button>               
            </div>
            </div>
            : null}
        </div>
    )
    
}

export default MedicalProviderProfile;