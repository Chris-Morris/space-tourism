import React from 'react';
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import "../sass/technologyImage.scss";

const TechnologyImage = (props) => {
    const { image } = props;
    console.log(image)
    let imgSrc;

    switch (image) {
        case "launch vehicle":
            imgSrc = launchVehiclePortrait;
            break;
        case "launch ladnscape":
            imgSrc = launchVehicleLandscape;
            break;
        case "space capsule":
            imgSrc = spaceCapsulePortrait;
            break;
        case "spaceCap landscape":
            imgSrc = spaceCapsuleLandscape;
            break;
        case "spaceport":
            imgSrc = spaceportPortrait;
            break;
        case "spaceport landscape":
            imgSrc = spaceportLandscape;
            break;
        default:
            imgSrc = launchVehiclePortrait;
            break;
    }

    return (
        <img src={imgSrc} className="image" />
    )
}

export default TechnologyImage
