import React, { useState, useEffect } from 'react';

import './profile.css'
import cover from '../../assets/cover.png'
import profilePic from '../../assets/profile-pic.png'
import axios from '../../axios'
import { IoMdImages } from 'react-icons/io'
import { FaUserTag } from 'react-icons/fa'
import { FcTodoList } from 'react-icons/fc'
import PostCard from '../../components/postCard/postCard'
import Album from '../../components/album/album'

const Profile = (props) => {

    const visitedUserID =  props.match.params.id

    const [visitedUser, setVisitedUser] = useState([])
    const [visitedPosts, setVisitedPosts] = useState([])
    const [albums, setAlbums] = useState([])

    const getUser = () => {
        axios.get(`/users/${visitedUserID}`).then(res => {
            setVisitedUser(res.data)
        }).catch(err => window.alert(err))
    }

    const getPosts = () => {
        axios.get('/posts').then(res => {
            setVisitedPosts(res.data.filter(post => post.userId === visitedUserID))
        }).catch(err => window.alert(err))
    }

    const getAlbums = () => {
        axios.get('/albums').then(res => {
            setAlbums(res.data.filter(album => album.userId === visitedUserID))
        }).catch(err => window.alert(err))
    }

    useEffect(() => {
        getUser()
        getPosts()
        getAlbums()
    }, [])

    const renderPosts = visitedPosts.map(post => {
        return (
            <PostCard 
                key={post.id}
                name={visitedUser.name}
                body={post.body}
            />
        )
    })

    const renderAlbums = albums.map(album => {
        return (
            <Album 
                key={album.id}
                id={album.id}
                title={album.title}
            />
        )
    })

    return (
        <div className='background-profile'>
            <div className='profile'>
                <div className='cover'>
                    <img src={cover} alt='cover' />
                </div>
                <div className='profile-pic'>
                    <img src={profilePic} alt='profile picture' />
                </div>
                <h3>{visitedUser.name}</h3>
                <div className='tabs'>
                    <div className='tab'>
                        <IoMdImages className='icon-tab-photos' /> &nbsp; <p>Photo/Video</p>
                    </div>
                    <div className='tab'>
                        <FaUserTag className='icon-tab-posts' /> &nbsp; <p>Posts</p>
                    </div>
                    <div className='tab'>
                        <FcTodoList className='icon-tab-todos' /> &nbsp; <p>To-dos</p>
                    </div>
                </div>
                <div className='render-component'>
                    <div className='render-posts'>
                        {renderPosts}
                    </div>
                    <div className='render-albums'>
                        {renderAlbums}
                    </div>
                    <div className='render-todos'>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Profile;
// {componentToRender}