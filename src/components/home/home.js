import React, { Component } from 'react'
import fire from '../../config/Fire';
import Navbar from '../navbar/navbar';

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
                 <button onClick={this.logout}>logout</button>
                <Navbar />
            </div>
        )
    }
}
export default home;
