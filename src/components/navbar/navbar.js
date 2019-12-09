import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Workout from '../pages/workout/workout';
import maxpr from '../../resources/img/max.png'
import track from '../../resources/img/track.png'
import user from '../../resources/img/user.png'
import add from '../../resources/img/addworkout.png'

export default class navbar extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route path="/">
                        <Workout />
                    </Route>
                    <Route path="/workout">
                        <Workout />
                    </Route>
                </Switch>
                <nav className="navbar fixed-bottom navbar-expand navbar-light bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" Excersises>
                                <img className="nav-logo" src={user} />
                                <span className="nav-text">You</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img className="nav-logo" src={track} />
                                <span className="nav-text">Track</span>
                            </a>
                        </li>
                        <Link to="/workout">
                            <li className="nav-item">
                                <img className="nav-logo" src={add} />
                                <span className="nav-text">Workout</span>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img className="nav-logo" src={maxpr} />
                                <span className="nav-text">MAX</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img className="nav-logo" src={track} />
                                <span className="nav-text">Test</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Router>
        )
    }
}
