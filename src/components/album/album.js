import React, { useState, useEffect } from 'react';

import './album.css'
import axios from '../../axios'

const Album = (props) => {

    const [photos, setPhotos] = useState([])

    const getPhotos = () => {
        axios.get('/photos').then(res => {
            setPhotos(res.data.filter(photo => photo.albumId === props.id).slice(0, 3))
        }).catch(err => window.alert(err))
    }

    useEffect(() => {
        getPhotos()
    }, [])

    const coverPhotos = photos.map(photo => {
        return (
            <div className='album-cover-photo' key={photo.id}>
                <img src={photo.url} alt='Cover photo' />
            </div>
        )
    })

    return (
        <div className='album'>
            <h3>Album: {props.title}</h3>
            <div className='album-cover'>
                {coverPhotos}
            </div>
            <p>Show more</p>
        </div>
    );
};

export default Album;