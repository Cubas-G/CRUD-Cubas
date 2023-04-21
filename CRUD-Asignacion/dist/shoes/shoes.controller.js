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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoesController = void 0;
const common_1 = require("@nestjs/common");
const shoes_service_1 = require("./shoes.service");
const create_shoe_dto_1 = require("./dto/create-shoe.dto");
let ShoesController = class ShoesController {
    constructor(shoesService) {
        this.shoesService = shoesService;
    }
    create(createShoeDto) {
        return this.shoesService.create(createShoeDto);
    }
    findAll() {
        return this.shoesService.findAll();
    }
    findOne(id) {
        return this.shoesService.findOne(id);
    }
    update(id, updateShoesDto) {
        return this.shoesService.update(id, updateShoesDto);
    }
    remove(id) {
        return this.shoesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shoe_dto_1.CreateShoeDto]),
    __metadata("design:returntype", void 0)
], ShoesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShoesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_shoe_dto_1.CreateShoeDto]),
    __metadata("design:returntype", void 0)
], ShoesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoesController.prototype, "remove", null);
ShoesController = __decorate([
    (0, common_1.Controller)('shoes'),
    __metadata("design:paramtypes", [shoes_service_1.ShoesService])
], ShoesController);
exports.ShoesController = ShoesController;
//# sourceMappingURL=shoes.controller.js.map