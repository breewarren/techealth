import React, {useEffect} from 'react'
//useEffect replaces componentDidMount
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
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

