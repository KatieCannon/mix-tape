import React from 'react';
import './PlayList.css';
import Tracklist from '../TrackList/TrackList';

class PlayList extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    render(){
        return (
            <div className='PlayList'>
                 <input value={this.props.mixTapeName} placeholder="mixTape name" onChange={this.handleNameChange}/>
                <Tracklist tracks={this.props.mixTapeTracks} onRemove={this.props.onRemove} isRemoval={true} />
                <div className="Playlist-save-div">
                    <button className="Playlist-save"onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
                </div>
            </div>
        )
    }
}

export default PlayList;