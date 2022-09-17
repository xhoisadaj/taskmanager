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
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var common_1 = require("../../entity/common");
// tslint:disable:variable-name
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("bigint", {
            name: "facebook_id",
            nullable: true,
        }),
        __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
    ], UserEntity.prototype, "facebook_id", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "username",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "password",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "name",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "surname",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "surname", void 0);
    __decorate([
        (0, typeorm_1.Column)("text", {
            name: "description",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "email",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "profile_picture",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "profile_picture", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: 256,
            name: "role",
            nullable: false,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.Column)("tinyint", {
            default: function () { return "'0'"; },
            name: "verified",
            nullable: false,
            width: 1,
        }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "verified", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: "30",
            name: "phone_number",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "phone_number", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: "256",
            name: "street_name",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "street_name", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: "30",
            name: "postal_code",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "postal_code", void 0);
    __decorate([
        (0, typeorm_1.Column)("varchar", {
            length: "50",
            name: "city",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)("date", {
            name: "birthday",
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "birthday", void 0);
    UserEntity = __decorate([
        (0, typeorm_1.Entity)("user")
    ], UserEntity);
    return UserEntity;
}(common_1.Common));
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map