import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './home.css'
import Stories from '../../components/stories/stories'
import axios from '../../axios'
import PostCard from '../../components/postCard/postCard'

const Home = () => {

    const user = useSelector(state => state.loginReducer.user)

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        axios.get('/posts').then(res => {
            setPosts(res.data.filter(post => post.userId === user.id))
        }).catch(err => window.alert(err))
    }

    useEffect(() => {
        getPosts()
    }, [])

    const postCards = posts.map(post => {
        return (
            <PostCard 
                key={post.id}
                name={user.name}
                body={post.body}
            />
        )
    })

    return (
        <div className='background-home'>
            <div className='home'>
                <Stories />
                <h3>My Posts</h3>
                {postCards}
            </div>
        </div>
    );
};

export default Home;