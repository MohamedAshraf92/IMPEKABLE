import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'
import Logo from '../../assets/logo.png'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { IoBookmarksOutline } from 'react-icons/io5'
import { BsDash } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="brand">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="nav-items">
                <NavLink to='/home' className='link-nav' activeClassName="active-link">
                    <AiFillHome className='icon-nav'/>
                </NavLink>
                <NavLink to='/albums' className='link-nav' activeClassName="active-link">
                    <AiOutlineUser className='icon-nav' />
                </NavLink>
                <NavLink to='/todos' className='link-nav' activeClassName="active-link">
                    <IoBookmarksOutline className='icon-nav' />
                </NavLink>
                <BsDash className='icon-nav' />
                <FiSettings className='icon-nav' />
            </div>
        </div>
    );
};

export default Navbar;
