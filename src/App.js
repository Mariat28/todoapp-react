import HeaderComponent from './components/HeaderComponent';
import TaskList from './components/tasklist/TaskList';
import './App.css';

function App() {
  return (
    <div className="text-xl font-bold flex flex-col gap-2 container mx-auto rounded-xl shadow-2xl h-screen p-3">
      <HeaderComponent/>
      <TaskList></TaskList>

    </div>
  );
}

export default App;
