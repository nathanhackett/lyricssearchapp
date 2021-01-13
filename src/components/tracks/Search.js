import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
class Search extends Component {
    state = {
        trackTitle: ''
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();

        axios
        .get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MY_KEY}`
        )
        .then(res => {
            dispatch({
                type: 'Search_Track',
                payload: res.data.message.body.track_list
            });
            //console.log(res.data);
        })
        .catch(err => console.log(err));
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    // console.log(value);
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music"></i> Search For A Song
                            </h1>
                            <p className="lead text-center">View The Lyrics For Any Song</p>
                            <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                <div>
                                    <input type="text" className="form-control form-control-lg"
                                        placeholder="Song Name.."
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />
                                <button className = "btn btn-primary btn-lg mb-3" type = "submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        );
    };
}
export default Search;