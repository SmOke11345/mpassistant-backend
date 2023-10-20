import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { User } from '../models/users';

@Injectable()
export class AppService {
    constructor(private prisma: PrismaService) {}

    /**
     * Получение всех пользователей
     */
    getAllUsers() {
        return this.prisma.users.findMany();
    }

    /**
     * Регистрация нового пользователя
     * @param user
     */
    register(user: User) {
        return this.prisma.users.create({
            data: { ...user },
        });
    }

    /**
     * Поиск первого e-mail, для валидации
     * @param email
     */
    validationFields(email: string) {
        return this.prisma.users.findFirst({
            where: { email },
        });
    }
}
