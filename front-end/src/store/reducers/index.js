export const initialState = {
    signUpNameInput: '',
    signUpSpecialtyInput: '',
    signUpEmailInput: '',
    signUpPasswordInput: '',
    signUpImageInput: '',
    signUpCredentialInput: '',
    signUpPracticeInput: '',
    signInEmailInput: '',
    signInPasswordInput: '',
    currentMedicalProvider: null,
    patientIndex: [],
    searchValue: ''
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

    }
    return state

    
}

