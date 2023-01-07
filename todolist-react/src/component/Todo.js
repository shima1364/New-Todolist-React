import React from "react";
const Todo =({text , todo, todos , setTodos})=> {
    const deletHandler = () => {

        setTodos(todos.filter((el) => el.id!== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed:!item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button>
                <i className="fas fa-check"/>
            </button>
            <button onClick={deletHandler} className="trash-btn">
                <i className="fa fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;