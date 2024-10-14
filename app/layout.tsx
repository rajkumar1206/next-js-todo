import CreateTodos from "@/components/todos/createTodos";
import Link from "next/link";
// import styles from './styles.module.css';

export default function RootLayout({
  children,
}: any) {
  return (
    <html lang="en">
      <body>
        <h1>Todos App</h1>
        <nav>
          <li><Link href={'/'}>Todos</Link></li>
          <li><Link href={'/about'}>About</Link></li>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
