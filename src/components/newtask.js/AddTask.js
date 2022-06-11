import { useState } from "react";
import { BsListTask } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";

const AddTask = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setdescriptionError] = useState("");
  const [dateError, setDateError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const titleChangeHandler = (event) => {
    setTaskTitle(event.target.value);
    setTitleError("");
    setIsValid(true);
  };
  const dateChangeHandler = (event) => {
    setTaskDate(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setTaskDescription(event.target.value);
  };
  const closeButtonClickHandler = () => {
    props.onCloseButtonClick(false);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (taskTitle.trim().length === 0) {
      setIsValid(false);
      setTitleError("Task title is required!");
      return;
    } else if (taskDate.trim().length === 0) {
      setTitleError("");
      setIsValid(false);
      setDateError("Task date is required");
      return;
    } else if (taskDescription.trim().length === 0) {
      setTitleError("");
      setDateError("");
      setdescriptionError("Task description is required!");
      return;
    } else {
      const task = {
        title: taskTitle,
        date: taskDate,
        description: taskDescription,
      };
      setTaskTitle("");
      setTitleError("");
      setTaskDescription("");
      setdescriptionError("");
      setTaskDate("");
      setDateError("");
      props.onAddTask(task);
    }
  };
  return (
    <div className="absolute inset-0 flex justify-center items-center w-screen min-w-screen h-screen min-h-screen bg-black/40">
      <div className="bg-purple-100 w-1/2 2xl:w-2/6 h-96 rounded-md relative shadow-lg">
        <div className="rounded-md h-full shadow-lg ">
          <div className="w-full bg-purple-900 h-12 flex items-center justify-between p-2 text-slate-200 font-bold text-base">
            <h2>Add New Task</h2>
            <span className="cursor-pointer" onClick={closeButtonClickHandler}>
              &times;
            </span>
          </div>
          <form className="p-2" onSubmit={onSubmitHandler}>
            <div className="flex items-center gap-2">
              <BsListTask />
              <div className="w-full grid grid-cols-2 gap-2">
                <div className="col-span-1 relative">
                  <div className={ `bg-white p-3 shadow-md focus-within:border-purple-500 focus-within:border-b ${!isValid ? ' border-red-300 border' : ''}`}>
                    <input
                      type="text"
                      placeholder="Task title"
                      className=" bg-transparent w-full outline-none block appearance-none mt-2 "
                      value={taskTitle}
                      onChange={titleChangeHandler}
                    />
                    <label className="absolute top-0 -z-1 text-gray-100 -ml-2 mt-2 ">
                      Task title
                    </label>
                  </div>
                  {titleError.length > 0 && (
                    <small className="text-red-500">{titleError}</small>
                  )}
                </div>
                <div className="col-span-1 relative">
                  <div className=" bg-white p-3 shadow-md focus-within:border-purple-500 focus-within:border-b">
                    <input
                      type="date"
                      placeholder=""
                      className=" bg-transparent mt-2 w-full outline-none block appearance-none "
                      value={taskDate}
                      onChange={dateChangeHandler}
                    />
                    <label className="absolute top-0 -z-1  -ml-2 mt-2 ">
                      Task date
                    </label>
                  </div>
                  {dateError.length > 0 && (
                    <small className="text-red-500">{dateError}</small>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 w-full">
              <TbFileDescription className="text-lg" />
              <div className="w-full">
                <textarea
                  className="w-full h-32 rounded p-2 outline-none focus:border-b-purple-500 border"
                  placeholder="Task description"
                  value={taskDescription}
                  onChange={descriptionChangeHandler}
                ></textarea>
                {descriptionError.length > 0 && (
                  <small className="text-red-500">{descriptionError}</small>
                )}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between h-12 bg-purple-200 w-full p-2">
              <button
                type="button"
                className="w-20 flex rounded-lg uppercase justify-center text-purple-500 text-sm p-2 hover:bg-pink-400 hover:text-white bg-white"
                onClick={closeButtonClickHandler}
              >
                cancel
              </button>
              <button
                title="save"
                type="submit"
                className="w-20 flex bg-purple-300 text-purple-900 p-2 items-center uppercase text-sm rounded-lg hover:bg-purple-900 hover:text-purple-300 justify-center"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
