import React from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Col, Button, Card} from 'react-bootstrap'
import video from "../doctor2.mp4";


const SignUp = () => {
    const dispatch = useDispatch()
    const signUpNameInput = useSelector(state => state.signUpNameInput)
    const signUpSpecialtyInput = useSelector(state => state.signUpSpecialtyInput)
    const signUpEmailInput = useSelector(state => state.signUpEmailInput)
    const signUpPasswordInput = useSelector(state => state.signUpPasswordInput)
    const signUpImageInput = useSelector(state => state.signUpImageInput)
    const signUpCredentialInput = useSelector(state => state.signUpCredentialInput)
    const signUpPracticeInput = useSelector(state => state.signUpPracticeInput)

    const handleNameChange = (e) => {
        dispatch({type: "CHANGE_SIGN_UP_NAME_INPUT", value: e.target.value})
    }

    const handleSpecialtyChange = (e) => {
        dispatch({type: "CHANGE_SIGN_UP_SPECIALTY_INPUT", value: e.target.value})
    }

    const handleEmailChange = (e) => {
        dispatch({type: 'CHANGE_SIGN_UP_EMAIL_INPUT', value: e.target.value})
    }

    const handlePasswordChange = (e) => {
        dispatch({type: 'CHANGE_SIGN_UP_PASSWORD_INPUT', value: e.target.value})
    }

    const handleImageChange = (e) => {
        dispatch({type: 'CHANGE_SIGN_UP_IMAGE_INPUT', value: e.target.value})
    }

    const handleCredentialChange = (e) => {
        dispatch({type: 'CHANGE_SIGN_UP_CREDENTIAL_INPUT', value: e.target.value})
    }

    const handlePracticeChange = (e) => {
        dispatch({type: 'CHANGE_SIGN_UP_PRACTICE_INPUT', value: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let postOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ medical_provider: {
                name: signUpNameInput,
                specialty: signUpSpecialtyInput,
                email: signUpEmailInput,
                password: signUpPasswordInput,
                image: signUpImageInput,
                credentials: signUpCredentialInput,
                practice: signUpPracticeInput,
            }})
        }

        fetch("http://localhost:3000/medical_providers", postOption).then(response => response.json())
        history.push('/signin')
    }

    return(
        <div>
            <video loop muted autoplay="">
                <source src={video}/>
            </video>
            <div className="sign-up-form">
            <Card style={{width: '15%'}}>
                <Card.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => handleNameChange(e)} type="name" placeholder="Enter Full Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSpecialty">
                                <Form.Label>Specialty</Form.Label>
                                <Form.Control onChange={(e) => handleSpecialtyChange(e)} as="select" defaultValue="">
                                    <option>Select Specialty...</option>
                                    <option value="Emergency Medicine">Emergency Medicine</option>
                                    <option value="Family Medicine">Family Medicine</option>
                                    <option value="General Surgery">General Surgery</option>
                                    <option value="Internal Medicine">Internal Medicine</option>
                                    <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
                                    <option value="Pediatric">Pediatrics</option>
                                    <option value="Psychology">Psychiatry</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onChange={(e) => handleEmailChange(e)} type="email" placeholder="Enter Email Address" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => handlePasswordChange(e)} type="password" placeholder="Enter Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridImage">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control onChange={(e) => handleImageChange(e)} type="input" placeholder="Enter Profile Image URL" />
                            </Form.Group>

                            <Form.Group>
                                <Form.File onChange={(e) => handleImageChange(e)} id="formControlFileUpload" label="Upload Profile Image" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPractice">
                                <Form.Label>Practice Name</Form.Label>
                                <Form.Control onChange={(e) => handlePracticeChange(e)} as="select" defaultValue="">
                                    <option>Select Practice...</option>
                                    <option value="Houston Emergency Medicine Associates">Houston Emergency Medicine Associates</option>
                                    <option value="Family Medicical Practice of Houston">Family Medicical Practice of Houston</option>
                                    <option value="Houston Center of General Surgery">Houston Center of General Surgery</option>
                                    <option value="Internal Medicine Sepcialists of Houston">Internal Medicine Sepcialists of Houston</option>
                                    <option value="Houston Women's Health Group">Houston Women's Health Group</option>
                                    <option value="Pediatric Associates of Houston">Pediatric Associates of Houston</option>
                                    <option value="Houston Physicians of Psychiatry">Houston Physicians of Psychiatry</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCredentials">
                            <Form.Label>Select Provider Credentials: </Form.Label>
                            <div onChange={(e) => handleCredentialChange(e)} key="inline-radio" className="mb-3">
                            <Form.Check inline value="MD" label="Doctor of Medicine (MD)" type="radio" id="inline-radio-1" />
                            <Form.Check inline value="DO" label="Doctor of Osteopathic Medicine (DO)" type="radio" id="inline-radio-2" />
                            <Form.Check inline value="DNP" label="Doctor of Nursing Practice (DNP)" type="radio" id="inline-radio-3" />
                            <Form.Check inline value="NP" label="Nurse Practicioner (NP)" type="radio" id="inline-radio-4" />
                            <Form.Check inline value="PA" label="Physician Assistant (PA)" type="radio" id="inline-radio-5" /> 
                            <Form.Check inline value="Other" label="Other" type="radio" id="inline-radio-6" />                    
                            </div>
                            </Form.Group>
                        </Form.Row>

                        <Button className="sign-up-button" variant="outline-secondary" type="submit">Create Account</Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default SignUp;