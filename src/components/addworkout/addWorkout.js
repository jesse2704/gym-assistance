import React, { Component } from 'react';
import Workout from '../pages/workout/workout';
import './addWorkout.scss';

class addWorkout extends Component {

    state = {
        slideDown: false,
    }
    
    checkCurrentTime = () => {
        const date = new Date;
        const currentHour = date.getHours();

        if (currentHour >= 0 && currentHour < 12) {
            return "Morning Workout";
        }

        if (currentHour >= 12 && currentHour < 18) {
            return "Afternoon Workout";
        }

        if (currentHour >= 18 && currentHour < 24) {
            return "Evening Workout";
        }
    }

    handleClick = () => {
        this.setState({ slideDown: true});
        
        let handleToUpdate = this.props.handleToUpdate;
        handleToUpdate('false')
    }

    render() {
        return (
            <div className={(this.state.slideDown === false) ? "addWorkout__block addWorkout__slide_up" : "addWorkout__block addWorkout__slide_down"}>
                <button type="button" className="btn btn-success addWorkout__button--right" onClick={this.handleClick}>Finish</button>
                <h1 className="addWorkout__title">{this.checkCurrentTime()}</h1>
                <div className="addWorkout__button_container">
                    <button type="button" className="btn btn-primary btn-lg btn-block addWorkout__button">Add Exercises</button>
                    <button type="button" className="btn btn-danger btn-lg btn-block addWorkout__button">Cancel Workout</button>
                </div>
            </div>
        )
    }
}
export default addWorkout;
