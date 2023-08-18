var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsNumber, IsString } from 'class-validator';
export default class usuario {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.usu_id = 0;
        this.usu_nombre = '';
        this.usu_segdo_nombre = '';
        this.usu_primer_apellido_usuar = '';
        this.usu_segdo_apellido_usuar = '';
        this.usu_telefono = 0;
        this.usu_direccion = '';
        this.usu_email = '';
        this.usu_tipodoc = 0;
        this.usu_genero = 0;
        this.usu_acudiente = 0;
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsInt(),
    IsDefined({ message: 'El _id es obligatorio' })
], usuario.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'usu_id' }),
    IsInt(),
    IsDefined({ message: 'El usu_id es obligatorio' })
], usuario.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: 'usu_nombre' }),
    IsString(),
    IsDefined({ message: 'El usu_nombre es obligatorio' })
], usuario.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'usu_segdo_nombre' }),
    IsNumber(),
    IsDefined({ message: 'El usu_segdo_nombre es obligatorio' })
], usuario.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: 'usu_primer_apellido_usuar' }),
    IsString(),
    IsDefined({ message: 'El usu_primer_apellido_usuar es obligatorio' })
], usuario.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'usu_segdo_apellido_usuar' }),
    IsString(),
    IsDefined({ message: 'El usu_segdo_apellido_usuar es obligatorio' })
], usuario.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'usu_telefono' }),
    IsNumber(),
    IsDefined({ message: 'El usu_telefono es obligatorio' })
], usuario.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'usu_direccion' }),
    IsString(),
    IsDefined({ message: 'El usu_direccion es obligatorio' })
], usuario.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    IsString(),
    IsDefined({ message: 'El usu_email es obligatorio' })
], usuario.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: 'usu_tipodoc' }),
    IsNumber(),
    IsDefined({ message: 'El usu_tipodoc es obligatorio' })
], usuario.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: 'usu_genero' }),
    IsNumber(),
    IsDefined({ message: 'El usu_genero es obligatorio' })
], usuario.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: 'usu_acudiente' }),
    IsNumber(),
    IsDefined({ message: 'El usu_acudiente es obligatorio' })
], usuario.prototype, "usu_acudiente", void 0);
