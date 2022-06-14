import HeaderComponent from "./components/ui/HeaderComponent";
import TaskList from "./components/tasklist/TaskList";
import AddTaskModal from "./components/newtask/AddTaskModal";
import noTasks from "./assets/images/noTasks.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const showFormHandler = (value) => {
    setIsAddFormOpen(value);
  };
  const searchFilterHandler = (value) => {
    setSearchParam(value);
} 
  const saveTaskHandler = (task) => {
    setTasks((previousTasks) => {
      return [...previousTasks, task];
    });
  };
  const deleteTaskHandler =(taskIndex)=>{
    setTasks((previousTasks) =>{
      const updatedTasks = previousTasks.filter((task,index) => index !== taskIndex );
        return updatedTasks;
    });

  }
  return (
    <div className="h-screen min-h-screen ">
      {isAddFormOpen && (
        <AddTaskModal
          onCloseFormClick={showFormHandler}
          onSaveTask={saveTaskHandler}
        />
      )}
      <div className="text-xl h-full font-bold flex flex-col gap-2 container mx-auto rounded-xl shadow-2xl py-3">
        <HeaderComponent onSearchFilter={searchFilterHandler}
          onAddFormButtonClick={showFormHandler} 
        ></HeaderComponent>
        {tasks.length > 0 && <TaskList tasks={tasks} searchParam = {searchParam} onDeleteTask={deleteTaskHandler}></TaskList>}
        {tasks.length === 0 && (
          <div className="w-full h-full  flex flex-col justify-top mt-16 items-center gap-0">
            <div className="h-36 w-52  ">
              <img src={noTasks} alt="no tasks avatar" />
            </div>
            <div className="text-base flex flex-col items-center  text-slate-400">
              <span>Welcome to your task board!</span>
              <span className="text-center">Let's get you started and more organized!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
