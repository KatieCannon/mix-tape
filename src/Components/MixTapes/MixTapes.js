import React from 'react';
import './MixTapes.css';
import MixTape from '../MixTape/MixTape';

class MixTapes extends React.Component {
    render(){
        return (
            <div>
                {this.props.mixTapes.map(mix =>{
                    return <MixTape key={mix.id} name={mix.name}/>})}
            </div>
        )
    }
}

export default MixTapes;