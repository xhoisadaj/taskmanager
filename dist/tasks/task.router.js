"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRouter = void 0;
var validate_middleware_1 = require("./middlewares/validate.middleware");
var task_controller_1 = require("./controllers/task.controller");
var TaskRouter = /** @class */ (function () {
    function TaskRouter() {
    }
    TaskRouter.configRoutes = function (app) {
        app.get('/tasks', [task_controller_1.TaskController.getTasks]);
        app.post('/task', [validate_middleware_1.ValidateMiddleware.validateInput, task_controller_1.TaskController.insertTask]);
        app.patch('/tasks/:taskId', [
            validate_middleware_1.ValidateMiddleware.checkForExistence,
            validate_middleware_1.ValidateMiddleware.validateCompletedUpdate,
            task_controller_1.TaskController.completeTask
        ]);
        //
        // app.put('/projects/:projectId', [
        //     ValidateMiddleware.checkForExistence,
        //     ValidateMiddleware.validateInput,
        //     UserController.updateUser
        // ]);
        //
        // app.delete('/projects', [UserController.deleteUser])
    };
    return TaskRouter;
}());
exports.TaskRouter = TaskRouter;
//# sourceMappingURL=task.router.js.map