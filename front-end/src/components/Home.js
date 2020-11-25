import React, {useEffect} from 'react'
import history from '../history'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {

    const user = useSelector(state => state.user)
    return(
        <h1>Home: {user.email}</h1>
    )
}

export default Home;