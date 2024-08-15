import { ProjectRequest } from "../models/ProjectRequest";

export const minProjectValue: Number = 0;
export const maxProjectValue: Number = 100000000;

export const validateProject = (project: ProjectRequest) => {
    if(project.name.length > 50 || project.name.length == 0) {
        throw new Error("Project Name not valid");
    }

    if(project.value < minProjectValue || project.value > maxProjectValue) {
        throw new Error("Project Value not valid");
    }
}