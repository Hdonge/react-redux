import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React Tutorial</h1>
                <p>React, Redux and React Router in Es6 for ultra-reponsive web apps</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default Home;
