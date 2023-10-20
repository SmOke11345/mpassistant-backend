import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    Query,
} from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserDto } from '../dto/CreateUserDto.dto';

@Controller('register')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getData() {
        return this.appService.getAllUsers();
    }

    @Get('validation')
    // @Query -- будет выглядеть как ? и ожидать параметр http://localhost:3000/api/register/check-email?email=
    async validationFields(@Query('email') email: string) {
        const user = await this.appService.validationFields(email);
        // return [
        //     {
        //         email: Boolean(user)
        //             ? 'Пользователь с таким e-mail уже существует'
        //             : 'Прошел валидацию, является уникальным',
        //     },
        // ];
        return Boolean(user);
    }

    @Post()
    async register(@Body() user: CreateUserDto) {
        try {
            return this.appService.register(user);
        } catch (error) {
            // Отправляем ошибку обратно на сторону пользователя
            throw new BadRequestException({
                message: 'Ошибка валидации',
                errors: error,
            });
        }
    }
}
