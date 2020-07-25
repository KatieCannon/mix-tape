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
            searchResults:[]
        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    async handleSearch(term) {
        const searchResults = await Spotify.search(term);
        this.setState({searchResults: searchResults});
    }
    render(){
        return (
            <div>
                <SearchBar onSearch={this.handleSearch} />
                <div className='MixTapeCreator'>
                    <SearchResults searchResults={this.state.searchResults} />
                    <PlayList />
                </div>
            </div>
        )
    }
}

export default MixTapeCreator;