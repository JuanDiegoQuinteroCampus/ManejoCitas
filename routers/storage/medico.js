var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsNumber, IsString } from 'class-validator';
export default class Medico {
    constructor(data) {
        Object.assign(this, data);
        this._id = 0;
        this.med_nromtariculaProsional = 0;
        this.med_NombreCompleto = '';
        this.med_consultorio = 0;
        this.med_especialidad = 0;
    }
}
__decorate([
    Expose({ name: '_id' }),
    IsInt(),
    IsDefined({ message: 'El _id es obligatorio' })
], Medico.prototype, "_id", void 0);
__decorate([
    Expose({ name: 'med_nromtariculaProsional' }),
    IsInt(),
    IsDefined({ message: 'El med_nromtariculaProsional es obligatorio' })
], Medico.prototype, "med_nromtariculaProsional", void 0);
__decorate([
    Expose({ name: 'med_NombreCompleto' }),
    IsString(),
    IsDefined({ message: 'El med_NombreCompleto es obligatorio' })
], Medico.prototype, "med_NombreCompleto", void 0);
__decorate([
    Expose({ name: 'med_consultorio' }),
    IsNumber(),
    IsDefined({ message: 'El med_consultorio es obligatorio' })
], Medico.prototype, "med_consultorio", void 0);
__decorate([
    Expose({ name: 'med_especialidad' }),
    IsNumber(),
    IsDefined({ message: 'El med_especialidad es obligatorio' })
], Medico.prototype, "med_especialidad", void 0);
