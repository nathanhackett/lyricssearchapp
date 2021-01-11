import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../layout/spinner'
import { Link } from 'react-router-dom'

class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    };

    componentDidMount() {
        //get lyrics
        axios.get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MY_KEY}`
            )
            .then(res => {
                //console.log(res.data); //test
                this.setState({ lyrics: res.data.message.body.lyrics }); //update lyrics state array to fill it with the song's lyrics
            })
                //get track info
                return axios.get(
                        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MY_KEY}`
                    )
                    .then(res => {
                        //console.log(res.data); //test
                        this.setState({ track: res.data.message.body.track }); //update track state array to fill it with track info
                    })
                    .catch(err => console.log(err));
    }
     

    render() {
        const { track, lyrics } = this.state; //assign track and lyrics variables to this.state
        //check that object is not empty
        if (
            track === undefined ||
            lyrics === undefined ||
            Object.keys(track).length === 0 ||
            Object.keys(lyrics).length === 0
        ) {
            return <Spinner /> //show loading spinner if/while nothing is returned
        } else {
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-secondary">Return to Home</Link>
                    <br/>
                    <div className="card">
                        <h3 className="card-header">
                            {track.track_name}
                            <br/>
                            <span className="text-secondary">{track.artist_name}</span>
                        </h3>
                        <div className="card-body">
                            <p className="card-text">
                                {lyrics.lyrics_body}
                            </p>
                        </div>
                    </div>

                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Album ID</strong>: {track.album_id}
                        </li>
                        <li className="list-group-item">
                            <strong>Song Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                        </li>
                        <li className="list-group-item">
                            <strong>Explicit</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
                        </li>
                        <li className="list-group-item">
                            <strong>Release Date</strong>: {track.updated_time}
                        </li>
                    </ul>
                </React.Fragment>
            )
        }
    }
}
export default Lyrics;