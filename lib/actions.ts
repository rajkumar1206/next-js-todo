'use server';

import { revalidatePath } from "next/cache";
import { FormEvent } from "react";

export default async function onSubmit(event: FormEvent) {
  event.preventDefault();

  // @ts-ignore
  const name = event.target.name.value;


  const res = await fetch(
    'http://localhost:3000/api/todos',
    {method: 'POST', body: JSON.stringify({ name })}
  )

  await res.json();

  // revalidatePath('/')
  // window.location.reload()
} 