import TaskAvatar from "./TaskAvatar";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
const TaskListItem = (props) => {
    const deleteClickHandler = () =>{
        props.onDeleteItem(props.index);
    }
    return(
        <div className="h-full flex w-full">
           <TaskAvatar title={props.title.split(' ')}/> 
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col p-1 py-2">
                    <span className="text-lg capitalize">{props.title}</span>
                    <span className="text-sm font-normal normal-case">{props.description}</span>
                    <span className="text-sm font-normal">{props.date}</span>
                </div>
                <div className="flex p-2 gap-3 text-2xl">
                    <AiFillEdit className="text-purple-500 "/>
                    <AiFillDelete className="text-slate-400" onClick={deleteClickHandler}/>
                </div>
            </div>
        </div>
    )
};
export default TaskListItem;