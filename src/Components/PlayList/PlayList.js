import React from 'react';
import './PlayList.css';
import Tracklist from '../TrackList/TrackList';

class PlayList extends React.Component {
    render(){
        return (
            <div className='PlayList'>
                <h1>PlayList</h1>
                <Tracklist tracks={this.props.mixTapeTracks}/>
                </div>
        )
    }
}

export default PlayList;