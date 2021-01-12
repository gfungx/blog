import { PrismaClient } from '@prisma/client';

export declare module globalThis {
  let prisma: PrismaClient;
}
