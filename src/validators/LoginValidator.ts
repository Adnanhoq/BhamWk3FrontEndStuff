
import { LoginRequest } from "../models/LoginRequest";

export const validateLogin = (username: String, password: String) => {
        if(username.length > 64 || username.length == 0 ){
            throw new Error("username not valid");
        }
        if(password.length > 64 || password.length == 0 ){
            throw new Error("password not valid");
        } 
}