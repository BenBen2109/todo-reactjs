import React, { useState } from "react";
import Button from "./components/Button";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState('')
  const [listTodos, setListTodos] = useState(() => {
    const storagTodo = JSON.parse(localStorage.getItem('listTodos'))
    return storagTodo || []
  })
  const listRender = (item, index) => (
    <li key={index}>
      {item}
      <Button
        clas
        title='Remove'
        onClick={() => handleRemoveTodo(item)}>
      </Button>
    </li>
  )
  const handleAddTodo = () => {
    setListTodos(prev => {
      const newListTodo = [...prev, todo]
      const jsonTodoList = JSON.stringify(newListTodo)
      localStorage.setItem('listTodos', jsonTodoList)
      return newListTodo
    })
    setTodo('')
  }
  const handleRemoveTodo = (item) => {
    setListTodos(prev => {
      const newListTodo = prev.filter((element) => element !== item)
      const jsonTodoList = JSON.stringify(newListTodo)
      localStorage.setItem('listTodos', jsonTodoList)
      return newListTodo
    })
  }
  const handleRemoveAll = (item) => {
    setListTodos(() => {
      const newListTodo = []
      const jsonTodoList = JSON.stringify(newListTodo)
      localStorage.setItem('listTodos', jsonTodoList)
      return newListTodo
    })
  }
  return (
    <React.Fragment>
      <div className='title-input'>Todo Input</div>
      <div className='todo-input-wrapper'>
        <input value={todo} className='input' placeholder='Enter Some Todo...' onChange={(e) => setTodo(e.target.value)} />
        <Button title='Add Some Todo'
          onClick={handleAddTodo}>
        </Button>
      </div>
      <div className='title-input'>Todo List <Button title='Remove All'
        onClick={handleRemoveAll}></Button></div>
      <div>
        <TodoList data={listTodos}>{listRender}</TodoList>
      </div>
    </React.Fragment>
  );
}

export default App;
