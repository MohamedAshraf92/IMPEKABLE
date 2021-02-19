import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './sideList.css'
import { IoSearchOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'
import axios from '../../axios'
import UserCard from '../../components/userCard/userCard'
import { signOut } from '../../store/actions/loginActions'

const SideList = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [users, setUsers] = useState([])

    const currentUser = useSelector(state => state.loginReducer.user)

    const getUsers = () => {
        axios.get('/users').then(res => {
            setUsers(res.data.filter(user => user.id !== currentUser.id))
        }).catch(err => window.alert(err))
    }

    useEffect(() => {
        getUsers()
    }, [])

    const usersList = users.map(user => {
        return (
            <UserCard 
                key={user.id}
                name={user.name}
                username={user.username}
                id={user.id}
            />
        )
    })

    const signOutHandler = () => {
        const isLogged = false
        dispatch(signOut(isLogged))
        history.replace('/')
    }

    return (
        <div className="bachground-list">
            <div className="side-list">
                <div className="tools-bar">
                    <div className="search">
                        <input type='text' placeholder='Search' />
                        <IoSearchOutline className='icon-list' />
                    </div>
                    <BsBell className='icon-list' />
                    <HiOutlineLogout className='icon-list' onClick={signOutHandler}/>
                </div>
                <div className="text">
                    <h4>People to follow</h4>
                    <p>See all</p>
                </div>
                <div className='people-list'>
                    {usersList}
                </div>
            </div>
        </div>
    );
};

export default SideList;