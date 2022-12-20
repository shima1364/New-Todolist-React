import React, {useState} from 'react';
import './App.css';
import Form from './component/Form';

function App() {
  const [inputText, setInputText] = useState ("");
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <header>
        <h1>
          To Do List-React
        </h1>
      </header>
      <Form todos={todos} setTodos={setTodos}
       setInputText = {setInputText}
       inputText = {inputText} />
    

    </div>
  );
};


export default App;
