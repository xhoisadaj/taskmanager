"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectEntity = void 0;
var typeorm_1 = require("typeorm");
var common_1 = require("../../entity/common");
var project_task_entity_1 = require("./project.task.entity");
// tslint:disable:variable-name
var ProjectEntity = /** @class */ (function (_super) {
    __extends(ProjectEntity, _super);
    function ProjectEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], ProjectEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "title",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], ProjectEntity.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)("text", {
            name: "description",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], ProjectEntity.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", {
            name: "duration",
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], ProjectEntity.prototype, "duration", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return project_task_entity_1.ProjectTaskEntity; }, function (projectTaskEntity) { return projectTaskEntity.project_id; }),
        __metadata("design:type", Array)
    ], ProjectEntity.prototype, "project_tasks", void 0);
    ProjectEntity = __decorate([
        (0, typeorm_1.Entity)("project")
    ], ProjectEntity);
    return ProjectEntity;
}(common_1.Common));
exports.ProjectEntity = ProjectEntity;
//# sourceMappingURL=project.entity.js.map