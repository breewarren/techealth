import React, {useEffect} from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'

//useEffect replaces componentDidMount
const SignUp = () => {
    const dispatch = useDispatch()
    const emailInput = useSelector(state => state.emailInput)
    const passwordInput = useSelector(state => state.passwordInput)

    const handleEmailChange = (e) => {
        //dispatch replaces setState
        dispatch({type: 'CHANGE_EMAIL_INPUT', value: e.target.value})
    }

    const handlePasswordChange = (e) => {
        dispatch({type: 'CHANGE_PASSWORD_INPUT', value: e.target.value})
    }

    const handleClick = () => {
        // fetch().then()
        //dispatch is asynchronous
        //.then(async (user) => {await dispatch({{type: 'SET_USER', user: {email: emailInput, password: passwordInput}}})})
        // history.push(blahblah)
        dispatch({type: 'SET_USER', user: {email: emailInput, password: passwordInput}})
        history.push('/home')
    }

    return(
        <div>
            <input placeholder="Email Address" onChange={(e) => handleEmailChange(e)}/>
            <input placeholder="Password" onChange={(e) => handlePasswordChange(e)}/>
            <button onClick={handleClick}>Submit</button>
        </div>


    )
}

export default SignUp;