import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFooter from './components/TodoFooter';



function App() {
  const [todos,setTodos] = useState([
    {
      id:Math.random(),
      text:"JavaScript",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Python",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Java",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"C++",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Php",
      isCompleted:false
    }
  ])
  return (

    <div className="App">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id:Math.random(),
            text:text,
            isCompleted:false
          }
        ])
      }}/>

      <TodoList 
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id ))
        }}

        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if(newTodo.id === todo.id) {
              return newTodo
            }
            return todo
          }))
        }}
      />

      <TodoFooter todos={todos} clearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
      }}/>  
    </div>
  );
}

export default App;
