import React from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Col, Button, Card} from 'react-bootstrap'
import NavigationBar from './NavigationBar'

const MedicalProviderEditForm = () => {
    const dispatch = useDispatch()
    const currentMedicalProvider = useSelector(state => state.currentMedicalProvider)
    const editMedicalProviderNameInput = useSelector(state => state.editMedicalProviderNameInput)
    // const MedicalProviderEditNameInput = useSelector(state => state.MedicalProviderEditNameInput)
    // const MedicalProviderEditSpecialtyInput = useSelector(state => state.MedicalProviderEditSpecialtyInput)
    // const MedicalProviderEditEmailInput = useSelector(state => state.MedicalProviderEditEmailInput)
    // const MedicalProviderEditPasswordInput = useSelector(state => state.MedicalProviderEditPasswordInput)
    // const MedicalProviderEditImageInput = useSelector(state => state.MedicalProviderEditImageInput)
    // const MedicalProviderEditCredentialInput = useSelector(state => state.MedicalProviderEditCredentialInput)
    // const MedicalProviderEditPracticeInput = useSelector(state => state.MedicalProviderEditPracticeInput)

    const handleNameChange = (e) => {
        dispatch({type: "CHANGE_EDIT_MEDICAL_PROVIDER_NAME_INPUT", value: e.target.value})
    }

    // const handleSpecialtyChange = (e) => {
    //     dispatch({type: "CHANGE_SIGN_UP_SPECIALTY_INPUT", value: e.target.value})
    // }

    // const handleEmailChange = (e) => {
    //     dispatch({type: 'CHANGE_SIGN_UP_EMAIL_INPUT', value: e.target.value})
    // }

    // const handlePasswordChange = (e) => {
    //     dispatch({type: 'CHANGE_SIGN_UP_PASSWORD_INPUT', value: e.target.value})
    // }

    // const handleImageChange = (e) => {
    //     dispatch({type: 'CHANGE_SIGN_UP_IMAGE_INPUT', value: e.target.value})
    // }

    // const handleCredentialChange = (e) => {
    //     dispatch({type: 'CHANGE_SIGN_UP_CREDENTIAL_INPUT', value: e.target.value})
    // }

    // const handlePracticeChange = (e) => {
    //     dispatch({type: 'CHANGE_SIGN_UP_PRACTICE_INPUT', value: e.target.value})
    // }

    const handleSubmit = (e) => {
        // e.preventDefault()
        
        // let postOption = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json"
        //     },
        //     body: JSON.stringify({ medical_provider: {
        //         name: MedicalProviderEditNameInput,
        //         specialty: MedicalProviderEditSpecialtyInput,
        //         email: MedicalProviderEditEmailInput,
        //         password: MedicalProviderEditPasswordInput,
        //         image: MedicalProviderEditImageInput,
        //         credentials: MedicalProviderEditCredentialInput,
        //         practice: MedicalProviderEditPracticeInput,
        //     }})
        // }

        // fetch("http://localhost:3000/medical_providers", postOption).then(response => response.json())
        // history.push('/signin')
    }

    return(
        <div>
            <NavigationBar/>
            <div className="sign-up-form">
            <Card style={{width: '50%'}}>
                <Card.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => handleNameChange(e)} type="name" defaultValue={currentMedicalProvider.name}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSpecialty">
                                <Form.Label>Specialty</Form.Label>
                                <Form.Control onChange={null} as="select" defaultValue={currentMedicalProvider.specialty}>
                                    <option>{currentMedicalProvider.specialty}</option>
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
                            <Form.Control onChange={null} type="email" defaultValue={currentMedicalProvider.email} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={null} type="password" placeholder="Enter Password to Confirm Changes"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridImage">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control onChange={null} type="input" defaultValue={currentMedicalProvider.image} />
                            </Form.Group>

                            <Form.Group>
                                <Form.File onChange={null} id="formControlFileUpload" label="Upload Profile Image" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPractice">
                                <Form.Label>Practice Name</Form.Label>
                                <Form.Control onChange={null} as="select" defaultValue={currentMedicalProvider.practice}>
                                    <option>{currentMedicalProvider.practice}</option>
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
                            <div onChange={null} key="inline-radio" className="mb-3">
                            <Form.Check inline value="MD" label="Doctor of Medicine (MD)" type="radio" id="inline-radio-1" checked/>
                            <Form.Check inline value="DO" label="Doctor of Osteopathic Medicine (DO)" type="radio" id="inline-radio-2" />
                            <Form.Check inline value="DNP" label="Doctor of Nursing Practice (DNP)" type="radio" id="inline-radio-3" />
                            <Form.Check inline value="NP" label="Nurse Practicioner (NP)" type="radio" id="inline-radio-4" />
                            <Form.Check inline value="PA" label="Physician Assistant (PA)" type="radio" id="inline-radio-5" /> 
                            <Form.Check inline value="Other" label="Other" type="radio" id="inline-radio-6" />                    
                            </div>
                            </Form.Group>
                        </Form.Row>

                        <Button className="update-account-button" variant="outline-secondary" type="submit">Update Account</Button>
                        <Button className="delete-account-button" variant="outline-secondary" type="submit">Delete Account</Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default MedicalProviderEditForm;