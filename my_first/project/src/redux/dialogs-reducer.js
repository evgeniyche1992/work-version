const sendMessage = 'SEND-MESSAGE';
let initialState = {
    messages: [
        {id: 1, message: 'STATE !!!!'},
        {id: 2, message: 'Where are you?'},
        {id: 3, message: 'Hello my dear friend'},
        {id: 4, message: 'YO HO HO'},
        {id: 5, message: 'YO'},
        {id: 6, message: 'React APP'},
        {id: 7, message: 'Redux'},
        {id: 8, message: 'Node JS'},
        {id: 9, message: 'YO Yo YO'},
    ],

    dialogsElement: [
        {id: 1, name: 'Mark'},
        {id: 2, name: 'Evgeniy'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Grigory'},
        {id: 6, name: 'Yura'},
        {id: 7, name: 'Gena'},
        {id: 8, name: 'Mira'}]
}
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case sendMessage:
            let body = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: 12, message: body}],
            }
        default:
            return state;
    }

}
export const sendMessageActionCreator = (newMessage) => ({type: sendMessage, newMessage});
export default dialogReducer;