import React from 'react'
import history from '../history'
import {useSelector} from 'react-redux'
import {Button, Jumbotron, Card} from 'react-bootstrap';
import NavBar from '../components/NavBar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MedicalProviderProfile = () => {
    
    const currentMedicalProvider = useSelector(state => state.currentMedicalProvider)

    const toEditProfile = () => {
        history.push('/medical_provider/edit')
    }

    const toViewAllPatients = () => {
        history.push('/patient/index')
    }

    const toNewPatientForm = () => {
        history.push('/patient/new')
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
            <Card className="mp-profile-page">
            {currentMedicalProvider ?
            <div>
                <NavBar/>
                <Jumbotron>
                    {/* <img src={currentMedicalProvider.image} height="200px"/> */}
                    <h1>{currentMedicalProvider.name}, {currentMedicalProvider.credentials}</h1>
                    <h4>{currentMedicalProvider.specialty}</h4>
                    <h5>{currentMedicalProvider.practice}</h5>
                    <br/>
                    <Button onClick={toEditProfile} variant="outline-secondary">Edit Profile</Button>
                </Jumbotron>
                <h2>Active Patients</h2> 
                <Slider {...settings}>
                    {currentMedicalProvider.patients.map(patient => <Card patient={patient} key={patient.id}><Card.Header>{patient.name}</Card.Header><Card.Body>MRN: {patient.mrn}</Card.Body></Card>)}                  
                </Slider>
                <br/>
                <Button onClick={toViewAllPatients} variant="outline-secondary">View All Patients</Button>
                <Button onClick={toNewPatientForm} variant="outline-secondary">Create New Patient</Button>
                <br/>
                <br/>
                <h2>Current Encounters</h2>
                <Slider {...settings}>
                    {currentMedicalProvider.encounters.map(encounter => <Card><Card.Header>{encounter.date}</Card.Header><Card.Body>Chief Complaint: {encounter.chief_complaint}</Card.Body></Card>)}                    
                </Slider>
                <br/>
                <Button onClick={handleClick} variant="outline-secondary">Create Encounter</Button>
                <br/>
                <br/>
                <h2>Diagnostic Testing</h2>
                <Slider {...settings}>
                    {currentMedicalProvider.diagnostics.map(diagnostic => <Card><Card.Header>{diagnostic.description}</Card.Header><Card.Body>Status: {diagnostic.received ? "Received" : "Pending"}</Card.Body></Card>)}                    
                </Slider>
                <br/>
                <Button onClick={handleClick} variant="outline-secondary">Order Diagnostic Test</Button>               
            </div>
            : null}
            </Card>
        </div>
    )
    
}

export default MedicalProviderProfile;