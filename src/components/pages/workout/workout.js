import React, { Component } from 'react'
import './workout.scss';
import add from '../../../resources/img/add_wk.png';
import folder from '../../../resources/img/folder_wk.png';

class workout extends Component {
    render() {
        return (
            <div>
                <h1 className="workout__title">Start Workout</h1>
                <div className="workout__container">
                    <h3 className="workout__subtitle">Quick start</h3>
                    <button className="btn btn-primary workout__button">Start an empty workout</button>
                </div>
                <div className="workout__container">
                    <div className="myworkout">
                        <h2 className="workout__myworkouts">My workouts</h2>
                        <img className="workout__icon" src={add}></img>
                        <img className="workout__icon" src={folder}></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default workout;
