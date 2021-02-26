import React, { Component } from 'react'
import profilePic from "../profile-pic.png"


export default class Details extends Component {
    render() {
        return (
            <div className="col-4 bg-light">
                <div className="text-center">
                    <img src={profilePic} className="img circle mx-auto"/>
                </div>
                <div className="btn-group-vertical">
                    <button type="button" className="btn btn-lg btn-outline-light side-buttons btn-secondary ">Home</button>
                    <button type="button" className="btn btn-secondary">Income Tracker</button>
                    <button type="button" className="btn btn-secondary">Expense Tracker</button>
                    <button type="button" className="btn btn-secondary">Profile</button>
                    <button type="button" className="btn btn-secondary">Forum</button>

                </div>

            </div>
        )
    }
}