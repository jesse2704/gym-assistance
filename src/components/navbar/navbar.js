import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Workout from '../pages/workout/workout';
import User from '../pages/user_profile/userProfile';
import Trackprogress from '../pages/track_progress/trackProgress';
import maxpr from '../../resources/img/max.png';
import track from '../../resources/img/track.png';
import user from '../../resources/img/user.png';
import add from '../../resources/img/addworkout.png';

export default class navbar extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar fixed-bottom navbar-expand navbar-light bg-dark">
                    <ul className="navbar-nav">
                        <Link to="/user_page">
                            <li className="nav-item">
                                    <img className="nav-logo" src={user} alt="user"/>
                                    <span className="nav-text">You</span>
                            </li>
                        </Link>
                        <Link to="/track_progress">
                            <li className="nav-item">
                                    <img className="nav-logo" src={track} alt="track"/>
                                    <span className="nav-text">Track</span>

                            </li>
                        </Link>
                        <Link to="/workout">
                            <li className="nav-item">
                                <img className="nav-logo" src={add} alt="add"/>
                                <span className="nav-text">Workout</span>
                            </li>
                        </Link>
                        <li className="nav-item">
                                <img className="nav-logo" src={maxpr} alt="max"/>
                                <span className="nav-text">MAX</span>
                        </li>
                        <li className="nav-item">
                                <img className="nav-logo" src={track} alt="track"/>
                                <span className="nav-text">Test</span>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/workout">
                        <Workout />
                    </Route>
                    <Route path="/user_page">
                        <User />
                    </Route>
                    <Route path="/track_progress">
                        <Trackprogress />
                    </Route>
                    <Route path="/">
                        <Workout />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
