import React from 'react';
import "../sass/destinationDesc.scss";

// Import Components
import DestinationNav from './DestinationNav';

const DestinationDesc = (props) => {
    console.log(props)
    let { title } = props.descProps;
    let { body } = props.descProps;
    let { stats } = props.descProps;

    return (
        <div className="container">
            <DestinationNav />
            <div className="title">
                {title}
            </div>
            <div className="descBody">
                <p>{body}</p>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default DestinationDesc
