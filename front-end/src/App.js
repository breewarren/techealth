import {Provider, useDispatch, useSelector} from 'react-redux'
import {store} from './store'
import {Route, Router} from 'react-router'
import history from './history'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'


import Home from './components/Home'

function App() {
  return (
    <Router history={history}>
      <Route exact path='/' component={() => <LandingPage/>}/>
      <Route exact path ='/signup' component={() => <SignUp/>}/>
      <Route exact path ='/signin' component={() => <SignIn/>}/>

      <Route exact path ='/home' component={() => <Home/>}/>
    </Router>
  );
}

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
