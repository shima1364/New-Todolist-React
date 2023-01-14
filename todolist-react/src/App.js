import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './component/Form';
import ToDoList from './component/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() =>{
    filterHandler();
 }, [todos, status]);


  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;  

    }
  };
  return (
    <div className="App">
      <header>
        <h1>
          To Do List-React
        </h1>
      </header>
      <Form 
       todos={todos}
       setTodos={setTodos}
       inputText={inputText}
       setInputText={setInputText}
       setStatus={setStatus}
       
       />

      <ToDoList  filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/> 
    

    </div>
  );
};


export default App;
