import { error } from "console";

export const validateLogin = async (username: String, password: String) => {
        if(username.length > 64 || username.length == 0 ){
            throw error;
        }
        if(password.length > 64 || password.length == 0 ){
            throw error;
        } 
}