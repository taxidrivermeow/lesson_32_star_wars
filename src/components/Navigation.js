import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";

const Navigation = (props) => {
    return (
        <nav>
            <ul className="position-fixed list-unstyled d-inline">
                <li onClick={() => props.changePage(homePage)} className="border border-light rounded-pill btn btn-danger">Home</li>
                <li onClick={() => props.changePage(aboutMePage)} className="border border-light rounded-pill btn btn-danger">About me</li>
                <li onClick={() => props.changePage(starWarsPage)} className="border border-light rounded-pill btn btn-danger">Star wars</li>
                <li onClick={() => props.changePage(contactPage)} className="border border-light rounded-pill btn btn-danger">Contact</li>
            </ul>
        </nav>
    );
};

export default Navigation;
