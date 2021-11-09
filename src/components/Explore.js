import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/explore.scss';

const Explore = () => {
    // document.querySelector(".explore").addEventListener('mouseover', () => {
    //     document.getElementById("explore-hover").classList.add("explore-hover");
    // })

    // document.querySelector(".explore").addEventListener('mouseout', () => {
    //     document.getElementById("explore-hover").classList.remove("explore-hover");
    // })

    return (
        <>
            <Link to="/destination"><div className="explore">
                <h1 className="explore-text">EXPLORE</h1>
            </div>
            </Link>
            <div id="explore-hover"></div>
        </>
    )
}

export default Explore
