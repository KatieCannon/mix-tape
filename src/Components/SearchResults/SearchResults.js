import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className='SearchResults'>
            <h1>Results</h1>
            <TrackList tracks={props.searchResults} />
        </div>
    )
}

export default SearchResults;