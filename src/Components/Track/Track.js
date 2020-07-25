import React from 'react';

class Track extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.track.name}</h1>
            </div>
        )
    }
}

export default Track;