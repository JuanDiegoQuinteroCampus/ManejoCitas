import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';

export default class tipo_documento {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'tipdoc_id' })
    @IsInt()
    @IsDefined({ message: 'El tipdoc_id es obligatorio' })
    tipdoc_id: number;

    @Expose({ name: 'tipdoc_nombre' })
    @IsString()
    @IsDefined({ message: 'El tipdoc_nombre es obligatorio' })
    tipdoc_nombre: string;

    @Expose({ name: 'tipdoc_abreviatura' })
    @IsString()
    @IsDefined({ message: 'El tipdoc_abreviatura es obligatorio' })
    tipdoc_abreviatura: string;


    constructor(data: Partial<tipo_documento>) {
        Object.assign(this, data);
        this._id = 0;
        this.tipdoc_id = 0;
        this.tipdoc_nombre = '';
        this.tipdoc_abreviatura = '';
    }
}