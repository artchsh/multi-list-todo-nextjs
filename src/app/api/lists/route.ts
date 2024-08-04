import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const body = await request.json();
  const { listName } = body;

  // Check if the list already exists
  const existingList = await prisma.todo.findFirst({
    where: { listName },
  });

  if (existingList) {
    return NextResponse.json({ error: 'List already exists' }, { status: 400 });
  }

  // Create a dummy task to represent the new list
  const dummyTask = await prisma.todo.create({
    data: {
      listName,
      title: 'Dummy Task',
      description: 'This task was created to represent the new list.',
    },
  });

  return NextResponse.json({ message: 'List created successfully', listName });
}