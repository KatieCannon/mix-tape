import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class MixTapeCreator extends React.Component {
    render(){
        return (
            <div>
                <SearchBar />
                <SearchResults />
                <PlayList />
            </div>
        )
    }
}

export default MixTapeCreator;