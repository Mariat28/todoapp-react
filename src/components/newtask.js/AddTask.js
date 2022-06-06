import {useState} from 'react';
import { BsListTask } from 'react-icons/bs';
import {TbFileDescription} from 'react-icons/tb'
import Button from '../ui/Button';
const AddTask =(props)=>{
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const titleChangeHandler = (event) =>{
    setTaskTitle(event.target.value);
  }
  const dateChangeHandler = (event) =>{
    setTaskDate(event.target.value);
  }
  const descriptionChangeHandler = (event) =>{
    setTaskDescription(event.target.value);
  }
  const closeButtonClickHandler=()=>{
    props.onCloseButtonClick(false);
  }
  const saveTaskHandler = (event) =>{
    event.preventDefault();
    console.log(event);
  }
  return(
    <div className=" absolute inset-0 flex justify-center items-center w-screen min-w-screen h-screen min-h-screen bg-black/40">
      <div className="bg-purple-100 w-1/2 2xl:w-2/6 h-96 rounded-md relative shadow-lg">
          <div className="rounded-md h-full shadow-lg ">
            <div className="w-full bg-purple-900 h-12 flex items-center justify-between p-2 text-slate-200 font-bold text-base">
              <h2>Add New Task</h2>
              <span className="cursor-pointer"  onClick={closeButtonClickHandler}>&times;</span>
            </div>
            <form className="p-2" onSubmit={saveTaskHandler}>
              <div className='flex items-center gap-2'>
                <BsListTask/>
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="col-span-1 relative bg-white p-3 shadow-md focus-within:border-purple-500 focus-within:border-b">
                      <input type="text" placeholder="Task title" className=" bg-transparent w-full outline-none block appearance-none mt-2 " value={taskTitle} onChange={titleChangeHandler}/>
                      <label className="absolute top-0 -z-1 text-gray-100 -ml-2 mt-2 ">Task title</label>
                  </div>
                  <div className="col-span-1 relative bg-white p-3 shadow-md focus-within:border-purple-500 focus-within:border-b">
                      <input type="date" placeholder="" className=" bg-transparent mt-2 w-full outline-none block appearance-none " value={taskDate} onChange={dateChangeHandler}/>
                      <label className="absolute top-0 -z-1  -ml-2 mt-2 ">Task date</label>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2 mt-2 w-full'>
                <TbFileDescription className='text-lg'/>
                <div className='w-full'>
                  <textarea className='w-full h-32 rounded p-2 outline-none focus:border-b-purple-500 border' placeholder='Task description' value={taskDescription} onChange={descriptionChangeHandler}></textarea>
                </div>
              </div>
              <div className='absolute inset-x-0 bottom-0 flex items-center justify-between h-12 bg-purple-200 w-full p-2'>
                <button type="button"  className="w-20 flex rounded-lg uppercase justify-center text-purple-500 text-sm p-2 hover:bg-pink-400 hover:text-white bg-white" onClick={closeButtonClickHandler}>cancel</button>
                <Button title="save" type="submit" className="w-20 flex justify-center" onButtonClick={closeButtonClickHandler}  ></Button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}
export default AddTask;