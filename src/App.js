import HeaderComponent from './components/ui/HeaderComponent';
import TaskList from './components/tasklist/TaskList';
import TaskForm from './components/newtask.js/TaskForm';
import { useState } from 'react';
import './App.css';

function App() {
  const [ isAddFormOpen, setIsAddFormOpen] = useState(false);
  const showFormHandler = (value) => {
    setIsAddFormOpen(value);
      console.log('show add task form', value);
  }
  return (
    <div className='h-screen min-h-screen'>
        { isAddFormOpen && <TaskForm onCloseFormClick={showFormHandler}/>}
      <div className="text-xl h-full font-bold flex flex-col gap-2 container mx-auto rounded-xl shadow-2xl p-3">
        <HeaderComponent onAddFormButtonClick={showFormHandler}></HeaderComponent>
        <TaskList></TaskList>
      </div>
    </div>

  );
}

export default App;
