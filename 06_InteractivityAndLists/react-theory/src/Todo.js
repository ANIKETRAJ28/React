import { useState } from "react";
import TodoItems from "./TodoTtems";

function Todo() {
    const [todoItems, setTodoItems] = useState([]);
    const [inputText, setInputText] = useState('');
    function deleteTodo(id) {
        let remainingTodos = todoItems.filter(todo => todo.id != id);
        setTodoItems(remainingTodos);
    }
    function editTodo(id, newTodo) {
        let updatedTodos = todoItems.map(todo => {
            if(todo.id == id) todo.data = newTodo;
            return todo;
        });
        setTodoItems(updatedTodos);
    }
    return (
        <>
            <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)}
            />
            <button 
                onClick={() => setTodoItems([...todoItems, {data: inputText, id: (new Date()).getTime()}])}
            >Add Todo</button>
            <ul>
                {todoItems.map((todo) => <TodoItems 
                                            todo={todo} 
                                            key={todo.id} 
                                            delete={() => deleteTodo(todo.id)}
                                            edit = {(newTodo) => editTodo(todo.id, newTodo)}
                                        />)}
            </ul>
        </>
    )
    // const todoItems = props.todoList.map(todo => <TodoItems key={todo.id} todo = {todo}/>);    
    // return <ul>{todoItems}</ul>
}
// function Todo(props) {
//     const todoItems = props.todoList.map((todo, index) => <li key={index}>{todo}</li>);
//     return <ul>{todoItems}</ul>
// }

export default Todo;