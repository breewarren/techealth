import React from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Col, Button, Card} from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar.js'

const EncounterForm = () => {
    const dispatch = useDispatch()
    const currentMedicalProvider = useSelector(state => state.currentMedicalProvider)
    const createEncounterDateInput = useSelector(state => state.createEncounterDateInput)
    const createEncounterPatientInput = useSelector(state => state.createEncounterPatientInput)
    const createEncounterChiefComplaintInput = useSelector(state => state.createEncounterChiefComplaintInput)
    const createEncounterAcuityInput = useSelector(state => state.createEncounterAcuityInput)
    const createEncounterHRInput = useSelector(state => state.createEncounterHRInput)
    const createEncounterBPInput = useSelector(state => state.createEncounterBPInput)
    const createEncounterTempInput = useSelector(state => state.createEncounterTempInput)
    const createEncounterRRInput = useSelector(state => state.createEncounterRRInput)
    const createEncounterSPO2Input = useSelector(state => state.createEncounterSPO2Input)
    const createEncounterOnsetInput = useSelector(state => state.createEncounterOnsetInput)
    const createEncounterDurationInput = useSelector(state => state.createEncounterDurationInput)
    const createEncounterLocationInput = useSelector(state => state.createEncounterLocationInput)
    const createEncounterCharacterInput = useSelector(state => state.createEncounterCharacterInput)
    const createEncounterSeverityInput = useSelector(state => state.createEncounterSeverityInput)
    const createEncounterModifyingFactorsInput = useSelector(state => state.createEncounterModifyingFactorsInput)
    const createEncounterAssociatedSymptomsInput = useSelector(state => state.createEncounterAssociatedSymptomsInput)
    const createEncounterGeneralInput = useSelector(state => state.createEncounterGeneralInput)
    const createEncounterVisionInput = useSelector(state => state.createEncounterVisionInput)
    const createEncounterHeadAndNeckInput = useSelector(state => state.createEncounterHeadAndNeckInput)
    const createEncounterPulmonaryInput = useSelector(state => state.createEncounterPulmonaryInput)
    const createEncounterCardiovascularInput = useSelector(state => state.createEncounterCardiovascularInput)
    const createEncounterGIInput = useSelector(state => state.createEncounterGIInput)
    const createEncounterGUInput = useSelector(state => state.createEncounterGUInput)
    const createEncounterHemoOncInput = useSelector(state => state.createEncounterHemoOncInput)
    const createEncounterOBGYNBreastInput = useSelector(state => state.createEncounterOBGYNBreastInput)
    const createEncounterNeuroInput = useSelector(state => state.createEncounterNeuroInput)
    const createEncounterEndocrineInput = useSelector(state => state.createEncounterEndocrineInput)
    const createEncounterMusculoskeletalInput = useSelector(state => state.createEncounterMusculoskeletalInput)
    const createEncounterPsychInput = useSelector(state => state.createEncounterPsychInput)
    const createEncounterSkinHairInput = useSelector(state => state.createEncounterSkinHairInput)
    const createEncounterAssessmentInput = useSelector(state => state.createEncounterAssessmentInput)
    const createEncounterTreatmentInput = useSelector(state => state.createEncounterTreatmentInput)


    const handleDateChange = (e) => {
        // console.log(e.target.value)
        dispatch({type: "CHANGE_CREATE_ENCOUNTER_DATE_INPUT", value: e.target.value})
    }

    const handlePatientChange = (e) => {
        dispatch({type: "CHANGE_CREATE_ENCOUNTER_PATIENT_INPUT", value: e.target.value})
    }

    const handleChiefComplaintChange = (e) => {
        dispatch({type: "CHANGE_CREATE_ENCOUNTER_CHIEF_COMPLAINT_INPUT", value: e.target.value})
    }

    const handleAcuityChange = (e) => {
        dispatch({type: "CHANGE_CREATE_ENCOUNTER_ACUITY_INPUT", value: e.target.value})
    }

    const handleHRChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_HR_INPUT', value: e.target.value})
    }

    const handleBPChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_BP_INPUT', value: e.target.value})
    }

    const handleTempChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_TEMP_INPUT', value: e.target.value})
    }

    const handleRRChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_RR_INPUT', value: e.target.value})
    }

    const handleSPO2Change = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_SPO2_INPUT', value: e.target.value})
    }

    const handleOnsetChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_ONSET_INPUT', value: e.target.value})
    }

    const handleDurationChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_DURATION_INPUT', value: e.target.value})
    }

    const handleLocationChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_LOCATION_INPUT', value: e.target.value})
    }

    const handleCharacterChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_CHARACTER_INPUT', value: e.target.value})
    }

    const handleSeverityChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_SEVERITY_INPUT', value: e.target.value})
    }

    const handleModifyingFactorsChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_MODIFYING_FACTORS_INPUT', value: e.target.value})
    }

    const handleAssociatedSymptomsChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_ASSOCIATED_SYMPTOMS_INPUT', value: e.target.value})
    }

    const handleGeneralChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_GENERAL_INPUT', value: e.target.value})
    }

    const handleVisionChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_VISION_INPUT', value: e.target.value})
    }

    const handleHeadAndNeckChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_HEAD_AND_NECK_INPUT', value: e.target.value})
    }

    const handlePulmonaryChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_PULMONARY_INPUT', value: e.target.value})
    }

    const handleCardiovascularChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_CARDIOVASCULAR_INPUT', value: e.target.value})
    }

    const handleGIChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_GI_INPUT', value: e.target.value})

    }

    const handleGUChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_GU_INPUT', value: e.target.value})

    }

    const handleHemoOncChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_HEMO_ONC_INPUT', value: e.target.value})
    }

    const handleOBGYNBreastChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_OBGYN_BREAST_INPUT', value: e.target.value})
    }

    const handleNeuroChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_NEURO_INPUT', value: e.target.value})
    }

    const handleEndocrineChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_ENDOCRINE_INPUT', value: e.target.value})
    }

    const handleMusculoskeletalChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_MUSCULOSKELETAL_INPUT', value: e.target.value})
    }

    const handlePsychChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_PSYCH_INPUT', value: e.target.value})
    }

    const handleSkinHairChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_SKIN_HAIR_INPUT', value: e.target.value})
    }

    const handleAssessmentChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_ASSESSMENT_INPUT', value: e.target.value})
    }

    const handleTreatmentChange = (e) => {
        dispatch({type: 'CHANGE_CREATE_ENCOUNTER_TREATMENT_INPUT', value: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let postOption = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                encounter: {
                    date: createEncounterDateInput,
                    chief_complaint: createEncounterChiefComplaintInput,
                    acuity: createEncounterAcuityInput,
                    vitals: `Heart Rate: ${createEncounterHRInput} bpm,
                        Blood Pressure: ${createEncounterBPInput} mmHg,
                        Temperature: ${createEncounterTempInput} F,
                        Respiratory Rate: ${createEncounterRRInput} bpm,
                        Pulse Oximetry: ${createEncounterSPO2Input}%`,
                    hpi: `Onset of ${createEncounterChiefComplaintInput} began on ${createEncounterOnsetInput}, which has lasted for ${createEncounterDurationInput}. ${createEncounterChiefComplaintInput} is located in ${createEncounterLocationInput} and is ${createEncounterCharacterInput} in character. Severity is ${createEncounterSeverityInput}. Modifying factors include ${createEncounterModifyingFactorsInput}. Associating symptoms include ${createEncounterAssociatedSymptomsInput}.`,
                    ros: `Onset of ${createEncounterChiefComplaintInput} began on ${createEncounterOnsetInput}, which has lasted for ${createEncounterDurationInput}. ${createEncounterChiefComplaintInput} is located in ${createEncounterLocationInput} and is ${createEncounterCharacterInput} in character. Severity is ${createEncounterSeverityInput}. Modifying factors include ${createEncounterModifyingFactorsInput}. Associating symptoms include ${createEncounterAssociatedSymptomsInput}.`,
                    physical_exam: `General: ${createEncounterGeneralInput},
                        Vision: ${createEncounterVisionInput},
                        Head & Neck: ${createEncounterHeadAndNeckInput},
                        Pulmonary: ${createEncounterPulmonaryInput},
                        Cardiovascular: ${createEncounterCardiovascularInput},
                        Gastrointestinal: ${createEncounterGIInput},
                        Genitourinary: ${createEncounterGUInput},
                        Hemotalogy & Oncology: ${createEncounterHemoOncInput},
                        ObGyn & Breast: ${createEncounterOBGYNBreastInput},
                        Neurological: ${createEncounterNeuroInput},
                        Endocrine: ${createEncounterEndocrineInput},
                        Musculoskeletal: ${createEncounterMusculoskeletalInput},
                        Psychiatric: ${createEncounterPsychInput},
                        Skin & Hair: ${createEncounterSkinHairInput}`,
                    assessment: createEncounterAssessmentInput,
                    treatment: createEncounterTreatmentInput,
                    medical_provider_id: currentMedicalProvider.id,
                    patient_id: createEncounterPatientInput
                }
            })
        }

        fetch("http://localhost:3000/encounters", postOption).then(response => response.json())
        history.push('/medical_provider/profile')
    }

    return(
        <div>
            <NavigationBar className="mp-profile"/>
            <div className="new-encounter-form">
            <Card style={{width: '99%'}}>
                <Card.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>Date of Encounter</Form.Label>
                                <Form.Control onChange={(e) => handleDateChange(e)}type="date" value="yyyy-MM-dd"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPatient">
                                <Form.Label>Patient</Form.Label>
                                <Form.Control onChange={(e) => handlePatientChange(e)} as="select" defaultValue="">
                                    <option>Select Patient...</option>
                                    {/* {currentMedicalProvider.patients.map(patient => {
                                        return <option value={patient.id}>{patient.name}, MRN: {patient.mrn}</option>
                                    })} */}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridChiefComplaint">
                                <Form.Label>Chief Complaint</Form.Label>
                                <Form.Control onChange={(e) => handleChiefComplaintChange(e)} type="text" placeholder="Enter Chief Complaint"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAcuity">
                                <Form.Label>Acuity</Form.Label>
                                <Form.Control onChange={(e) => handleAcuityChange(e)} as="select" defaultValue="">
                                    <option>Select Acuity...</option>
                                    <option value="Resuscitation">Resuscitation (most)</option>
                                    <option value="Emergent">Emergent</option>
                                    <option value="Urgent">Urgent</option>
                                    <option value="Less Urgent">Less Urgent</option>
                                    <option value="Nonurgent">Nonurgent (least)</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <br/>
                        <h6>Vital Signs</h6>
                        <br/>
                        <Form.Row>      
                            <Form.Group as={Col} controlId="formGridHR">
                            <Form.Label>Heart Rate</Form.Label>
                            <Form.Control onChange={(e) => handleHRChange(e)} type="text" placeholder="Enter Heart Rate" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridBP">
                            <Form.Label>Blood Pressure</Form.Label>
                            <Form.Control onChange={(e) => handleBPChange(e)} type="text" placeholder="Enter Blood Pressure" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTemp">
                            <Form.Label>Temperature</Form.Label>
                            <Form.Control onChange={(e) => handleTempChange(e)} type="text" placeholder="Enter Temperature" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRR">
                            <Form.Label>Respiratory Rate</Form.Label>
                            <Form.Control onChange={(e) => handleRRChange(e)} type="text" placeholder="Enter Respiratory Rate" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSPO2">
                            <Form.Label>Oxygen Saturation</Form.Label>
                            <Form.Control onChange={(e) => handleSPO2Change(e)} type="text" placeholder="Enter Oxygen Saturation" />
                            </Form.Group>
                        </Form.Row>

                        <br/>
                        <h6>History of Present Illness</h6>
                        <br/>
                        <Form.Row>      
                            <Form.Group as={Col} controlId="formGridOnset">
                            <Form.Label>Onset</Form.Label>
                            <Form.Control onChange={(e) => handleOnsetChange(e)} type="text" placeholder="When did this begin?" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDuration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control onChange={(e) => handleDurationChange(e)} type="text" placeholder="For how long?" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control onChange={(e) => handleLocationChange(e)} type="text" placeholder="Where? Does it Radiate?" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCharacter">
                            <Form.Label>Character</Form.Label>
                            <Form.Control onChange={(e) => handleCharacterChange(e)} type="text" placeholder="Sharp? Stabbing? Aching? Throbbing?" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSeverity">
                            <Form.Label>Severity</Form.Label>
                            <Form.Control onChange={(e) => handleSeverityChange(e)} as="select" defaultValue="">
                                    <option>Select Severity...</option>
                                    <option value="1/10">1 (least)</option>
                                    <option value="2/10">2</option>
                                    <option value="3/10">3</option>
                                    <option value="4/10">4</option>
                                    <option value="5/10">5</option>
                                    <option value="6/10">6</option>
                                    <option value="7/10">7</option>
                                    <option value="8/10">8</option>
                                    <option value="9/10">9</option>
                                    <option value="10/10">10 (most)</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridModifyingFactors">
                            <Form.Label>Modifying Factors</Form.Label>
                            <Form.Control onChange={(e) => handleModifyingFactorsChange(e)} type="text" placeholder="Does anything make it better? Worse?" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAssociatedSymptoms">
                            <Form.Label>Associated Symptoms</Form.Label>
                            <Form.Control onChange={(e) => handleAssociatedSymptomsChange(e)} type="text" placeholder="Any additional symptoms?" />
                            </Form.Group>
                        </Form.Row>

                        <br/>
                        <h6>Review of Systems | Physical Exam</h6>
                        <br/>
                        <Form.Row>      
                            <Form.Group as={Col} controlId="formGridGeneral">
                            <Form.Label>General</Form.Label>
                            <Form.Control onChange={(e) => handleGeneralChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridVision">
                            <Form.Label>Vision</Form.Label>
                            <Form.Control onChange={(e) => handleVisionChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridHeadAndNeck">
                            <Form.Label>Head | Neck</Form.Label>
                            <Form.Control onChange={(e) => handleHeadAndNeckChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPulmonary">
                            <Form.Label>Pulmonary</Form.Label>
                            <Form.Control onChange={(e) => handlePulmonaryChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCardiovascular">
                            <Form.Label>Cardiovascular</Form.Label>
                            <Form.Control onChange={(e) => handleCardiovascularChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGI">
                            <Form.Label>Gastrointestinal</Form.Label>
                            <Form.Control onChange={(e) => handleGIChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGU">
                            <Form.Label>Genitourinary</Form.Label>
                            <Form.Control onChange={(e) => handleGUChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridMusculoskeletal">
                            <Form.Label>Musculoskeletal</Form.Label>
                            <Form.Control onChange={(e) => handleMusculoskeletalChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>
                            
                            <Form.Group as={Col} controlId="formGridHemoOnc">
                            <Form.Label>Hematology | Oncology</Form.Label>
                            <Form.Control onChange={(e) => handleHemoOncChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridOBGYNBreast">
                            <Form.Label>Ob/Gyn | Breast</Form.Label>
                            <Form.Control onChange={(e) => handleOBGYNBreastChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridNeuro">
                            <Form.Label>Neurological</Form.Label>
                            <Form.Control onChange={(e) => handleNeuroChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEndocrine">
                            <Form.Label>Endocrine</Form.Label>
                            <Form.Control onChange={(e) => handleEndocrineChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPsych">
                            <Form.Label>Psychiatric</Form.Label>
                            <Form.Control onChange={(e) => handlePsychChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSkinHair">
                            <Form.Label>Skin | Hair</Form.Label>
                            <Form.Control onChange={(e) => handleSkinHairChange(e)} type="text" defaultValue="No Abnormal Findings"/>
                            </Form.Group>
                        </Form.Row>

                        <br/>
                        <h6>Assessment | Treatment </h6>
                        <br/>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAssessment">
                            <Form.Label>Diagnosis</Form.Label>
                            <Form.Control onChange={(e) => handleAssessmentChange(e)} type="text" placeholder="ex: I21.3 Acute ST elevation (STEMI) myocardial infarction of unspecified site"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTreatment">
                            <Form.Label>Treatment | Plan</Form.Label>
                            <Form.Control onChange={(e) => handleTreatmentChange(e)} type="text" placeholder="Enter Treatment Plan"/>
                            </Form.Group>
                        </Form.Row>
                        <br/>
                        <br/>
                        <Button className="encounter-form-button" variant="outline-secondary" type="submit">Submit Encounter</Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default EncounterForm;