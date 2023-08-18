import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';

export default class genero {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'gen_id' })
    @IsInt()
    @IsDefined({ message: 'El gen_id es obligatorio' })
    gen_id: number;

    @Expose({ name: 'gen_nombre' })
    @IsString()
    @IsDefined({ message: 'El gen_nombre es obligatorio' })
    gen_nombre: string;

    @Expose({ name: 'gen_abreviatura' })
    @IsString()
    @IsDefined({ message: 'El gen_abreviatura es obligatorio' })
    gen_abreviatura: string;


    constructor(data: Partial<genero>) {
        Object.assign(this, data);
        this._id = 0;
        this.gen_id = 0;
        this.gen_nombre = '';
        this.gen_abreviatura = '';
    }
}