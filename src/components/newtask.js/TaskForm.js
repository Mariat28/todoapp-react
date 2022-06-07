import AddTask from "./AddTask";
const TaskForm = (props) => {
  const closeFormHandler =(value)=>{
    props.onCloseFormClick(value);
  }
  const AddTaskHandler =(task)=>{
    console.log('task form new task', task);
    props.onSaveTask(task);
    props.onCloseFormClick(false);
  }
  return(
    <div>
      <AddTask onCloseButtonClick = {closeFormHandler} onAddTask = {AddTaskHandler}/>
    </div>

  )
}
export default TaskForm;