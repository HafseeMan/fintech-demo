import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import title from "../title.png"
import headerprofilePic from "../header-profile.png"
import dropBtn from "../dropdownbtn.png"
import notificationBtn from "../notification-btn.png"

export default class Navbar extends Component {
    render() {
        return (
            <nav className=" fixed-top navbar navbar-expand-sm navbar-light bg-white px-sm-5">
                <Link to="/">
                    <img src={title} className=" py-0 my-0"/>
                </Link>
                <img src={headerprofilePic} className="float-left ml-0 nav-item"/>
                <img src={notificationBtn} className="float-right ml-0 nav-item"/>
                <img src= {dropBtn} className=" nav-item ml-0 my-2 nav-item"/>
                

            </nav>
        )
    }
}