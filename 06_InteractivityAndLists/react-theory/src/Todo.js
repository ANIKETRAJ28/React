import TodoItems from "./TodoTtems";

function Todo(props) {
    const todoItems = props.todoList.map(todo => <TodoItems key={todo.id} todo = {todo}/>);    
    return <ul>{todoItems}</ul>
}
// function Todo(props) {
//     const todoItems = props.todoList.map((todo, index) => <li key={index}>{todo}</li>);
//     return <ul>{todoItems}</ul>
// }

export default Todo;