import { IsBoolean, IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    full_name: string;
    @IsString()
    tel: string;
    @IsString()
    promo_code: string;

    @IsBoolean()
    confirm: boolean;

    @IsString()
    @Length(6, 50)
    password: string;
}
