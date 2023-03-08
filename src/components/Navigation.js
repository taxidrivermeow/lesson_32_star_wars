import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul className="position-fixed list-unstyled d-inline">
                <li className="border border-light rounded-pill btn btn-danger">Home</li>
                <li className="border border-light rounded-pill btn btn-danger">About me</li>
                <li className="border border-light rounded-pill btn btn-danger">Star wars</li>
                <li className="border border-light rounded-pill btn btn-danger">Contact</li>
            </ul>
        </nav>
    );
};

export default Navigation;
