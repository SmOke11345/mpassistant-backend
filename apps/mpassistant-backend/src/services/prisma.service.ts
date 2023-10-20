import { Injectable, OnModuleInit } from '@nestjs/common';
// НЕЗАБЫВАТЬ СМОТРЕТЬ НА IMPORT, ОБЫЧНО ОН ЗДЕСЬ КАСЯЧИТ
import { PrismaClient } from '@prisma/client';

// нужен для автоматического подключения к базе дынных
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
}
