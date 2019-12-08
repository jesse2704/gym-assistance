import React, { Component } from 'react'
import 

class home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <h1>You are home</h1>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}
export default home;
