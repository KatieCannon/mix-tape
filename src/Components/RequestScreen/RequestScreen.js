import React from 'react';
import CreateRequest from '../CreateRequest/CreateRequest';
import MixTapes from '../MixTapes/MixTapes';

const RequestScreen = (props) => {
    return (
        <div>
            <CreateRequest />
            <MixTapes mixTapes={props.mixTapes} />
        </div>
    )
}


export default RequestScreen;