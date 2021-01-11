import React from 'react'
import { Link } from 'react-router-dom'

const Track = (props) => {
    const { track } = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h4>{track.track_name} {track.explicit === 0 ? '' : '[Explicit]'}</h4>
                    <p className="card-text">
                        <strong>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"></path>
                            </svg>
                             Artist
                        </strong>: {track.artist_name}
                        <br />
                        <strong>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-music-note-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"></path>
                                <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"></path>
                                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"></path>
                                <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"></path>
                            </svg> Album
                        </strong>: {track.album_name}
                    </p>
                    <Link to = {`lyrics/track/${track.track_id}`} className = "btn btn-secondary">
                        View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Track;