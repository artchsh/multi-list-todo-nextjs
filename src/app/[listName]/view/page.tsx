import { prisma } from '@/lib/prisma'
import TodoList from '@/components/TodoList'


export default async function ListPage({ params }: { params: { listName: string } }) {
	const todos = await prisma.todo.findMany({
		where: { listName: params.listName },
		orderBy: { createdAt: 'desc' }
	})

	return (
		<div className='container mx-auto p-4'>
			<TodoList todos={todos} listName={params.listName} />
		</div>
	)
}
