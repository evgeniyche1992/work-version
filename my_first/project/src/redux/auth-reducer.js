import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
  userId:null,
    email:null,
    login:null,
    isAuth:false, //если залогинен , то неоьходимо для высвечивания имени
    photo:null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,//дублируем стэйт
                ...action.data,//дублируем и склеиваем экшн вместе со стейтом, данные пришедгие с сервера
                isAuth:true,
            }
        case SET_USER_PHOTO:
                     return{
                ...state,
                photo:action.userPhoto,
                isAuth:true,
            }

        default:
            return state;
    }
}
export const setUserData = (userId,email,login) => ({type: SET_USER_DATA,data:{userId,email,login}});
export const setUserPhoto=(photo)=>({type:SET_USER_PHOTO,userPhoto:photo});

export const authority = (userId) => {
    return (dispatch) => {
        authAPI.authorized().then(
            data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                   dispatch(setUserData(id, email, login));
                    authAPI.getUserPhoto(userId).then(photos => {
                        dispatch(setUserPhoto(photos.small));
                    });
                }
            });
    }
}



export default authReducer;

