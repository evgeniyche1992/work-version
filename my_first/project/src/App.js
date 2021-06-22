import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UsersContainer from "./components/Friend/UsersContainer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
      return (
        <div>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <Dialogs store={props.store}/>}/>
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
                </div>
                <Footer/>
            </div>
        </div>
    );
}
export default App;