import React from "react";
import background from '../assets/home/background-home-desktop.jpg';

// Import custom components
import Header from '../components/Header';
import Text from '../components/Text';
import Explore from '../components/Explore';

const Home = () => {
    return (
        <div style={{height: "100vh", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <Header />
            <Text />
            <Explore />
        </div>
    )
}

export default Home
