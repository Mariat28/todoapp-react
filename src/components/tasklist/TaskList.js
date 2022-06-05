import Card from "../ui/Card";
import TaskListItem from "./TaskListItem";
const TaskList = () => {
  return(
    <div className="h-full flex flex-col gap-3">
      <Card className="h-28 max-h-28  hover:shadow-xl ">
        <TaskListItem/>
      </Card>
      <Card className="h-28 max-h-28  hover:shadow-xl ">
        <TaskListItem/>
      </Card>
      <Card className="h-28 max-h-28  hover:shadow-xl ">
        <TaskListItem/>
      </Card>
    </div>
  )
}
export default TaskList;