import React, {useEffect} from 'react'
//useEffect replaces componentDidMount
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'

const LandingPage = () => {
    const dispatch = useDispatch()
    const emailInput = useSelector(state => state.emailInput)
    const passwordInput = useSelector(state => state.passwordInput)

    

    return(
        <div>
            Landing Page
        </div>


    )
}

export default LandingPage;