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
            mixTapeTracks:[]
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.addTrack = this.addTrack.bind(this);
    }
    async handleSearch(term) {
        const searchResults = await Spotify.search(term);
        this.setState({searchResults: searchResults});
    }
    addTrack(track){
        const tracks = this.state.mixTapeTracks;
        tracks.push(track);
        this.setState({
            mixTapeTracks: tracks
        });
    }
    render(){
        return (
            <div>
                <SearchBar onSearch={this.handleSearch} />
                <div className='MixTapeCreator'>
                    <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                    <PlayList mixTapeTracks={this.state.mixTapeTracks} />
                </div>
            </div>
        )
    }
}

export default MixTapeCreator;