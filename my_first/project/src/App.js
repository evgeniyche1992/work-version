import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import Footer from "./components/Footer/Footer";
import UsersContainer from "./components/Friend/UsersContainer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginForm from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import Preloader from './components/Common/Preloader';


class App extends Component  {

componentDidMount(){
    this.props.initializeApp();
}

    render(){
        debugger;
        if(!this.props.initialized){//если приложение не проинициализировалось,то показываем загрузку
return<Preloader/>}



    return (
        <div>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route
                        path="/dialogs"//Route используется для маршрутизации между страницами и отрисовки конкретного элемента
                        render={() => <DialogsContainer />}/>
                    <Route path="/profile/:userId?"
                           render={() => <MainContainer />}/>
                    <Route path="/news"
                           render={() => <News news={this.props.news}/>}/>
                    <Route path="/music"
                           render={() => <Music/>}/>
                    <Route path="/settings"
                           render={() => <Settings/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer />}/>
                    <Route path="/login"
                           render={() => <LoginForm/>}/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}}

const mapStateToProps = (state)=>({
initialized: state.app.initialized,
news:state.newsPage.news,
})
export default compose (//оборачивание  HOC ом (компонентой высшего порядка)
     connect(mapStateToProps, {initializeApp}),
     withRouter)(App);