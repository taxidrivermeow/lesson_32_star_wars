import React from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

const Main = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </main>
    );
};

export default Main;
