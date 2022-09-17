"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
var user_controller_1 = require("./controllers/user.controller");
var validate_middleware_1 = require("./middlewares/validate.middleware");
var user_project_controller_1 = require("./controllers/user.project.controller");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
    }
    UserRouter.configRoutes = function (app) {
        app.get('/users', [user_controller_1.UserController.getUsers]);
        app.post('/users', [validate_middleware_1.ValidateMiddleware.validateInput, user_controller_1.UserController.insertUser]);
        app.patch('/users/:userId', [
            validate_middleware_1.ValidateMiddleware.checkForExistence,
            validate_middleware_1.ValidateMiddleware.validateUsernameUpdate,
            user_controller_1.UserController.updateUsername
        ]);
        app.put('/users/:userId', [
            validate_middleware_1.ValidateMiddleware.checkForExistence,
            validate_middleware_1.ValidateMiddleware.validateInput,
            user_controller_1.UserController.updateUser
        ]);
        app.delete('/users', [user_controller_1.UserController.deleteUser]);
        // User project routes
        app.get('/users/:userId/projects', [user_project_controller_1.UserProjectController.getUserProjects]);
        app.post('/user-project', [user_project_controller_1.UserProjectController.insertUserProject]);
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.router.js.map