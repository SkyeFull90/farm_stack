import TodoItem from './Todo'

export default function TodoListView(props) {
  

  return (
    <div className="overflow-x-auto">
         <ul>
          {props.todoList.map(todo => <TodoItem todo={todo} />)}
         </ul>
    </div>
  )
}
