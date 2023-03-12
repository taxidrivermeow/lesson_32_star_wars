import React, {Component} from 'react';
import {baseUrl} from "../utils/constants";

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            opening_crawl: 'Loading...',
        };
    }

    componentDidMount = () => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({
                isLoading: false,
                opening_crawl: opening_crawl,
            });
        } else {
            let episode = Math.floor(Math.random() * 5 + 1);
            fetch(`${baseUrl}films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                    this.setState({
                        isLoading: false,
                        opening_crawl: data.opening_crawl,
                    });
                });
        }
    }

    render() {
        return (this.state.isLoading ?
                <p className={'p-1'}>Loading...</p> :
                <p className={'p-1'}>{this.state.opening_crawl}</p>
        );
    }
}

export default FarGalaxy;

//setItem(key, value);
//getItem(key);
//removeItem(key);
//clear();
//key(index);
//length