import { NextResponse, type NextRequest } from 'next/server';
import { hash } from 'bcrypt';

import prisma from '@/lib/prismadb';
import { registerSchema } from '@/lib/zod-schema';

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();
  const result = registerSchema.safeParse(body);

  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
    return new NextResponse(JSON.stringify(zodErrors), { status: 422 });
  }

  const { email, password } = result.data;
  const emailExist = await prisma.user.findUnique({
    where: { email },
  });
  if (emailExist) {
    zodErrors = { email: 'This email is already in use!' };
    return new NextResponse(JSON.stringify(zodErrors), { status: 409 });
  }

  const hashedPassword = await hash(password, 10);
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return new NextResponse();
}
