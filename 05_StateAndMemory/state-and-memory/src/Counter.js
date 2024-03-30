import { useState }  from 'react';
import TodoList from './TodoList';

function Counter() {
    // let x = 10;
    // function updateX() {
    //     console.log('updating x');
    //     x+=1;
    // }
    // const [count, setCount] = useState(10);
    // const [text, setText] = useState('');
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    return (
        <div>
            {/* <span id = 'counterValue'>X : {x}</span><br/>
            <span id = 'counterValue'>Count : {count}</span><br/> */}
            {/* <button onClick={updateX}>Click and Update X</button><br/>
            <button onClick={() => setCount(count+1)}>Click and Update Count</button><br/> */}
            {/* <input type='text' onChange={ (event) => setText(event.target.value)}/><br/>
            <span> {text} </span><br/> */}



            <input type='text' placeholder='todos...' onChange={ (event) => setNewTodo(event.target.value)}/><br/>
            <button onClick={() => setTodos([...todos, newTodo])} >Add</button><br/>
            <TodoList todos = {todos}/>
        </div>
    )
}

export default Counter;