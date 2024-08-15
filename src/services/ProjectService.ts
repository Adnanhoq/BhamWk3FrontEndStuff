import axios, { Axios, AxiosResponse } from "axios";
import { ProjectRequest } from "../models/ProjectRequest";

export const createProject = async(project: ProjectRequest, token: String): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/project", project);

        return response.data;
    } catch(e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}