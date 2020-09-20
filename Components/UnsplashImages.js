import React from 'react'
import './UnsplashImages.css'

function UnsplashImages({key,url}) {
    return (
        <div>
            <img src={url} key={key} alt={key}/>
        </div>
    )
}

export default UnsplashImages
