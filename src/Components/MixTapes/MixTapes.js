import React from 'react';
import './MixTapes.css';
import MixTape from '../MixTape/MixTape';

const MixTapes = () => {
        return (
            <div className='mixTapes'>
                {this.props.mixTapes.map(mix => {
                    return <MixTape key={mix.id} name={mix.name} />
                    
                })}
            </div>
        )
}

export default MixTapes;