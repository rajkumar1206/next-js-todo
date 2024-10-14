// 'use client';

// import onSubmit from "@/lib/actions";
import { revalidatePath } from "next/cache";
import { FormEvent } from "react";
// import Form from 'next/form'

export default function createTodos() {

  async function onSubmit(event: FormData) {
    'use server'
    // 'use server';
    // event.preventDefault();
    

    // @ts-ignore
    const name = event.get('name');


    const res = await fetch(
      'http://localhost:3000/api/todos',
      {method: 'POST', body: JSON.stringify({ name })}
    )

    await res.json();

    revalidatePath('/', 'layout')
  } 

  return (
    <div>
      <h2>Create Todo</h2>
      <form action={onSubmit}>
        <input type="text" name="name" id="name" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
