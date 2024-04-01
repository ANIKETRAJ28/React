import { useState } from "react";
import './TodoItems.css'
// function handleClick(todo) {
//     alert(`${todo.data} clicked`);
// }

function TodoItems(props) {
    const [isFinished, setIsFinished] = useState(false);
    const [isEditing, setIsEditing] = useState(false)
    const [todoData, setTodoData] = useState(props.todo.data);
    return (
        <div>
            <li>
                {
                    (isEditing) ? <input type="text" value={todoData} onChange={(e) => setTodoData(e.target.value)}/>
                    : <span className={(isFinished) ? 'todo-done' : 'todo-notdone'}>
                        {props.todo.data}
                    </span>
                }
            </li>
            <button onClick={() => {
                setIsFinished(!isFinished);
                props.delete();
            }}>Done</button>
            <button onClick={() => {
                setIsEditing(!isEditing)
                props.edit(todoData);
            }}>{(isEditing) ? 'Save' : 'Edit'}</button>
        </div>
    )
}

export default TodoItems;