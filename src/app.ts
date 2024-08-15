import express from "express";
import nunjucks from "nunjucks";
import bodyParser from "body-parser";
import session from "express-session";

import { getAllDatabases } from "./controllers/TestController";
import { getLoginForm,postLoginForm } from "./controllers/AuthController";
import { getCreateProjectForm, postCreateProjectForm } from "./controllers/ProjectController";
import { allowRoles } from "./middleware/AuthMiddleware";
import { UserRole } from "./models/JwtToken";

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(session({ secret: 'SUPER_SECRET', cookie: { maxAge: 28800000 }}));

declare module "express-session" {
  interface SessionData {
    token: string;
  }
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// app.get('/', getAllDatabases);

app.get('/loginForm', getLoginForm);
app.post('/loginForm', postLoginForm);
app.get('/createProject', allowRoles([UserRole.Admin, UserRole.Management]), getCreateProjectForm);
app.post('/createProject', allowRoles([UserRole.Admin, UserRole.Management]), postCreateProjectForm);