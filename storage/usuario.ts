import { Expose } from 'class-transformer';
import { IsDefined, IsIn, IsInt, IsNumber, IsString, isNumber } from 'class-validator';

export default class usuario {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'usu_id' })
    @IsInt()
    @IsDefined({ message: 'El usu_id es obligatorio' })
    usu_id: number;

    @Expose({ name: 'usu_nombre' })
    @IsString()
    @IsDefined({ message: 'El usu_nombre es obligatorio' })
    usu_nombre: string;

    @Expose({ name: 'usu_segdo_nombre' })
    @IsNumber()
    @IsDefined({ message: 'El usu_segdo_nombre es obligatorio' })
    usu_segdo_nombre: string;

    @Expose({ name: 'usu_primer_apellido_usuar' })
    @IsString()
    @IsDefined({ message: 'El usu_primer_apellido_usuar es obligatorio' })
    usu_primer_apellido_usuar: string;

    @Expose({ name: 'usu_segdo_apellido_usuar' })
    @IsString()
    @IsDefined({ message: 'El usu_segdo_apellido_usuar es obligatorio' })
    usu_segdo_apellido_usuar: string;

    @Expose({ name: 'usu_telefono' })
    @IsNumber()
    @IsDefined({ message: 'El usu_telefono es obligatorio' })
    usu_telefono: number;

    @Expose({ name: 'usu_direccion' })
    @IsString()
    @IsDefined({ message: 'El usu_direccion es obligatorio' })
    usu_direccion: string;

    @Expose({ name: 'usu_email' })
    @IsString()
    @IsDefined({ message: 'El usu_email es obligatorio' })
    usu_email: string;

    @Expose({ name: 'usu_tipodoc' })
    @IsNumber()
    @IsDefined({ message: 'El usu_tipodoc es obligatorio' })
    usu_tipodoc: number;

    @Expose({ name: 'usu_genero' })
    @IsNumber()
    @IsDefined({ message: 'El usu_genero es obligatorio' })
    usu_genero: number;

    @Expose({ name: 'usu_acudiente' })
    @IsNumber()
    @IsDefined({ message: 'El usu_acudiente es obligatorio' })
    usu_acudiente: number;


     constructor(data: Partial<usuario>) {
        Object.assign(this, data);
            this._id=0;
            this.usu_id=0;
            this.usu_nombre='';
            this.usu_segdo_nombre='';
            this.usu_primer_apellido_usuar='';
            this.usu_segdo_apellido_usuar='';
            this.usu_telefono=0;
            this.usu_direccion='';
            this.usu_email='';
            this.usu_tipodoc=0;
            this.usu_genero=0;
            this.usu_acudiente=0;

    } 
}