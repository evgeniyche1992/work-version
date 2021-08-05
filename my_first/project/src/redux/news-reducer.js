const updateMessage = 'UPDATE-MESSAGE';
const sendMessage = 'SEND-MESSAGE';
let initialState = {
    news: [
        {id: 1, news: 'Hi'},
        {id: 2, news: 'How are you?'},
        {id: 3, news: 'Hello my dear friend'},
        {id: 4, news: 'YO HO HO'},
        {id: 5, news: 'YO '},
        {id: 6, news: 'React APP'},
        {id: 7, news: 'Redux'},
        {id: 8, news: 'Node JS'},
        {id: 9, news: 'YO Yo YO'},
        {id: 10, news: 'Hello, i want to learn redux'}
    ]
}
const newsReducer = (state = initialState, action) => {
    return state;
}


export default newsReducer;