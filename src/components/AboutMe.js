import React, {Component} from 'react';
import {baseUrl, tenSecond, thirtyDays} from "../utils/constants";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: '',
        };
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.character['name']}</p>
                <p>Height: {this.state.character['height']}</p>
                <p>Birth year: {this.state.character['birth_year']}</p>
                <p>Gender: {this.state.character['gender']}</p>
                <p>Mass: {this.state.character['mass']}</p>
                <p>Hair color: {this.state.character['hair_color']}</p>
                <p>Skin color: {this.state.character['skin_color']}</p>
                <p>Eye color: {this.state.character['eye_color']}</p>
            </div>
        );
    }

    componentDidMount() {
        if (!localStorage.getItem('character') ||
            Date.now() - JSON.parse(localStorage.getItem('character'))['download_date'] > tenSecond) {
            const randomID = Math.floor(Math.random() * 81 + 1);
            fetch(`${baseUrl}peoples/${randomID}`)
                .then(response => response.json())
                .then(data => {
                    data['download_date'] = Date.now();
                    localStorage.setItem('character', JSON.stringify(data));
                    this.setState({character: data});
                });
        } else {
            this.setState({character: JSON.parse(localStorage.getItem('character'))});
        }
    }
}

export default AboutMe;