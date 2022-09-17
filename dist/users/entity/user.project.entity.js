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
exports.UserProjectEntity = void 0;
var typeorm_1 = require("typeorm");
var common_1 = require("../../entity/common");
var user_entity_1 = require("./user.entity");
var project_entity_1 = require("../../projects/entity/project.entity");
var UserProjectEntity = /** @class */ (function (_super) {
    __extends(UserProjectEntity, _super);
    function UserProjectEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toObjectResponse = function () {
            return {
                id: _this.id,
                description: _this.project.description,
                username: _this.user.username
            };
        };
        return _this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], UserProjectEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('int', {
            name: "user_id",
        }),
        __metadata("design:type", Number)
    ], UserProjectEntity.prototype, "user_id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", {
            name: "project_id",
        }),
        __metadata("design:type", Number)
    ], UserProjectEntity.prototype, "project_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.UserEntity; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
        __metadata("design:type", user_entity_1.UserEntity)
    ], UserProjectEntity.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return project_entity_1.ProjectEntity; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)({ name: 'project_id' }),
        __metadata("design:type", project_entity_1.ProjectEntity)
    ], UserProjectEntity.prototype, "project", void 0);
    UserProjectEntity = __decorate([
        (0, typeorm_1.Entity)("user_project")
    ], UserProjectEntity);
    return UserProjectEntity;
}(common_1.Common));
exports.UserProjectEntity = UserProjectEntity;
//# sourceMappingURL=user.project.entity.js.map