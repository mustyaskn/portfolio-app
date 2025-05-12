import { getData } from "./storage.service.js";
import { STORAGE_KEYS } from "../utils/constant.util.js";

// auth.service.js Authentication(Doğrulama)
export const validateUser = ({username,password}) => {
    const users = getData(STORAGE_KEYS.USERS);
    return users.find((user) => {
        return user.username === username && user.password === password;
    });
}