export default function page({ params }: any) {
  return (
    <div>
      <h2>Todo</h2>
      <p>{decodeURIComponent(params.name)}</p>
    </div>
  )
}
