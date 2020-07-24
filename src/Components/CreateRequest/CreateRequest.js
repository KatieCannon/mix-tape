import React from 'react';
import { Link } from '@reach/router';
import "./CreateRequest.css"


const CreateRequest = () => {
    return (
       <Link 
        to = {'/create-mixtape'} 
        className="requestButton"
        >+ Create me a Spotify mix</Link>
    )
}

export default CreateRequest;