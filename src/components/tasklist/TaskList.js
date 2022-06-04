import Card from "../ui/Card";
const TaskList = () => {
  return(
    <div>
      <Card className="h-28 max-h-28 border-t ">
        <div className="flex justify-between">
          <div className="rounded-md shadow-xl bg-red-500 w-fit h-full font-bold flex items-center">
              CP
          </div>
        </div>
      </Card>
    </div>
  )
}
export default TaskList;