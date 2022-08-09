import NewTaskForm from "./NewTaskForm";
import ReactDOM from 'react-dom';

const TaskForm = (props) => {
  const closeFormHandler =(value)=>{
    props.onCloseFormClick(value);
  }
  const AddTaskHandler =(task)=>{
    console.log('task form new task', task);
    props.onSaveTask(task);
    props.onCloseFormClick(false);
  }
  return (ReactDOM.createPortal(
    <>
      <NewTaskForm onCloseButtonClick = {closeFormHandler} onAddTask = {AddTaskHandler}/>
    </>, document.getElementById('portal')

  ))
}
export default TaskForm;