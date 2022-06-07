import Card from "../ui/Card";
import TaskListItem from "./TaskListItem";
const TaskList = (props) => {
  const tasks = [...props.tasks];
  return(
    <div className="h-full flex flex-col gap-3">
      {tasks.map((task, index) => 
      <Card className="h-28 max-h-28  hover:shadow-xl " key={index}>
        <TaskListItem key={index}
        title={task.title}
        description={task.description}
        date={task.date}
        />
      </Card>
      )}

    </div>
  )
}
export default TaskList;