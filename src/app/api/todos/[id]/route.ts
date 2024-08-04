import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  await prisma.todo.delete({
    where: { id },
  });

  return NextResponse.json({ message: 'Todo deleted successfully' });
}