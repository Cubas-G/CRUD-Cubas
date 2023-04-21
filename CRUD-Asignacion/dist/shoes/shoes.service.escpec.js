"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const shoes_service_1 = require("./shoes.service");
describe('ShoesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [shoes_service_1.ShoesService],
        }).compile();
        service = module.get(shoes_service_1.ShoesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=shoes.service.escpec.js.map