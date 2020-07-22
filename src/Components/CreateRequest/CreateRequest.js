import React from 'react';
import "./CreateRequest.css"


class CreateRequest extends React.Component {
    render(){
        return <button className="requestButton" onClick={this.props.onCreate}>+ Create me a Spotify mix</button>
    }
}

export default CreateRequest;