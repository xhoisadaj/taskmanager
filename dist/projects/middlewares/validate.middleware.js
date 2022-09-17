"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMiddleware = void 0;
var Joi = require("joi");
var typeorm_1 = require("typeorm");
var project_entity_1 = require("../entity/project.entity");
var ValidateMiddleware = /** @class */ (function () {
    function ValidateMiddleware() {
    }
    var _a;
    _a = ValidateMiddleware;
    ValidateMiddleware.validateInput = function (request, response, next) {
        var schema = Joi.object({
            title: Joi.string().min(6).max(12).required(),
            description: Joi.string().min(5).required(),
            duration: Joi.number().required(),
        });
        var result = schema.validate(request.body, { abortEarly: true });
        if (typeof result.error === 'undefined') {
            next();
        }
        else {
            return response.send({ status: 400, message: result.error });
        }
    };
    ValidateMiddleware.checkForExistence = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
        var userId, repository, project, e_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = +request.params.id;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    repository = (0, typeorm_1.getRepository)(project_entity_1.ProjectEntity);
                    return [4 /*yield*/, repository.findOne({ id: userId })];
                case 2:
                    project = _b.sent();
                    if (!project) {
                        return [2 /*return*/, response.send({ status: 404, message: 'Project not found' })];
                    }
                    else {
                        next();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _b.sent();
                    return [2 /*return*/, response.send({ status: 500, message: 'Internal Server Error' })];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    ValidateMiddleware.validateDescriptionUpdate = function (request, response, next) {
        var schema = Joi.object({
            description: Joi.string().min(5).required(),
        });
        var result = schema.validate(request.body, { abortEarly: true });
        if (typeof result.error === 'undefined') {
            next();
        }
        else {
            return response.send({ status: 400, message: result.error });
        }
    };
    return ValidateMiddleware;
}());
exports.ValidateMiddleware = ValidateMiddleware;
//# sourceMappingURL=validate.middleware.js.map