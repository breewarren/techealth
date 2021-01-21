import React from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Form, Col, Card} from 'react-bootstrap';
import video from "../doctor1.mp4";



const SignIn = () => {
    const dispatch = useDispatch()
    const signInEmailInput = useSelector(state => state.signInEmailInput)
    const signInPasswordInput= useSelector(state => state.signInPasswordInput)

    const handleEmailChange = (e) => {
        dispatch({type: "CHANGE_SIGN_IN_EMAIL_INPUT", value: e.target.value})
    }

    const handlePasswordChange = (e) => {
        dispatch({type: "CHANGE_SIGN_IN_PASSWORD_INPUT", value: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ medical_provider: {
                email: signInEmailInput,
                password: signInPasswordInput
            }})
        }

        fetch("http://localhost:3000/signin", postOptions).then(response => response.json())
        .then(medicalProvider => {
            localStorage.token = medicalProvider.token
            dispatch({type: 'SET_CURRENT_MEDICAL_PROVIDER', medicalProvider: medicalProvider.medical_provider})
        })
        history.push('/medical_provider/profile')
    }

    return(
        <div>
            <video loop muted autoplay="">
                <source src={video}/>
            </video>
            <div className="sign-in-form">
            <Card style={{width: '25%'}}>
                <Card.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group as={Col} controlId="formGridEmailAddress">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onChange={(e) => handleEmailChange(e)} type="email" placeholder="Enter Email Address" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => handlePasswordChange(e)} type="password" placeholder="Enter Password" />
                        </Form.Group>
                        
                        <Button className="sign-in-button" variant="outline-secondary" type="submit">Sign In</Button>
                    </Form>
                </Card.Body>
            </Card> 
            </div>
        </div>
    )
}


export default SignIn;
