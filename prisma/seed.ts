import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function generateId(length = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

async function main() {
  const user1 = await prisma.dT_USER.upsert({
    where: { nik: '000000001' },
    update: {},
    create: {
      nik: '000000001',
      nama: 'Budi',
      password: 'hashed_password_1',
      no_telp: '081234567890',
      email: 'budi@example.com',
    },
  });

  const user2 = await prisma.dT_USER.upsert({
    where: { nik: '000000002' },
    update: {},
    create: {
      nik: '000000002',
      nama: 'Ani',
      password: 'hashed_password_2',
      no_telp: '082345678901',
      email: 'ani@example.com',
    },
  });

  const projectId = generateId();
  const invitationId = generateId();
  await prisma.dT_PROJECT.create({
    data: {
      id: projectId,
      name: 'Project Alpha',
    },
  });
  const invitation1 = await prisma.dT_INVITATION.create({
    data: {
      id: invitationId,
      ID_PROJECT: projectId,
      from: user1.nik,
      to: user2.nik,
      status: true,
    },
  });

  await prisma.dT_PROJECT_MEMBER.createMany({
    data: [
      {
        id: generateId(),
        nik_user: user1.nik,
        role_project: 'LEADER',
        is_invitation: false,
        ID_INVITATION: null,
        projectId: projectId,
      },
      {
        id: generateId(),
        nik_user: user2.nik,
        role_project: 'STAFF',
        is_invitation: true,
        ID_INVITATION: invitation1.id,
        projectId: projectId,
      },
    ],
  });
}

main()
  .then(() => {
    console.log('✅ Seeding success!');
  })
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
