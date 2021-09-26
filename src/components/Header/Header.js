import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            {/* header title */}
            <h1>Top 15 Schools in BD</h1>
            <h1 style={{ fontSize: '30px' }}>Minimum Student: 100000</h1>
            {/* header navbar  */}
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/info">Info</a>
                <a href="/profile">Profile</a>
            </nav>
        </div>
    );
};

export default Header;