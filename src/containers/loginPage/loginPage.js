import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import './loginPage.css'
import Banner from '../../assets/banner.png'
import axios from '../../axios'
import { login } from '../../store/actions/loginActions'

const LoginPage = () => {

    const dispatch = useDispatch()

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    const loginHandler = () => {
        axios.get('/users').then(res => {
            const user = res.data.find(user => user.username.toLowerCase() === enteredUsername.toLowerCase())
            const password = user.address.zipcode.toLowerCase() === enteredPassword.toLocaleLowerCase()
            if (user && password) {
                const isLogged = true
                dispatch(login(user, isLogged))
            } else {window.alert('User dosen\'t exist')}
        }).catch(err => window.alert(err))
    }

    return (
        <div className="login-page">
            <div className="banner">
                <img src={Banner} alt="page banner" />
            </div>
            <div className="login-form">
                <div className="form-body">
                    <h1>IMPEKABLE</h1>
                    <p>Welcome back! Please login to your account.</p>
                    <div className='form-row'>
                        <label>Username</label>
                        <input type="text" value={enteredUsername} onChange={event => setEnteredUsername(event.target.value)} />
                    </div>
                    <div className='form-row'>
                        <label>Password</label>
                        <input type="password" value={enteredPassword} onChange={event => setEnteredPassword(event.target.value)} />
                    </div>
                    <div className='under-from'>
                        <div>
                            <input type="checkbox" defaultChecked/>
                            <label>Remember me</label>
                        </div>
                        <a>Forgot Password</a>
                    </div>
                    <div className="form-btns">
                        <button className="login-btn" onClick={loginHandler}>Login</button>
                        <button className="sing-up-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage