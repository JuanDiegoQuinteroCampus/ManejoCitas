import { Expose } from 'class-transformer';
import { IsDefined, IsIn, IsInt, IsNumber, IsString } from 'class-validator';

export default class acudiente {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'acu_codigo' })
    @IsInt()
    @IsDefined({ message: 'El acu_codigo es obligatorio' })
    acu_codigo: number;

    @Expose({ name: 'acu_nombreCompleto' })
    @IsString()
    @IsDefined({ message: 'El acu_nombreCompleto es obligatorio' })
    acu_nombreCompleto: string;

    @Expose({ name: 'acu_telefono' })
    @IsNumber()
    @IsDefined({ message: 'El acu_telefono es obligatorio' })
    acu_telefono: number;

    @Expose({ name: 'acu_direccion' })
    @IsString()
    @IsDefined({ message: 'El acu_direccion es obligatorio' })
    acu_direccion: string;


    constructor(data: Partial<acudiente>) {
        Object.assign(this, data);
        this._id = 0;
        this.acu_codigo = 0;
        this.acu_nombreCompleto = '';
        this.acu_telefono = 0;
        this.acu_direccion = '';

    }
}