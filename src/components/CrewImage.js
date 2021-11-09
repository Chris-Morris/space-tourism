import React from 'react';
import dHurley from "../assets/crew/image-douglas-hurley.png";
import mShuttleworth from "../assets/crew/image-mark-shuttleworth.png";
import vGlover from "../assets/crew/image-victor-glover.png";
import aAnsari from "../assets/crew/image-anousheh-ansari.png";
import "../sass/crewImage.scss";

const CrewImage = (props) => {
    const { image } = props;
    console.log(image)
    let imgSrc;

    switch (image) {
        case "douglas hurley":
            imgSrc = dHurley;
            break;
        case "mark shuttleworth":
            imgSrc = mShuttleworth;
            break;
        case "victor glover":
            imgSrc = vGlover;
            break;
        case "anousheh ansari":
            imgSrc = aAnsari;
            break;
        default:
            break;
    }

    return (
        <img src={imgSrc} className="image" />
    )
}

export default CrewImage
