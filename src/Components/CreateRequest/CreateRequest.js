import React from 'react';
import "./CreateRequest.css"


class CreateRequest extends React.Component {
    render(){
        return (
            <div className="requestForMixTape">
                <button onClick={this.props.onCreate}>+</button>
                <h2>Create me a mix-tape</h2>
            </div>
        );
    }
}

export default CreateRequest;