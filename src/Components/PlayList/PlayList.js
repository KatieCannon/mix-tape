import React from 'react';
import './PlayList.css';

class PlayList extends React.Component {
    render(){
        return (
            <div className='PlayList'>
                <h1>PlayList</h1>
                {this.props.mixTapeTracks.map(track => {
                    console.log(track);
                    return <h1>{track.name}</h1>
                })}
                </div>
        )
    }
}

export default PlayList;