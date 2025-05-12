import { STORAGE_KEYS } from "../utils/constant.util.js";

// storage.service.js
export const getData = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
}

export const saveData = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data));
}

export const saveContactForm = (formData) => {
    const messages = getData(STORAGE_KEYS.MESSAGES);
    messages.push(formData);
    saveData(STORAGE_KEYS.MESSAGES,messages);
}