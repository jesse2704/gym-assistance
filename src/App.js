import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
     <Switch>
       <Route path='/signin' component={SignIn} />
       <Route path='/signup' component={SignUp} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
