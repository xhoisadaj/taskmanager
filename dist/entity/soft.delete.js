"use strict";
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
exports.SoftDelete = void 0;
var typeorm_1 = require("typeorm");
var SoftDelete = /** @class */ (function () {
    function SoftDelete() {
    }
    __decorate([
        (0, typeorm_1.Column)("tinyint", {
            default: function () { return "'0'"; },
            name: "deleted",
            nullable: false,
            width: 1,
        }),
        (0, typeorm_1.Index)(),
        __metadata("design:type", Boolean)
    ], SoftDelete.prototype, "deleted", void 0);
    return SoftDelete;
}());
exports.SoftDelete = SoftDelete;
//# sourceMappingURL=soft.delete.js.map