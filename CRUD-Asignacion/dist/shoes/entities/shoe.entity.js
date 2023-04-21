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
exports.Shoe = void 0;
const typeorm_1 = require("typeorm");
const shoe_image_entities_1 = require("./shoe.image.entities");
let Shoe = class Shoe {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Shoe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Shoe.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Shoe.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', }),
    __metadata("design:type", String)
], Shoe.prototype, "directions", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric' }),
    __metadata("design:type", Number)
], Shoe.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Shoe.prototype, "ced", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => shoe_image_entities_1.ShoeImage, (shoesImage) => shoesImage.shoe, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Shoe.prototype, "images", void 0);
Shoe = __decorate([
    (0, typeorm_1.Entity)()
], Shoe);
exports.Shoe = Shoe;
//# sourceMappingURL=shoe.entity.js.map