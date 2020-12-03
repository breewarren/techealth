import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {FormControl, Form, Card} from 'react-bootstrap';


const SearchBar = () => {

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        dispatch({type: "CHANGE_SEARCH_INPUT", value: e.target.value})
    }

    return(
    <div>
            <Form>
            <h6 className="search-title">Search Patients by Name</h6>
             <FormControl onChange={(e) => handleSearch(e)} type="text" size="lg" className="mr-sm-2" />
             <br/>
            </Form>
    </div>
    )
}

export default SearchBar;