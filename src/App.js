import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import LoginPage from './containers/loginPage/loginPage'
import Layout from './containers/layout/layout'
import Home from './containers/home/home'
import Albums from './containers/albums/albums'
import Todos from './containers/todos/todos'
import Profile from './containers/profile/profile'

function App() {

    const isLogged = useSelector(state => state.loginReducer.isLogged)

    return (
        <div className="App">
            <Switch>
                <Route exact path='/'>
                    { isLogged? <Redirect to='/home' /> : <LoginPage /> }
                </Route>
                <Layout>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/albums' component={Albums} />
                    <Route exact path='/todos' component={Todos} />
                    <Route exact path='/user/:id' component={Profile} />
                </Layout>
            </Switch>
        </div>
    );
}

export default App;
