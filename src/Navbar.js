import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {

    render() {
        return(
            <div className="Navbar">
                <NavLink exact to="/addition"> Addition </NavLink>
                <NavLink exact to="/subtraction"> Subtraction </NavLink>
                <NavLink exact to="/multiplication"> Multiplication </NavLink>
                <NavLink exact to="/division"> Division </NavLink>
                <NavLink exact to="/"> Home </NavLink>
            </div>
        )
    }
}
export default withRouter(Navbar);