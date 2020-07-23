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
                name: 'mixTape1 r&b'
            }, {
                id: 2,
                name: 'mixTape2'
            }, {
                id: 3,
                name: 'mixTape3'
            }, {
                id:4,
                name: 'mixTape4 reggae'
            }, {
                id:5,
                name: 'mixTape5'
            }, {
                id: 6,
                name: 'mixTape6'
            }, {
                id: 7,
                name: 'mixTape7'
            }, {
                id: 8,
                name: 'mixTape8'
            }, {
                id: 9,
                name: 'mixTape9'
            }, {
                id: 10,
                name: 'mixTape10'
            }, {
                id: 11,
                name: 'mixTape11'
            }, {
                id: 12,
                name: 'mixTape12'
            }, {
                id: 13,
                name: 'mixTape13'
            }, {
                id: 14,
                name: 'mixTape14'
            }, {
                id: 15,
                name: 'mixTape15'
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
                    <RequestScreen path="/" mixTapes={this.state.mixTapes}/>
                    <MixTapeCreator path="/create-mixtape" />
                </Router>
            </div>
        );
    }
}

export default App;