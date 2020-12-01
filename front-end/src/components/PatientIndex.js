import React, {useEffect} from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import NavBar from '../components/NavBar.js'
import SearchBar from '../components/SearchBar.js'



const PatientIndex = () => {
    
    const dispatch = useDispatch()
    // reach an infinite loop when uncommenting out line below
    const patientIndex = useSelector(state => state.patientIndex)

    // useEffect(() => {
    //     let getOption = {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.token}`
    //       }
    //     }
        
    //     if (localStorage.token) {
    //       fetch("http://localhost:3000/patients", getOption).then(response => response.json())
    //     //   .then(console.log)
    //       .then(patients => dispatch({type: 'SET_PATIENT_INDEX', patients}))
    //     }
    // })

    return(
        <div>
            <NavBar/>
            <SearchBar/>
            {/* {patientIndex.map(patient => console.log(patient))} */}
            <p>Hi</p>
        </div>
    )
}

export default PatientIndex;

