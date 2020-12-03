import React, {useEffect} from 'react'
import history from '../history'
import {Button, Card} from 'react-bootstrap';
import {useSelector} from 'react-redux'


const LandingPage = () => {

    const currentMedicalProvider = useSelector(state => state.currentMedicalProvider)

    const handleSignUp = () => {
        history.push('/signup')
    }

    const handleSignIn = () => {
        history.push('/signin')
    }

    // useEffect(() => {
    //     if (currentMedicalProvider) {
    //         history.push('/medical_provider/profile')
    //     }
    // })

    return(
    <div className="landing-page-card">
        <Card style={{width: '25%'}}>
            <span>
            <Card.Header>techealth</Card.Header>
            <br/>
            Electronic Health Record Systems
            <Card.Body>
                <Button className="landing-page-button" variant="outline-secondary" onClick={handleSignIn}>Sign In</Button>
                <Button className="landing-page-button" variant="outline-secondary" onClick={handleSignUp}>Sign Up</Button>
            </Card.Body>
            </span>
        </Card> 
    </div>
    )
}

export default LandingPage;

