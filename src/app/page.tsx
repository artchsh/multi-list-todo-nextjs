import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import CreateListForm from '@/components/CreateListForm';

export default async function Home() {
  const lists = await prisma.todo.groupBy({
    by: ['listName'],
    _count: {
      listName: true,
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Todo Lists</h1>
      <CreateListForm />
      <ul className="space-y-4 mt-8">
        {lists.map((list: { listName: string, _count: { listName: number }}) => (
          <li key={list.listName} className="flex items-center justify-between">
            <span>{list.listName} ({list._count.listName} tasks)</span>
            <div className="space-x-2">
              <Link href={`/${list.listName}`}>
                <Button variant="outline" size="sm">Edit</Button>
              </Link>
              <Link href={`/${list.listName}/view`}>
                <Button variant="outline" size="sm">View</Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}