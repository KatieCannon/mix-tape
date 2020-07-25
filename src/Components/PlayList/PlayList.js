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
                 <input placeholder="mixTape name" onChange={this.handleNameChange}/>
                <Tracklist tracks={this.props.mixTapeTracks} onRemove={this.props.onRemove} isRemoval={true} />
                </div>
        )
    }
}

export default PlayList;