import axios, { Axios, AxiosResponse } from "axios";
import { ProjectRequest } from "../models/ProjectRequest";
import { getHeader } from "./AuthUtil"

export const createProject = async(project: ProjectRequest, token: String): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/project", project, getHeader(token));

        return response.data;
    } catch(e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}