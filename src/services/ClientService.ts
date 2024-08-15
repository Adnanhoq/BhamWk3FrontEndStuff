import axios, {AxiosResponse} from "axios";
import { getHeader } from "./AuthUtil";
import { Client } from "../models/Client";

export const getClients = async (token: String): Promise<Client[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/client", getHeader(token));
        return response.data;
    } catch(e) {
        console.log(e);
        throw new Error('Failed to get clients');
    }
}