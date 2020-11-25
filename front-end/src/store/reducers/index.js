export const initialState = {
    signUpNameInput: '',
    signUpSpecialtyInput: '',
    signUpEmailInput: '',
    signUpPasswordInput: '',
    signUpImageInput: '',
    signUpCredentialInput: '',
    signUpPracticeInput: '',
    signInEmailInput: '',
    signInPasswordInput: ''

    // medicalProviders: [],
    // user: {}
}


//needed for every item in state
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

       
        // case "SET_MEDICAL_PROVIDERS": 
        //     return {
        //         ...state, 
        //         medicalProviders: action.medicalProviders
        //     }
        // break;

        // // dispatch({type: 'CHANGE_EMAIL_INPUT', value: e.target.value})
        // case "CHANGE_EMAIL_INPUT": 
        //     return {
        //         ...state, 
        //         emailInput: action.value
        //     }
        // break;

        // case "CHANGE_PASSWORD_INPUT": 
        //     return {
        //         ...state, 
        //         passwordInput: action.value
        //     }
        // break;
        
        // // dispatch({type: 'SET_USER', user: {email: emailInput, password: passwordInput}})
        // case "SET_USER": 
        //     return {
        //         ...state, 
        //         user: action.user
        //     }
        // break;

    }
    return state

    
}

