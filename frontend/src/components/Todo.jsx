import axios from 'axios'
import react from 'react'

function TodoItem(props){
    const deleteTodoHandler = (title) => {
        axios.delete(`/api/todo/${title}`)
        .then(res => console.log(res.data))
    }
    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline'}}>{props.title} : </span> {props.description}
                <button onClick={() => deleteTodoHandler(props.todo.title)} className='btn btn-outline btn-error'>X</button>
            </p>
        </div>
    )
}

export default TodoItem;