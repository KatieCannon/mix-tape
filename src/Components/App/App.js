import React from 'react';
import Title from '../Title/Title';
import CreateRequest from '../CreateRequest/CreateRequest';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            create: false
        }
        this.hideCreateRequest = this.hideCreateRequest.bind(this);
    } 
    hideCreateRequest(){
        this.setState({
            create: true
        });
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <Title />
                </header>
                {!this.state.create ? <CreateRequest onCreate={this.hideCreateRequest}/> : <></>}
            </div>
        );
    }
}

export default App;