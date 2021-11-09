import React, { useState } from 'react';
import background from '../assets/crew/background-crew-desktop.jpg';
import '../sass/crew.scss';
import '../sass/app.scss';

// Import custom components
import Header from '../components/Header';
import CrewHeading from '../components/CrewHeading';
import CrewImage from '../components/CrewImage';
import { crew } from '../crewData';

const Crew = () => {
    let [titleState, setTitleState] = useState(crew.doug.role);
    let [nameState, setNameState] = useState(crew.doug.name);
    let [descState, setDescState] = useState(crew.doug.desc);
    let [imageState, setImageState] = useState(crew.doug.name);

    const switchCrewDoug = () => {
        setTitleState(crew.doug.role);
        setNameState(crew.doug.name);
        setDescState(crew.doug.desc);
        setImageState(crew.doug.name);
    }

    const switchCrewMark = () => {
        setTitleState(crew.mark.role);
        setNameState(crew.mark.name);
        setDescState(crew.mark.desc);
        setImageState(crew.mark.name);
    }

    const switchCrewVictor = () => {
        setTitleState(crew.victor.role);
        setNameState(crew.victor.name);
        setDescState(crew.victor.desc);
        setImageState(crew.victor.name);
    }

    const switchCrewAnousheh = () => {
        setTitleState(crew.anousheh.role);
        setNameState(crew.anousheh.name);
        setDescState(crew.anousheh.desc);
        setImageState(crew.anousheh.name);
    }

    return (
        <div style={{ height: "100vh", backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
            <Header />
            <CrewHeading />
            <h2 className="crewTitle">{titleState}</h2>
            <h1 className="crewName">{nameState}</h1>
            <p className="crewDesc body-text">{descState}</p>
            <CrewImage image={imageState} />
            <div className="crewNav">
                <button className="dot" onClick={switchCrewDoug}></button>
                <button className="dot" onClick={switchCrewMark}></button>
                <button className="dot" onClick={switchCrewVictor}></button>
                <button className="dot" onClick={switchCrewAnousheh}></button>
            </div>
        </div>
    )
}

export default Crew
