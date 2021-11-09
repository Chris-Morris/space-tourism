import React from 'react'
import background from '../assets/technology/background-technology-desktop.jpg';

// Import custom components
import Header from '../components/Header';
import Text from '../components/Text';

const Technology = () => {
    return (
        <div style={{height: "100vh", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <Header />
            <Text />
        </div>
    )
}

export default Technology
