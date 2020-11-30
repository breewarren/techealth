import React, {useEffect} from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Form, Col, Card} from 'react-bootstrap';


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
        .then(console.log)
        // .then(async (user) => {await dispatch({{type: 'SET_USER', user: {email: emailInput, password: passwordInput}
        // .then(async (medical_provider) => {await dispatch({type: 'SET_CURRENT_MEDICAL_PROVIDER', medicalProvider: {email: signInEmailInput, password: signInPasswordInput}})})
    }

    return(
        <div>
            <p>SignIn Page</p>
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
                        
                        <Button variant="outline-secondary" type="submit">Sign In</Button>
                    </Form>
                </Card.Body>
            </Card> 
            </div>
        </div>
    )
}


export default SignIn;

// const emailInput = useSelector(state => state.emailInput)
// const passwordInput = useSelector(state => state.passwordInput)
     
     // const handlePasswordChange = (e) => {
    //     dispatch({type: 'CHANGE_PASSWORD_INPUT', value: e.target.value})
    // }

    // const handleClick = () => {
        // fetch().then()
        //dispatch is asynchronous
        // .then(async (user) => {await dispatch({{type: 'SET_USER', user: {email: emailInput, password: passwordInput}}})})
        // history.push(blahblah)
        // dispatch({type: 'SET_USER', user: {email: emailInput, password: passwordInput}})
        // history.push('/home')
    // }

    /* <input placeholder="Email Address" onChange={(e) => handleEmailChange(e)}/>
    <input placeholder="Password" onChange={(e) => handlePasswordChange(e)}/>
    <button onClick={handleClick}>Submit</button> */

