import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import './MixTapeCreator.css';

class MixTapeCreator extends React.Component {
    render(){
        return (
            <div>
                <SearchBar />
                <div className='MixTapeCreator'>
                    <SearchResults />
                    <PlayList />
                </div>
            </div>
        )
    }
}

export default MixTapeCreator;