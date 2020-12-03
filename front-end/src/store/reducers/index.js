export const initialState = {
    //sign up
    signUpNameInput: '',
    signUpSpecialtyInput: '',
    signUpEmailInput: '',
    signUpPasswordInput: '',
    signUpImageInput: '',
    signUpCredentialInput: '',
    signUpPracticeInput: '',

    //sign in
    signInEmailInput: '',
    signInPasswordInput: '',

    //logged in user
    currentMedicalProvider: null,
    patientIndex: [],

    //search bar
    searchInput: '',

    //new encounter form
    createEncounterDateInput: '',
    createEncounterPatientInput: '',
    createEncounterChiefComplaintInput: '',
    createEncounterAcuityInput: '',
    createEncounterHRInput: '',
    createEncounterBPInput: '',
    createEncounterTempInput: '',
    createEncounterRRInput: '',
    createEncounterSPO2Input: '',
    createEncounterOnsetInput: '',
    createEncounterDurationInput: '',
    createEncounterLocationInput: '',
    createEncounterCharacterInput: '',
    createEncounterSeverityInput: '',
    createEncounterModifyingFactorsInput: '',
    createEncounterAssociatedSymptomsInput: '',
    createEncounterGeneralInput: '',
    createEncounterVisionInput: '',
    createEncounterHeadAndNeckInput: '',
    createEncounterPulmonaryInput: '',
    createEncounterCardiovascularInput: '',
    createEncounterGIInput: '',
    createEncounterGUInput: '',
    createEncounterHemoOncInput: '',
    createEncounterOBGYNBreastInput: '',
    createEncounterNeuroInput: '',
    createEncounterEndocrineInput: '',
    createEncounterMusculoskeletalInput: '',
    createEncounterPsychInput: '',
    createEncounterSkinHairInput: '',
    createEncounterAssessmentInput: '',
    createEncounterTreatmentInput: ''
}

export const reducer = (state, action) => {
    switch(action.type) {

        case "CHANGE_SIGN_UP_NAME_INPUT":
            return {
                ...state, 
                signUpNameInput: action.value
            }
        break;

        case "CHANGE_SIGN_UP_SPECIALTY_INPUT":
            return {
                ...state,
                signUpSpecialtyInput: action.value
            }
        break;

        case "CHANGE_SIGN_UP_EMAIL_INPUT":
            return {
                ...state,
                signUpEmailInput: action.value
            }
        break;

        case "CHANGE_SIGN_UP_PASSWORD_INPUT":
            return {
                ...state,
                signUpPasswordInput: action.value
            }
        break;

        case "CHANGE_SIGN_UP_IMAGE_INPUT":
            return {
                ...state,
                signUpImageInput: action.value
            }
        break;

        case "CHANGE_SIGN_UP_CREDENTIAL_INPUT":
            return {
                ...state,
                signUpCredentialInput: action.value
            }
        break;

        case "CHANGE_SIGN_UP_PRACTICE_INPUT":
            return {
                ...state,
                signUpPracticeInput: action.value
            }
        break;

        case "CHANGE_SIGN_IN_EMAIL_INPUT":
            return {
                ...state,
                signInEmailInput: action.value
            }
        break;

        case "CHANGE_SIGN_IN_PASSWORD_INPUT":
            return {
                ...state,
                signInPasswordInput: action.value
            }
        break;

        case "SET_CURRENT_MEDICAL_PROVIDER":
            return {
                ...state,
                currentMedicalProvider: action.medicalProvider
            }
        break;

        case "SET_PATIENT_INDEX": 
            return {
                ...state, 
                patientIndex: action.patients
            }
        break;

        case "CHANGE_SEARCH_INPUT": 
            return {
                ...state, 
                searchInput: action.value
            }
        break;

        case "CHANGE_PATIENT_INDEX": 
            return {
                ...state, 
                patientIndex: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_DATE_INPUT": 
            return {
            ...state, 
            createEncounterDateInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_PATIENT_INPUT": 
            return {
            ...state, 
            createEncounterPatientInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_CHIEF_COMPLAINT_INPUT": 
            return {
            ...state, 
            createEncounterChiefComplaintInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_ACUITY_INPUT": 
            return {
            ...state, 
            createEncounterAcuityInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_HR_INPUT": 
            return {
            ...state, 
            createEncounterHRInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_BP_INPUT": 
            return {
            ...state, 
            createEncounterBPInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_TEMP_INPUT": 
            return {
            ...state, 
            createEncounterTempInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_RR_INPUT": 
            return {
            ...state, 
            createEncounterRRInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_SPO2_INPUT": 
            return {
            ...state, 
            createEncounterSPO2Input: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_ONSET_INPUT": 
            return {
            ...state, 
            createEncounterOnsetInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_DURATION_INPUT": 
            return {
            ...state, 
            createEncounterDurationInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_LOCATION_INPUT": 
            return {
            ...state, 
            createEncounterLocationInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_CHARACTER_INPUT": 
            return {
            ...state, 
            createEncounterCharacterInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_SEVERITY_INPUT": 
            return {
            ...state, 
            createEncounterSeverityInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_MODIFYING_FACTORS_INPUT": 
            return {
            ...state, 
            createEncounterModifyingFactorsInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_ASSOCIATED_SYMPTOMS_INPUT": 
            return {
            ...state, 
            createEncounterAssociatedSymptomsInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_GENERAL_INPUT": 
            return {
            ...state, 
            createEncounterGeneralInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_VISION_INPUT": 
            return {
            ...state, 
            createEncounterVisionInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_HEAD_AND_NECK_INPUT": 
            return {
            ...state, 
            createEncounterHeadAndNeckInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_PULMONARY_INPUT": 
            return {
            ...state, 
            createEncounterPulmonaryInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_CARDIOVASCULAR_INPUT": 
            return {
            ...state, 
            createEncounterCardiovascularInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_GI_INPUT": 
            return {
            ...state, 
            createEncounterGIInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_GU_INPUT": 
            return {
            ...state, 
            createEncounterGUInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_HEMO_ONC_INPUT": 
            return {
            ...state, 
            createEncounterHemoOncInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_OBGYN_BREAST_INPUT": 
            return {
            ...state, 
            createEncounterOBGYNBreastInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_NEURO_INPUT": 
            return {
            ...state, 
            createEncounterNeuroInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_ENDOCRINE_INPUT": 
            return {
            ...state, 
            createEncounterEndocrineInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_MUSCULOSKELETAL_INPUT": 
            return {
            ...state, 
            createEncounterMusculoskeletalInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_PSYCH_INPUT": 
            return {
            ...state, 
            createEncounterPsychInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_SKIN_HAIR_INPUT": 
            return {
            ...state, 
            createEncounterSkinHairInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_ASSESSMENT_INPUT": 
            return {
            ...state, 
            createEncounterAssessmentInput: action.value
            }
        break;

        case "CHANGE_CREATE_ENCOUNTER_TREATMENT_INPUT": 
            return {
            ...state, 
            createEncounterTreatmentInput: action.value
            }
        break;
        

        

    }
    return state

    
}

