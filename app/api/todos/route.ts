const todos = [{name: 'buy car'}]; 

export async function GET(request: Request, response: Response) {
  return Response.json(todos);
}

export async function POST(request: Request, response: any) {
  const res = await request.json();
  console.log(res.name)
  todos.push({name: res.name});
  return Response.json({ message: 'success' });
}