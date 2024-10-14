'use server'

import Link from "next/link";

export default async function todos() {
  const res = await fetch(
    'http://localhost:3000/api/todos',
    { cache: 'no-store', next: { revalidate: 0 } }
  );
  const todos: any[] = await res.json();

  return (
    <div>
      <ul>
        {todos.map((todo: any) => <li key={todo.name}><Link href={`/todo/${todo.name}`}>{todo.name}</Link></li>)}
      </ul>
    </div>
  )
}
