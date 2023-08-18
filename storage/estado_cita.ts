import { Expose } from 'class-transformer';
import { IsDefined, IsInt, IsString } from 'class-validator';

export default class estadoCitas {
    @Expose({ name: '_id' })
    @IsInt()
    @IsDefined({ message: 'El _id es obligatorio' })
    _id: number;

    @Expose({ name: 'estcita_id' })
    @IsInt()
    @IsDefined({ message: 'El estcita_id es obligatorio' })
    estcita_id: number;

    @Expose({ name: 'estcita_nombre' })
    @IsString()
    @IsDefined({ message: 'El estcita_nombre es obligatorio' })
    estcita_nombre: string;


    constructor(data: Partial<estadoCitas>) {
        Object.assign(this, data);
        this._id = 0;
        this.estcita_id = 0;
        this.estcita_nombre = '';
    }
}