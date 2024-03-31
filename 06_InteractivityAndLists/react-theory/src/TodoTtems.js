import { useState } from "react";
import './TodoItems.css'
function handleClick(todo) {
    alert(`${todo.data} clicked`);
}

function TodoItems(props) {
    const [isFinished, setIsFinished] = useState(false);
    return (
        <div>
            <li /*onClick={() => handleClick(props.todo)}*/>
                <span className={(isFinished) ? 'todo-done' : 'todo-notdone'}>
                    {props.todo.data}
                </span>
            </li>
            <button onClick={() => setIsFinished(!isFinished)}>{(isFinished) ? 'ReDo' : 'Done'}</button>
        </div>
    )
}

export default TodoItems;