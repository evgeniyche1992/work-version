import { stopSubmit } from "redux-form";
import {authAPI, securityAPI} from "../api/api";

const SET_CAPTCHA = 'SET_CAPTCHA';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false, //если залогинен , то неоьходимо для высвечивания имени
    photo: null,
    captcha: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,//дублируем стэйт
                ...action.payload,//дублируем и склеиваем экшн вместе со стейтом, данные пришедгие с сервера
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.userPhoto,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.securityCaptcha,
            }
        default:
            return state;
    }
}
export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, userPhoto: photo});
export const setSecurityCaptcha = (captcha) => ({type: SET_CAPTCHA, securityCaptcha: captcha});

export const authority = () =>(dispatch)=> {
     
     return   authAPI.authorized() //бязательно ставим return, для того чтобы пришли промисы, где дальше исполбзую в app-reducer для выполнения инициализации приложения
     .then(
            data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setUserData(id, email, login, true));
                                    }
            });
    
}
export const logIn = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.logIN(email, password, rememberMe).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(authority())
                }else{
                    let messageError = data.messages.length>0?data.messages[0]:"Some error";
                    dispatch(stopSubmit("login",{_error:messageError}));
                }
            });
    }
}
export const logOut = () => {
    return (dispatch) => {
        authAPI.logOUT().then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            });
    }
}

export default authReducer;

