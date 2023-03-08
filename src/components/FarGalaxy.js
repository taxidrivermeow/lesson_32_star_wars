import React, {Component} from 'react';

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Loading...'};
    }

    getRandom = (min, max) => {
        max++;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    getRandomText = async (id) => {
        const res = await fetch(`https://sw-info-api.herokuapp.com/v1/films/${id}`);
        return await res.json();
    }

    componentDidMount= async () => {
        const data = await this.getRandomText(this.getRandom(1, 6));
        this.setState({text: data['opening_crawl']});
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default FarGalaxy;