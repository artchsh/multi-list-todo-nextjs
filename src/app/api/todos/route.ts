import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const body = await request.json();
  const { listName, title, description, tags } = body;

  const todo = await prisma.todo.create({
    data: {
      listName,
      title,
      description,
      tags,
    },
  });

  return NextResponse.json(todo);
}