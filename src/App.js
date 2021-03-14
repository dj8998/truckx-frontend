import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './container/Dashboard';
import Signin from './container/Signin';
import Signup from './container/Signup';
import PrivateRoute from './components/Private';
import AddUser from './container/AddUser';
import EditUser from './container/EditUser';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
              <PrivateRoute path='/' exact component={Dashboard} />
              <Route path='/signin' component={Signin} />
              <Route path='/signup' component={Signup} />
              <Route path='/adduser' component={AddUser} />
              <Route path='/edituser' component={EditUser} />
            </Switch>
            
          </Router>
        
    </div>
  );
}

export default App;
