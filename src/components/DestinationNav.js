import React from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/destinationNav.scss';

const DestinationNav = () => {
    return (
        <div className="descNav">
            <ul >
                <NavLink className="destNav" to="/destination/moon"><li>MOON</li></NavLink>
                <NavLink className="destNav" to="/destination/mars"><li>MARS</li></NavLink>
                <NavLink className="destNav" to="/destination/europa"><li>EUROPA</li></NavLink>
                <NavLink className="destNav" to="/destination/titan"><li>TITAN</li></NavLink>
            </ul>
        </div>
    )
}

export default DestinationNav
