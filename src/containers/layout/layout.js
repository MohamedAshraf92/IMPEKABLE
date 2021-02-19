import React from 'react';

import './layout.css'
import Navbar from '../../components/navbar/navbar'
import SideList from '../../containers/sideList/sideList'

const Layout = (props) => {
    return (
        <div className="layout">
            <Navbar />
            {props.children}
            <SideList />
        </div>
    );
};

export default Layout;