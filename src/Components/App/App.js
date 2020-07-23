import React from 'react';
import { Router } from '@reach/router';
import Title from '../Title/Title';
import RequestScreen from '../RequestScreen/RequestScreen';
import MixTapeCreator from '../MixTapeCreator/MixTapeCreator';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mixTapes:[{
                id: 1,
                name: 'mixTape1'
            }, {
                id: 2,
                name: 'mixTape2'
            }]
        }
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Title />
                </header>
                <Router>
                    <RequestScreen path="/" />
                    <MixTapeCreator path="/create-mixtape" />
                </Router>
            </div>
        );
    }
}

export default App;