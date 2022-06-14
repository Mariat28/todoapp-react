import NewTaskForm from "./NewTaskForm";
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
    <div className="">
      <NewTaskForm onCloseButtonClick = {closeFormHandler} onAddTask = {AddTaskHandler}/>
    </div>

  )
}
export default TaskForm;