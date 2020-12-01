import {Provider, useDispatch, useSelector} from 'react-redux'
import {store} from './store'
import {Route, Router} from 'react-router'
import history from './history'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import MedicalProviderProfile from './components/MedicalProviderProfile'
import PatientIndex from './components/PatientIndex'
import React, {useEffect} from 'react'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    let getOption = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    }
    
    if (localStorage.token) {
      fetch("http://localhost:3000/medical_provider", getOption).then(response => response.json())
      .then(medical_provider => dispatch({type: 'SET_CURRENT_MEDICAL_PROVIDER', medicalProvider: medical_provider}))
    }
  })

  return (
    <Router history={history}>
      <Route exact path='/' component={() => <LandingPage/>}/>
      <Route exact path ='/signup' component={() => <SignUp/>}/>
      <Route exact path ='/signin' component={() => <SignIn/>}/>
      <Route exact path ='/medical_provider/profile' component={() => <MedicalProviderProfile/>}/>
      <Route exact path ='/patient/index' component={() => <PatientIndex/>}/>
    </Router>
  );
}

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
