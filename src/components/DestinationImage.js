import React from 'react';
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import "../sass/destinationImage.scss";

const DestinationImage = (props) => {
    const { image } = props;
    console.log(image)
    let imgSrc;

    switch (image) {
        case "moon":
            imgSrc = moon;
            break;
        case "mars":
            imgSrc = mars;
            break;
        case "europa":
            imgSrc = europa;
            break;
        case "titan":
            imgSrc = titan;
            break;
        default:
            break;
    }

    return (
        <img src={imgSrc} className="destImage" />
    )
}

export default DestinationImage
