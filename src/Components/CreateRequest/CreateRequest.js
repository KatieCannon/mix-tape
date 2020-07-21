import React from 'react';


class CreateRequest extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <button onClick={this.props.onCreate}>+</button>
                <h2>Create me a mix-tape</h2>
            </div>
        );
    }
}

export default CreateRequest;