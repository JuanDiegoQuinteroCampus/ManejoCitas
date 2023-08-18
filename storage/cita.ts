import { Expose } from 'class-transformer';
import { IsDefined, IsIn, IsInt, IsNumber, IsString } from 'class-validator';

export default class cita {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'cit_codigo' })
    @IsInt()
    @IsDefined({ message: 'El cit_codigo es obligatorio' })
    cit_codigo: number;

    @Expose({ name: 'cit_fecha' })
    @IsString()
    @IsDefined({ message: 'El cit_fecha es obligatorio' })
    cit_fecha: string;

    @Expose({ name: 'cit_estadoCita' })
    @IsNumber()
    @IsDefined({ message: 'cit_estadoCita acu_telefono es obligatorio' })
    cit_estadoCita: number;

    @Expose({ name: 'cit_medico' })
    @IsNumber()
    @IsDefined({ message: 'El cit_medico es obligatorio' })
    cit_medico: number;

    @Expose({ name: 'cit_datosUsuario' })
    @IsNumber()
    @IsDefined({ message: 'El cit_datosUsuario es obligatorio' })
    cit_datosUsuario: number;



    constructor(data: Partial<cita>) {
        Object.assign(this, data);
        this._id = 0;
        this.cit_codigo = 0;
        this.cit_fecha = '';
        this.cit_estadoCita = 0;
        this.cit_medico = 0;
        this.cit_datosUsuario=0

    }
}