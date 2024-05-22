import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    axios.get('/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  })

  const addToDoHandler = () => {
    axios.post('/api/todo', { 'title': title, 'description': desc})
      .then(res => console.log(res))
  }

  return (
    <>
     
      <div>
        <section>
           <h1 className='m-6'>Farm Stack</h1>
           <h2 className='mb-6'>Hello World!</h2>
        </section>
        <div className='m-10 card-actions'>
            <input type="text" placeholder='title'className='input input-borderd w-full max-w-xs'/>
            <input type="text" placeholder='description' className='input input-bordered w-full max-w-xs'/>
            <button value="Submit" className='btn'>Add task</button>
        </div>
        <div className="overflow-x-auto">
         
        </div>
      </div>
    </>
  )
}

export default App
