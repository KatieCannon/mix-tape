import React from 'react';
import { Router } from '@reach/router';
import Title from '../Title/Title';
import CreateRequest from '../CreateRequest/CreateRequest';
import MixTapes from '../MixTapes/MixTapes';
import MixTapeCreator from '../MixTapeCreator/MixTapeCreator';
import './App.css';

class App extends React.Component {
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Title />
                </header>
                <Router>
                    <CreateRequest path="/" />
                    <MixTapes path="/" />
                    <MixTapeCreator path="/create-mixtape" />
                </Router>
            </div>
        );
    }
}

export default App;