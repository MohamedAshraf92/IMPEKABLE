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
import Todo from '../../components/todo/todo'

const Profile = (props) => {

    const visitedUserID =  parseInt(props.match.params.id)

    const [visitedUser, setVisitedUser] = useState([])
    const [posts, setPosts] = useState([])
    const [albums, setAlbums] = useState([])
    const [todos, setTodos] = useState([])
    const [renderedComponent, setRenderedComponent] = useState(null)

    const getUser = () => {
        axios.get(`/users/${visitedUserID}`).then(res => {
            setVisitedUser(res.data)
        }).catch(err => window.alert(err))
    }

    const getPosts = () => {
        axios.get('/posts').then(res => {
            setPosts(res.data.filter(post => post.userId === visitedUserID))
        }).catch(err => window.alert(err))
    }

    const getAlbums = () => {
        axios.get('/albums').then(res => {
            setAlbums(res.data.filter(album => album.userId === visitedUserID))
        }).catch(err => window.alert(err))
    }

    const getTodos = () => {
        axios.get('/todos').then(res => {
            setTodos(res.data.filter(album => album.userId === visitedUserID))
        }).catch(err => window.alert(err))
    }

    useEffect(() => {
        getUser()
        getPosts()
        getAlbums()
        getTodos()
    }, [])
    
    useEffect(() => {
        setRenderedComponent(renderAlbums)
    }, [albums])
    
    const renderPosts = posts.map(post => {
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

    const renderTodos = todos.map(todo => {
        return(
            <Todo key={todo.id} title={todo.title} />
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
                <h2>{visitedUser.name}</h2>
                <div className='tabs'>
                    <div className='tab' onClick={() => setRenderedComponent(renderAlbums)}>
                        <IoMdImages className='icon-tab-photos' /> &nbsp; <p>Photo/Video</p>
                    </div>
                    <div className='tab' onClick={() => setRenderedComponent(renderPosts)}>
                        <FaUserTag className='icon-tab-posts' /> &nbsp; <p>Posts</p>
                    </div>
                    <div className='tab' onClick={() => setRenderedComponent(renderTodos)}>
                        <FcTodoList className='icon-tab-todos' /> &nbsp; <p>To-dos</p>
                    </div>
                </div>
                <div className='rapper'>
                    {renderedComponent}
                </div>
            </div>
        </div>
    );
};

export default Profile;