import React from 'react';
import './PlayList.css';
import Tracklist from '../TrackList/TrackList';

class PlayList extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSaveMixTape = this.handleSaveMixTape.bind(this);
        this.canMixTapeBeSaved = this.canMixTapeBeSaved.bind(this);
    }
    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }
    canMixTapeBeSaved(){
        return this.props.mixTapeName.length > 0;
    }
    handleSaveMixTape(event){
        if(!this.canMixTapeBeSaved()){
            event.preventDefault();
        } else {
            this.props.onSave();
        }
    }
    render(){
        const mixTapeName = this.props.mixTapeName;
        const isEnabled = mixTapeName.length > 0;
        return (
            <div className='PlayList'>
                 <input value={this.props.mixTapeName} placeholder="mixTape name" onChange={this.handleNameChange}/>
                <Tracklist tracks={this.props.mixTapeTracks} onRemove={this.props.onRemove} isRemoval={true} />
                <div className="Playlist-save-div">
                    <button className="Playlist-save" onClick={this.handleSaveMixTape} disabled={!isEnabled}>SAVE TO SPOTIFY</button>
                </div>
            </div>
        )
    }
}

export default PlayList;