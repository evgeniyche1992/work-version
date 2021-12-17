import {authority} from "../redux/auth-reducer";

const INITIALIZE_SUCCES = 'INITIALIZE_SUCCES';


let initialState = {
    initialized:false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCES:
            return {
                ...state,//дублируем стэйт
                initialized:true,//дублируем и склеиваем экшн вместе со стейтом, данные пришедгие с сервера
            }
        
        default:
            return state;
    }
}
export const ssuccesInitialized = () => ({type: INITIALIZE_SUCCES});

export const initializeApp = () => (dispatch)=>{
    
    let authorizationApp = dispatch(authority());
    Promise.all([authorizationApp]) //это делается для того, чтобы ждать пока все промисы придут, а потом только иницализировать приложение
    .then(()=>{dispatch(ssuccesInitialized())});
}


export default appReducer;

