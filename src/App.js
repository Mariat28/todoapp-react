import HeaderComponent from "./components/ui/HeaderComponent";
import TaskList from "./components/tasklist/TaskList";
import TaskForm from "./components/newtask.js/TaskForm";
import noTasks from "./assets/images/noTasks.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const showFormHandler = (value) => {
    setIsAddFormOpen(value);
  };
  const saveTaskHandler = (task) => {
    setTasks((previousTasks) => {
      return [...previousTasks, task];
    });
  };
  return (
    <div className="h-screen min-h-screen">
      {isAddFormOpen && (
        <TaskForm
          onCloseFormClick={showFormHandler}
          onSaveTask={saveTaskHandler}
        />
      )}
      <div className="text-xl h-full font-bold flex flex-col gap-2 container mx-auto rounded-xl shadow-2xl p-3">
        <HeaderComponent
          onAddFormButtonClick={showFormHandler}
        ></HeaderComponent>
        {tasks.length > 0 && <TaskList tasks={tasks}></TaskList>}
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
