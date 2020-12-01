import React from 'react'
import history from '../history'
import {Button} from 'react-bootstrap';

const LandingPage = () => {

    const handleSignUp = () => {
        history.push('/signup')
    }

    const handleSignIn = () => {
        history.push('/signin')
    }

    return(
        <div>
            <p>Landing Page</p>
                <Button variant="secondary" onClick={handleSignUp}>Sign Up</Button>
                <Button variant="secondary" onClick={handleSignIn}>Sign In</Button>
        </div>
    )
}

export default LandingPage;

