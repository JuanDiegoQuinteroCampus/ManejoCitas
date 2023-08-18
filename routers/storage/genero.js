var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';
export default class genero {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.gen_id = 0;
        this.gen_nombre = '';
        this.gen_abreviatura = '';
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsInt(),
    IsDefined({ message: 'El _id es obligatorio' })
], genero.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'gen_id' }),
    IsInt(),
    IsDefined({ message: 'El gen_id es obligatorio' })
], genero.prototype, "gen_id", void 0);
__decorate([
    Expose({ name: 'gen_nombre' }),
    IsString(),
    IsDefined({ message: 'El gen_nombre es obligatorio' })
], genero.prototype, "gen_nombre", void 0);
__decorate([
    Expose({ name: 'gen_abreviatura' }),
    IsString(),
    IsDefined({ message: 'El gen_abreviatura es obligatorio' })
], genero.prototype, "gen_abreviatura", void 0);
