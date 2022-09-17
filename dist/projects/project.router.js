"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRouter = void 0;
var validate_middleware_1 = require("./middlewares/validate.middleware");
var project_controller_1 = require("./controllers/project.controller");
var project_task_controller_1 = require("./controllers/project.task.controller");
var ProjectRouter = /** @class */ (function () {
    function ProjectRouter() {
    }
    ProjectRouter.configRoutes = function (app) {
        app.get('/projects', [project_controller_1.ProjectController.getProjects]);
        app.get('/projects/:projectId/tasks', [project_task_controller_1.ProjectTaskController.getProjectTasks]);
        app.post('/projects', [validate_middleware_1.ValidateMiddleware.validateInput, project_controller_1.ProjectController.insertProject]);
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
        app.post('/project/:projectId/task');
        app.put('/project/:projectId/task/:taskId');
    };
    return ProjectRouter;
}());
exports.ProjectRouter = ProjectRouter;
//# sourceMappingURL=project.router.js.map