
import './App.css';
import FormTodos from './Components/FormTodos';
import ListTodos from './Components/ListTodos';

const [id, setId] = useState(() => { const initId = localStorage.getItem('key') + 1 || 0; return initId; })
function handleTodoFormSubmit(formValues) {
  //get value new todo
  const newTodo = {
    id: id,
    ...formValues,
  }
  //add new todo
  //set lai id
  localStorage.setItem('key', id);
}

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>todos</h1>
        <FormTodos onSubmit={handleTodoFormSubmit} />
      </header>
      <section className='main'>
        <ListTodos todos
      </section>
    </div>
  );
}

export default App;
