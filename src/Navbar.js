import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {

    render() {
        return(
            <div className="Navbar">
                <NavLink activeClassName="Navbar-active" exact to="/addition"> Addition </NavLink>
                <NavLink activeClassName="Navbar-active" exact to="/subtraction"> Subtraction </NavLink>
                <NavLink activeClassName="Navbar-active" exact to="/multiplication"> Multiplication </NavLink>
                <NavLink activeClassName="Navbar-active" exact to="/division"> Division </NavLink>
                <NavLink activeClassName="Navbar-active" exact to="/"> Home </NavLink>
            </div>
        )
    }
}
export default withRouter(Navbar);