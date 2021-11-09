import React from 'react';
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
            <div className="explore">
                <h1 className="explore-text">EXPLORE</h1>
            </div>
            <div id="explore-hover"></div>
        </>
    )
}

export default Explore
