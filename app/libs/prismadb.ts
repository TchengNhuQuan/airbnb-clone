import { PrismaClient } from "@prisma/client";

declare global {
 var prisma: PrismaClient | undefined
}

// INFO: NextJS 13 hot reloading can cause a bunch of this new Prisma client instances to be created giving a warning in our terminal 
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client 

export default client;