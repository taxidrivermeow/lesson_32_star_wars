import React from 'react';
import Navigation from "./Navigation";

const Header = (props) => {
    return (
        <header className="rounded-top">
            <Navigation changePage={props.changePage}/>
            <h1 className="text-center pt-5 pb-3">Luke Skywalker</h1>
        </header>
    );
};

export default Header;
