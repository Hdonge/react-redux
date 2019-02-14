import React, { Component } from 'react';
import { Link, IndexLink } from "react-router";

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <IndexLink to="/" activeclassName="active">Home</IndexLink>
                    {" | "}
                    <Link to="/about" activeclassName="active">About</Link>
                </nav>
            </div>
        );
    }
}

export default Header;
