export const getTxt =(state)=>{
    return state.messagePage.messages;
};
export const getMessagePage =(state)=>{
    return state.messagePage;
};
export const getAuth =(state)=>{
    return state.auth.isAuth;
};
export const getLogin =(state)=>{
    return state.auth.login;
};
export const  getUserIdFromState =(state)=>{
    return state.auth.userId;
};
export const getPhotoUser =(state)=>{
    return state.auth.photo;
};
export const getUser =(state)=>{
    return state.usersPage.users;
};
export const getPageSize =(state)=>{
    return state.usersPage.pageSize;
};
export const getTotalUsers =(state)=>{
    return state.usersPage.totalUsersCount;
};
export const getPage =(state)=>{
    return state.usersPage.currentPage;
};
export const getFetching =(state)=>{
    return state.usersPage.isFetching;
};
export const getFollow =(state)=>{
    return state.usersPage.followingUser;
};
export const getProfile =(state)=>{
    return state.mainPage.profile;
};
export const getUserStatus =(state)=>{
    return state.mainPage.status;
};
