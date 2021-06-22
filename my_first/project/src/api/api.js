import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:
        {"API-KEY": "db606cf2-9aab-4f41-b68a-9600520d5534"},

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
};
export const profileAPI = {};
export const securityAPI = {};
