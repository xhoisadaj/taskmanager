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
exports.Common = void 0;
var typeorm_1 = require("typeorm");
var soft_delete_1 = require("./soft.delete");
// tslint:disable:variable-name
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    function Common() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Common.prototype.addLastModified = function () {
        this.ts_last_modified = new Date();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], Common.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("timestamp", {
            default: function () { return "CURRENT_TIMESTAMP"; },
            name: "ts_created",
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Common.prototype, "ts_created", void 0);
    __decorate([
        (0, typeorm_1.Column)("timestamp", {
            default: function () { return "CURRENT_TIMESTAMP"; },
            name: "ts_last_modified",
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Common.prototype, "ts_last_modified", void 0);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Common.prototype, "addLastModified", null);
    return Common;
}(soft_delete_1.SoftDelete));
exports.Common = Common;
//# sourceMappingURL=common.js.map