import React from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'
import {Button, FormControl, Form} from 'react-bootstrap';


const SearchBar = () => {

    const dispatch = useDispatch()
    const patientIndex = useSelector(state => state.patientIndex)
    const searchInput = useSelector(state => state.searchInput)
    const updatePatients = patientIndex.filter(patient => {
        return patient.name.toLowerCase().includes(searchInput)
    })

    const handleSearch = (e) => {
        dispatch({type: "CHANGE_SEARCH_INPUT", value: e.target.value})
        dispatch({type: "CHANGE_PATIENT_INDEX", value: updatePatients})
    }

    return(
    <div>
      <Form>
      <FormControl onChange={(e) => handleSearch(e)} type="text" placeholder="Search Patients by Name" className="mr-sm-2" />
    </Form>
    </div>
    )
}

export default SearchBar;