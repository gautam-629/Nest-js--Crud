import { IsNotEmpty, IsEmail, IsInt, Min } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    age: number;

    @IsNotEmpty()
    password: string;
}
