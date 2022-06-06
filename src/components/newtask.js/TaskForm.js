import AddTask from "./AddTask";
const TaskForm = (props) => {
  const closeFormHandler =(value)=>{
    props.onCloseFormClick(value);
  }
  return(
    <div>
      <AddTask onCloseButtonClick = {closeFormHandler}/>
    </div>

  )
}
export default TaskForm;