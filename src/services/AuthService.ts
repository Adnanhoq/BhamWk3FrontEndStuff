import axios, { AxiosResponse } from "axios";
import { LoginRequest } from "../models/LoginRequest";
import { getHeader } from "./AuthUtil";

export const getToken = async (loginRequest: LoginRequest, token: String): Promise<string> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/auth/login", loginRequest, getHeader(token));

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}