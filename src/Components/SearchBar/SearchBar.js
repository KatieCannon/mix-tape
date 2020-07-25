import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }
    render(){
        return (
            <div className='SearchBar'>
                <input placeholder='Enter a Song, Album, or Artist' onChange={this.handleTermChange}/>
                <button className='SearchButton'>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;
