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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shoe_entity_1 = require("./entities/shoe.entity");
const shoe_image_entities_1 = require("./entities/shoe.image.entities");
let ShoesService = class ShoesService {
    constructor(shoeRepository, ShoeImageRepository) {
        this.shoeRepository = shoeRepository;
        this.ShoeImageRepository = ShoeImageRepository;
    }
    async create(shoeDto) {
        const { images = [] } = shoeDto, detalleShoe = __rest(shoeDto, ["images"]);
        const shoe = await this.shoeRepository.create(Object.assign(Object.assign({}, detalleShoe), { images: images.map((image) => this.ShoeImageRepository.create({ url: image })) }));
        await this.shoeRepository.save(shoe);
        return shoe;
    }
    findAll() {
        return this.shoeRepository.find();
    }
    findOne(id) {
        return this.shoeRepository.findOneBy({ id });
    }
    async remove(id) {
        const shoe = await this.findOne(id);
        await this.shoeRepository.remove(shoe);
        return 'Shoe removed successfully';
    }
    async update(id, cambios) {
        const shoe = await this.shoeRepository.preload(Object.assign(Object.assign({ id: id }, cambios), { images: [] }));
        await this.shoeRepository.save(shoe);
        return shoe;
    }
};
ShoesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shoe_entity_1.Shoe)),
    __param(1, (0, typeorm_1.InjectRepository)(shoe_image_entities_1.ShoeImage)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ShoesService);
exports.ShoesService = ShoesService;
//# sourceMappingURL=shoes.service.js.map