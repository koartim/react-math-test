import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return(
            <nav>
                <NavLink to="/addition">Addition</NavLink>
                <NavLink to="/subtraction">Subtraction</NavLink>
                <NavLink to="/multiplication">Multiplication</NavLink>
                <NavLink to="/division">Division</NavLink>
            </nav>
        )
    }
}
export default withRouter(Navbar);