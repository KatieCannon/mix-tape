import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import './MixTapeCreator.css';
import Spotify from '../../utils/Spotify';

class MixTapeCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults:[],
            mixTapeTracks:[],
            playListName:''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.removeFromSearchResults = this.removeFromSearchResults.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }
    async handleSearch(term) {
        const searchResults = await Spotify.search(term);
        const mixTapeTrackIds = this.state.mixTapeTracks.map(track => track.id);
        const filteredSearchResults = searchResults.filter(searchListTrack => {
        return !mixTapeTrackIds.includes(searchListTrack.id);
    });
        this.setState({searchResults: filteredSearchResults});
    }
    addTrack(track){
        const tracks = this.state.mixTapeTracks;
        tracks.push(track);
        this.setState({
            mixTapeTracks: tracks
        });
    }
    removeTrack(track) {
        const tracks = this.state.mixTapeTracks.filter(mixTapeTrack =>  mixTapeTrack.id !== track.id);
        this.setState({
          mixTapeTracks: tracks
        });
      }
      removeFromSearchResults(trackId){
        const filteredSearchResults=this.state.searchResults.filter(searchListTrack => {
          return searchListTrack.id !== trackId;
        });
        this.setState({
          searchResults: filteredSearchResults
        });
    }
    updatePlaylistName(name){
        this.setState({
          playListName: name
        });
      }
    render(){
        return (
            <div>
                <SearchBar onSearch={this.handleSearch} />
                <div className='MixTapeCreator'>
                    <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onRemoveFromSearchResults={this.removeFromSearchResults} />
                    <PlayList mixTapeTracks={this.state.mixTapeTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
                </div>
            </div>
        )
    }
}

export default MixTapeCreator;