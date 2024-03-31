import Todo from "./Todo";

function App() {
  const todos = [{data: 'todo1', id: 123}, {data: 'todo2', id: 542}, {data: 'todo3', id: 693}, {data: 'todo4', id: 826}];
  return (
    <div className="App">
      <Todo todoList = {todos}/>
    </div>
  );
}

export default App;