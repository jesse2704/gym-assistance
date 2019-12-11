import React, { Component } from 'react'
import fire from '../../config/Fire';
import Navbar from '../navbar/navbar';

class home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.logout}>logout</button> */}
                <Navbar />
            </div>
        )
    }
}
export default home;
