import express from "express";
import { createProject } from "../services/ProjectService";
import { getClients } from "../services/ClientService";

export const getCreateProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('createProjectForm.html', {clients: await getClients(req.session.token)});
}

export const postCreateProjectForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createProject(req.body, req.session.token);

    } catch(e) {
        res.locals.errormessage = e.message;
        res.render('createProjectForm.html', req.body);
    }
}