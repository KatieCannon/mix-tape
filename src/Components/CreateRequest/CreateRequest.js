import React from 'react';
import { Link } from '@reach/router';
import "./CreateRequest.css"


class CreateRequest extends React.Component {
    render(){
        return (
       <Link 
            to = {'/create-mixtape'} 
            className="requestButton"
            >+ Create me a Spotify mix</Link>
        )
    }
}

export default CreateRequest;