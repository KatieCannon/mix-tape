import React from 'react';
import { Router } from '@reach/router';
import Title from '../Title/Title';
import RequestScreen from '../RequestScreen/RequestScreen';
import MixTapeCreator from '../MixTapeCreator/MixTapeCreator';
import './App.css';
import Spotify from '../../utils/Spotify';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mixTapes: [] }
        this.getPlayLists = this.getPlayLists.bind(this);
    }
    componentDidMount() {
        this.setMixTapesState();
    }
    setMixTapesState() {
        return this.getPlayLists();
    }
    async getPlayLists() {
        const playLists = await Spotify.getMyPlayLists();
        this.setState({
            mixTapes: playLists
        });
    }
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <Title />
                </header>
                <Router>
                    <RequestScreen path='/' mixTapes={this.state.mixTapes} />
                    <MixTapeCreator path='/create-mixtape' />
                </Router>
            </div>
        );
    }
}

export default App;