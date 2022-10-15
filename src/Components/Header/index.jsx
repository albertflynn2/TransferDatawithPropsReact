import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/PageTwo">PageTwo</Link>
        </div>
    );
}

export default Header;
