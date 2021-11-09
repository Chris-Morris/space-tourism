import React from 'react'
import background from '../assets/destination/background-destination-desktop.jpg';

// Import custom components
import Header from '../components/Header';
import DestinationHeading from '../components/DestinationHeading';
import DestinationImage from '../components/DestinationImage';
import DestinationDesc from '../components/DestinationDesc';

const Destination = () => {
    const image = "mars";
    const descProps = {
        title: "moon",
        body: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        stats: [
            {
                desc: "avg. distance",
                stat: "384,400 km"
            },
            {
                desc: "est. travel time",
                stat: "3 days"
            }
        ]
    }
    return (
        <div style={{height: "100vh", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <Header />
            <DestinationHeading />
            <DestinationImage image={image} />
            <DestinationDesc descProps={descProps} />
        </div>
    )
}

export default Destination

