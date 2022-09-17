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
exports.TaskEntity = void 0;
var typeorm_1 = require("typeorm");
var common_1 = require("../../entity/common");
var TaskEntity = /** @class */ (function (_super) {
    __extends(TaskEntity, _super);
    function TaskEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "title",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], TaskEntity.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)("text", {
            name: "description",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], TaskEntity.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", {
            name: "duration",
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], TaskEntity.prototype, "duration", void 0);
    __decorate([
        (0, typeorm_1.Column)("tinyint", {
            name: "is_complete",
            nullable: true,
            default: 0,
        }),
        __metadata("design:type", Boolean)
    ], TaskEntity.prototype, "is_complete", void 0);
    TaskEntity = __decorate([
        (0, typeorm_1.Entity)("task")
    ], TaskEntity);
    return TaskEntity;
}(common_1.Common));
exports.TaskEntity = TaskEntity;
//# sourceMappingURL=task.entity.js.map