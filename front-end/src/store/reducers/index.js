export const initialState = {
    //when app starts this is where we keep all inital states
    medicalProviders: [],
    emailInput: '',
    passwordInput: '',
    user: {}
}

export const reducer = (state, action) => {
    switch(action.type) {
        //reducer; needed for every item in state; where we make cases
        case "SET_MEDICAL_PROVIDERS": 
            return {
                ...state, 
                medicalProviders: action.medicalProviders
            }
        break;

        // dispatch({type: 'CHANGE_EMAIL_INPUT', value: e.target.value})
        case "CHANGE_EMAIL_INPUT": 
            return {
                ...state, 
                emailInput: action.value
            }
        break;

        case "CHANGE_PASSWORD_INPUT": 
            return {
                ...state, 
                passwordInput: action.value
            }
        break;
        
        // dispatch({type: 'SET_USER', user: {email: emailInput, password: passwordInput}})
        case "SET_USER": 
            return {
                ...state, 
                user: action.user
            }
        break;

    }
    return state

    
}

