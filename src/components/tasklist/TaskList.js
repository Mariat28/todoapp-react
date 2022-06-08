import Card from "../ui/Card";
import TaskListItem from "./TaskListItem";
const TaskList = (props) => {
  const tasks = [...props.tasks];
  let filteredTasks = [];
  if(props.searchParam !== ''){
    filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(props.searchParam.toLowerCase()));
  }else{
    filteredTasks = tasks;
  }
  const DeleteItemHandler=(index)=>{
    console.log('delete item',index);
  }
  return(
    <div className="h-full flex flex-col gap-3 p-3">
      {filteredTasks.map((task, index) => 
      <Card className="h-28 max-h-28  hover:shadow-xl " key={index}>
        <TaskListItem key={index}
        title={task.title}
        description={task.description}
        date={task.date}
        index={index}
        onDeleteItem={DeleteItemHandler}
        />
      </Card>
      )}

    </div>
  )
}
export default TaskList;