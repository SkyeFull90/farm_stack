import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')




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
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Delete Todo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Title</td>
                <td>Description</td>
                <td><button type="submit" className='btn btn-outline btn-error'>X</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
