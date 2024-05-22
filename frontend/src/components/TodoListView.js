import TodoItem from './Todo'

export default function TodoListView(props) {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Description</th>
        <th>Delele Todo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {props.todoList.map(todo => <TodoItem todo={todo} />)}
        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}
