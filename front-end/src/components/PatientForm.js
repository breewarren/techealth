import React, {useEffect} from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Card, Col, Form} from 'react-bootstrap';


const PatientForm = () => {

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return(
        <div>
            <div className="sign-up-form">
            <Card style={{width: '50%'}}>
                <Card.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Patient Name</Form.Label>
                            <Form.Control onChange={(e) => handleChange(e)} type="name" placeholder="Enter Patient Full Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSpecialty">
                                <Form.Label>Specialty</Form.Label>
                                <Form.Control onChange={(e) => handleChange(e)} as="select" defaultValue="">
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
                            <Form.Control onChange={(e) => handleChange(e)} type="email" placeholder="Enter Email Address" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => handleChange(e)} type="password" placeholder="Enter Password" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridImage">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control onChange={(e) => handleChange(e)} type="input" placeholder="Enter Profile Image URL" />
                            </Form.Group>

                            <Form.Group>
                                <Form.File onChange={(e) => handleChange(e)} id="formControlFileUpload" label="Upload Profile Image" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPractice">
                                <Form.Label>Practice Name</Form.Label>
                                <Form.Control onChange={(e) => handleChange(e)} type="practice" placeholder="Enter Practice Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCredentials">
                            <Form.Label>Select Provider Credentials: </Form.Label>
                            <div onChange={(e) => handleChange(e)} key="inline-radio" className="mb-3">
                            <Form.Check inline value="MD" label="Doctor of Medicine (MD)" type="radio" id="inline-radio-1" />
                            <Form.Check inline value="DO" label="Doctor of Osteopathic Medicine(DO)" type="radio" id="inline-radio-2" />
                            <Form.Check inline value="DNP" label="Doctor of Nursing Practice (DNP)" type="radio" id="inline-radio-3" />
                            <Form.Check inline value="NP" label="Nurse Practicioner (NP)" type="radio" id="inline-radio-4" />
                            <Form.Check inline value="PA" label="Physician Assistant (PA)" type="radio" id="inline-radio-5" /> 
                            <Form.Check inline value="Other" label="Other" type="radio" id="inline-radio-6" />                    
                            </div>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="secondary" type="submit">Create Account</Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default PatientForm;

