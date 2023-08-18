import { Expose } from 'class-transformer';
import { IsDefined, IsIn, IsInt, IsNumber, IsString } from 'class-validator';

export default class Medico {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'med_nromtariculaProsional' })
    @IsInt()
    @IsDefined({ message: 'El med_nromtariculaProsional es obligatorio' })
    med_nromtariculaProsional: number;

    @Expose({ name: 'med_NombreCompleto' })
    @IsString()
    @IsDefined({ message: 'El med_NombreCompleto es obligatorio' })
    med_NombreCompleto: string;

    @Expose({ name: 'med_consultorio' })
    @IsNumber()
    @IsDefined({ message: 'El med_consultorio es obligatorio' })
    med_consultorio: number;

    @Expose({ name: 'med_especialidad' })
    @IsNumber()
    @IsDefined({ message: 'El med_especialidad es obligatorio' })
    med_especialidad: number;


    constructor(data: Partial<Medico>) {
        Object.assign(this, data);
        this._id = 0;
        this.med_nromtariculaProsional = 0;
        this.med_NombreCompleto = '';
        this.med_consultorio = 0;
        this.med_especialidad = 0;

    }
}