import React from 'react';
import CreateRequest from '../CreateRequest/CreateRequest';
import MixTapes from '../MixTapes/MixTapes';

class RequestScreen extends React.Component {
    render(){
        return (
            <div>
                <CreateRequest />
                <MixTapes mixTapes={this.props.mixTapes}/>
            </div>
        )
    }
}

export default RequestScreen;