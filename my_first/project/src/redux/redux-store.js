import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    mainPage: profileReducer,
    messagePage: dialogReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;