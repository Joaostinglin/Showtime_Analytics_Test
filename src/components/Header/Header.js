import React from 'react';

import './Header.css';

import Constants from '../../Statics/Constants';

const Header = () =>  {
        return (
            <nav className="header-showtime navbar navbar-expand-lg navbar-light bg-light">
                <img className="logo" src={Constants.showtimeLogo} alt="showtime logo" />
            </nav>
        )
    }

export default Header;