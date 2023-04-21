"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShoeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_shoe_dto_1 = require("./create-shoe.dto");
class UpdateShoeDto extends (0, mapped_types_1.PartialType)(create_shoe_dto_1.CreateShoeDto) {
}
exports.UpdateShoeDto = UpdateShoeDto;
//# sourceMappingURL=update-shoe.dto.js.map