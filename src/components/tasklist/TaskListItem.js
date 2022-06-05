import TaskAvatar from "./TaskAvatar";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
const TaskListItem = () => {
    return(
        <div className="h-full flex w-full">
           <TaskAvatar/> 
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col p-1 py-2">
                    <span>Task Title</span>
                    <span className="text-sm font-normal">Task Description</span>
                    <span className="text-sm font-normal">25th May 2022</span>
                </div>
                <div className="flex p-2 gap-3 text-2xl">
                    <AiFillEdit className="text-purple-500 "/>
                    <AiFillDelete className="text-slate-400"/>
                </div>
            </div>
        </div>
    )
};
export default TaskListItem;