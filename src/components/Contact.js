import React, {Component} from 'react';
import {baseUrl, tenSecond} from "../utils/constants";
import "./Contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name..."/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name..."/>
                    <label htmlFor="planet">Planets</label>
                    <select id="planet" name="planet">
                        {
                            (this.state.planets)?
                                this.state.planets.map((planet, index) => {
                                    const value = planet.replace(/ /g,'').toLowerCase();
                                    return <option key={index} value={value}>{planet}</option>
                                }):
                                ''
                        }
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something..."></textarea>
                    <input className={'border border-light rounded-pill btn btn-danger'} type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

    componentDidMount() {
        if (!localStorage.getItem('planetsData') ||
            Date.now() - JSON.parse(localStorage.getItem('planetsData'))['download_date'] > tenSecond) {
                fetch(`${baseUrl}planets`)
                    .then(response => response.json())
                    .then(data => {
                        const planets = [];
                        data.forEach(planet => {
                            planets.push(planet.name);
                        });

                        const planetsData = {
                            planets: planets,
                            download_date: Date.now(),
                        }
                        this.setState(planetsData);
                        localStorage.setItem('planetsData', JSON.stringify(planetsData));
                    });
        } else {
            this.setState(JSON.parse(localStorage.getItem('planetsData')));
        }
    }
}

export default Contact;