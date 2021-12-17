import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:
        {"API-KEY": "8707d1cb-3e7b-4e46-8993-c075b5522650"},
});
export const usersAPI = {
    getUser(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },
    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then(response => {
            return response.data;
        });
    },
};
export const followAPI = {
    unfollowing(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        })
    },
    following(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        })
    },
};
export const authAPI = {
    authorized() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    getUserPhoto(id) {
        return instance.get(`profile/` + id).then(response => {
            return response.data.photos;
        });
    },
    logIN(email,password,rememberMe=false) {
        return instance.post(`auth/login`,{email,password,rememberMe}).then(response => {
            return response.data;
        })
    },
    logOUT(){
        return instance.delete(`auth/login`).then(response =>{
            return response.data;
        })
    }
};
export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => {
            return response.data;
        })
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    }
};
export const securityAPI = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url` ).then(response => {
            return response.data;
        })
    } 
};
