import { prisma } from '@/lib/prisma'
import TodoList from '@/components/TodoList'
import AddTodoForm from '@/components/AddTodoForm'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function ListPage({ params }: { params: { listName: string } }) {
	const todos = await prisma.todo.findMany({
		where: { listName: params.listName },
		orderBy: { createdAt: 'desc' }
	})

	return (
		<div className='container mx-auto p-4'>
			<div className='flex justify-between items-center mb-8'>
				<h1 className='text-4xl font-bold'>{params.listName} Todo List</h1>
				<Link href={`/${params.listName}/view`}>
					<Button variant='outline'>View Only</Button>
				</Link>
			</div>
			<AddTodoForm listName={params.listName} />
			<TodoList todos={todos} listName={params.listName} />
		</div>
	)
}
