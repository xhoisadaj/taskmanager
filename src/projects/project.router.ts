import * as express from 'express';
import {ValidateMiddleware} from "./middlewares/validate.middleware";
import {ProjectController} from "./controllers/project.controller";
import {ProjectTaskController} from "./controllers/project.task.controller";

export class ProjectRouter {
    public static configRoutes = (app: express.Application): void => {
        app.get('/projects', [ProjectController.getProjects]);
        app.get('/projects/:projectId/tasks', [ProjectTaskController.getProjectTasks])

        app.post('/projects', [ValidateMiddleware.validateInput, ProjectController.insertProject]);

        // app.patch('/projects/:projectId', [
        //     ValidateMiddleware.checkForExistence,
        //     ValidateMiddleware.validateUsernameUpdate,
        //     UserController.updateUsername
        // ])
        //
        // app.put('/projects/:projectId', [
        //     ValidateMiddleware.checkForExistence,
        //     ValidateMiddleware.validateInput,
        //     UserController.updateUser
        // ]);
        //
        // app.delete('/projects', [UserController.deleteUser])

        // Project Tasks
        app.post('/project/:projectId/task')
        app.put('/project/:projectId/task/:taskId')
    }
}
