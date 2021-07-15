import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UsersContainer from "./components/Friend/UsersContainer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginForm from "./components/Login/Login";

const App = (props) => {
    return (
        <div>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route
                        path="/dialogs"//Route используется для маршрутизации между страницами и отрисовки конкретного элемента
                        render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/profile/:userId?"
                           render={() => <MainContainer store={props.store}/>}/>
                    <Route path="/news"
                           render={() => <News store={props.store}/>}/>
                    <Route path="/music"
                           render={() => <Music/>}/>
                    <Route path="/settings"
                           render={() => <Settings/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer users={props.store}/>}/>
                    <Route path="/login"
                           render={() => <LoginForm/>}/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
export default App;