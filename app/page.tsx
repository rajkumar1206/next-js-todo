import CreateTodos from "@/components/todos/createTodos";
import Todos from "@/components/todos/todos";

export default function page() {
  return (
    <div>
      <h2>Hello World</h2>
      <Todos />
      <CreateTodos />
    </div>
  )
}
