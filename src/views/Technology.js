import React, { useState } from 'react'
import background from '../assets/technology/background-technology-desktop.jpg';
import '../sass/tech.scss';
import '../sass/app.scss';

// Import custom components
import Header from '../components/Header';
import TechnologyImage from '../components/TechnologyImage';
import TechHeading from '../components/TechHeading';
import { tech } from '../techData';

const Technology = () => {
    let [titleState, setTitleState] = useState(tech.launchVehicle.role);
    let [nameState, setNameState] = useState(tech.launchVehicle.name);
    let [descState, setDescState] = useState(tech.launchVehicle.desc);
    let [imageState, setImageState] = useState(tech.launchVehicle.name);

    const switchTechLaunch = () => {
        setTitleState(tech.launchVehicle.role);
        setNameState(tech.launchVehicle.name);
        setDescState(tech.launchVehicle.desc);
        setImageState(tech.launchVehicle.name);
        document.getElementById("1").classList.add("techNumberActive");
        document.getElementById("2").classList.remove("techNumberActive");
        document.getElementById("3").classList.remove("techNumberActive");
    }

    const switchTechSpaceport = () => {
        setTitleState(tech.spaceport.role);
        setNameState(tech.spaceport.name);
        setDescState(tech.spaceport.desc);
        setImageState(tech.spaceport.name);
        document.getElementById("1").classList.remove("techNumberActive");
        document.getElementById("2").classList.add("techNumberActive");
        document.getElementById("3").classList.remove("techNumberActive");
    }

    const switchTechCapsule = () => {
        setTitleState(tech.spaceCapsule.role);
        setNameState(tech.spaceCapsule.name);
        setDescState(tech.spaceCapsule.desc);
        setImageState(tech.spaceCapsule.name);
        document.getElementById("1").classList.remove("techNumberActive");
        document.getElementById("2").classList.remove("techNumberActive");
        document.getElementById("3").classList.add("techNumberActive");
    }

    return (
        <div style={{ height: "100vh", backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
            <Header />
            <TechHeading />
            <h2 className="techTitle">{titleState}</h2>
            <h1 className="techName">{nameState}</h1>
            <p className="techDesc body-text">{descState}</p>
            <TechnologyImage image={imageState} />
            <div className="techNav">
                <button id="1" className="techNumber techNumberActive" onClick={switchTechLaunch}>1</button>
                <button id="2" className="techNumber" onClick={switchTechSpaceport}>2</button>
                <button id="3" className="techNumber" onClick={switchTechCapsule}>3</button>
            </div>
        </div>
    )
}

export default Technology
