import React, { Component } from 'react'
import { Consumer } from '../../context' //https://reactjs.org/docs/context.html
import Spinner from '../layout/spinner' //loading symbol
import Track from '../tracks/Track'

class Tracks extends Component {
    render() {
        return (
            // <div> 
            //     <h1>Tracks</h1>
            // </div
            <Consumer>
                {value => {
                    console.log(value);
                    // return <h1>Tracks</h1>;
                    const { track_list, heading } = value;
                    if (track_list === undefined || track_list.length === 0) {
                        return <Spinner />;
                    } else {
                        //return <h1>Tracks Loaded</h1>;
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className="row">
                                    {track_list.map(item => (
                                        <Track key={item.track.track_id} track={item.track} />
                                    ))}
                                </div>
                            </React.Fragment>
                        );
                    }
                }}
            </Consumer>
        );
    }
}
export default Tracks;