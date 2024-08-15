import axios, { Axios, AxiosResponse } from "axios";
import { ProjectRequest } from "../models/ProjectRequest";
import { getHeader } from "./AuthUtil"
import { validateProject } from "../validators/ProjectValidator";

export const createProject = async(project: ProjectRequest, token: String): Promise<Number> => {
    try {
        validateProject(project);
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/project", project, getHeader(token));

        return response.data;
    } catch(e) {
        console.log(e);
        throw new Error("Failed to create Project");
    }
}