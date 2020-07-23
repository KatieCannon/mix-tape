import React from 'react';
import './MixTape.css';

class MixTape extends React.Component {
    render(){
        return (
        <div className='mixTape'>
            <h1>{this.props.name}</h1>
        </div>
        )
    }
}

export default MixTape;