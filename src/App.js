import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './components/home/home.css';
import './components/navbar/navbar.css';
import './App.css';
import fire from './config/Fire';
import Home from './components/home/home';
import Login from './components/login/login';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  
  render() {
    return (
     <div>{this.state.user ? ( <Home/>) : (<Login />)}</div>
    )
  }
}

 export default App;