import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
        <div>
            <img
                src={spinner} /* https://flevix.com/bar-preloader-image-gif-2/ */
                alt="Loading..."
                style={{ width: '200px', margin: '40px auto', display: 'block'}}
            />
        </div>
    )
}

