import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const rolesData: Prisma.RoleCreateInput[] = [
    {
      id: '7931683d-5ce6-4f15-8d9b-a6a0742cbc77',
      name: 'ADMIN',
    },
    {
      id: '45aa4f99-0008-4ea3-b917-34e69bc19c9a',
      name: 'ARCHITECT',
    },
    {
      id: '14563bf5-a3fd-4381-ad6d-75f7c6a10273',
      name: 'CUSTOMER',
    },
  ];

  rolesData.forEach(async (role) => {
    await prisma.role.upsert({
      where: {
        id: role.id,
      },
      create: role,
      update: role,
    });
    console.log(`Seeding role ${role.name}`);
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
