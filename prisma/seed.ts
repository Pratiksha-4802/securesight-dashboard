import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.camera.createMany({
    data: [
      { name: 'Camera 01', location: 'Vault' },
      { name: 'Camera 02', location: 'Shop Floor A' },
      { name: 'Camera 03', location: 'Entrance' },
    ],
  });

  await prisma.incident.createMany({
    data: [
      {
        cameraId: 1,
        type: 'Unauthorized Access',
        tsStart: new Date('2025-07-23T08:00:00'),
        tsEnd: new Date('2025-07-23T08:05:00'),
        thumbnailUrl: '/img/unauth-1.png',
      },
      {
        cameraId: 2,
        type: 'Gun Threat',
        tsStart: new Date('2025-07-23T10:00:00'),
        tsEnd: new Date('2025-07-23T10:05:00'),
        thumbnailUrl: '/img/gun-1.png',
      },
      // Add 10+ incidents with various timestamps and types
    ],
  });
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());
