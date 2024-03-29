import {useState} from 'react'

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === '') return;
    setTodo('');
    setTodos(currentArray => [toDo, ...currentArray])
  }

  return (
    <div>
      <h1>My ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="write your todo..." />
      <button>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
