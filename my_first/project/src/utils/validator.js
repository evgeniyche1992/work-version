import {logIn} from "../redux/auth-reducer";

export const requiredField = (value) => {
    if (value) return undefined;
    return 'Field is required'
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Please NO, maximum length is ${maxLength}`;
    return undefined;
}
export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Please retry, minimum symbols is ${minLength}`;
    return undefined;
}
export const errorPassword =()=>{
    return `Wrong password, please retry`;
}

