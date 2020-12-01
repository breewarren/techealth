import React, {useEffect} from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'react-bootstrap';
import NavBar from '../components/NavBar'

const MedicalProviderProfile = () => {
    const currentMedicalProvider = useSelector(state => state.currentMedicalProvider)
   
    return(
    <div>
        <NavBar/>
        <p>Profile Page: {currentMedicalProvider.name}</p>
        <img src={currentMedicalProvider.image}/>
    </div>
    )
}

export default MedicalProviderProfile;