import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './albums.css'
import Stories from '../../components/stories/stories'
import axios from '../../axios'
import Album from '../../components/album/album'

const Albums = () => {

    const user = useSelector(state => state.loginReducer.user)

    const [albums, setAlbums] = useState([])

    const getAlbums = () => {
        axios.get('/albums').then(res => {
            setAlbums(res.data.filter(album => album.userId === user.id))
        }).catch(err => window.alert(err))
    }

    useEffect(() => {
        getAlbums()
    }, [])

    const albumsList = albums.map(album => {
        return (
            <Album 
                key={album.id}
                id={album.id}
                title={album.title}
            />
        )
    })

    return (
        <div className='background-albums'>
            <div className='albums'>
                <Stories />
                <h3>My Albums</h3>
                {albumsList}
            </div>
        </div>
    );
};

export default Albums;