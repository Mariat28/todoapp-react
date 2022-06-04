import {IoAdd} from 'react-icons/io5';
import Button from './components/ui/Button';
import TaskList from './components/tasklist/TaskList';
import './App.css';

function App() {
  return (
    <div className="text-xl font-bold container mx-auto rounded-xl shadow-2xl h-screen p-3">
      <div className="flex justify-between w-full">
        <div className="text-purple-900">1st June 2022</div>
        <div className='flex justify-center'>Todo App</div>
        <Button title= 'Add Task' icon= {<IoAdd/>} type='button'></Button>
      </div>
      <div className='mt-2'>
          <TaskList></TaskList>
        </div>
    </div>
  );
}

export default App;
