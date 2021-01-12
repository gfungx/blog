import { PrismaClient } from '@prisma/client';

declare module globalThis {
  let prisma: PrismaClient;
}

export * from '@prisma/client';
export default function prisma(): PrismaClient {
  globalThis.prisma = globalThis.prisma || new PrismaClient();
  return globalThis.prisma;
}
