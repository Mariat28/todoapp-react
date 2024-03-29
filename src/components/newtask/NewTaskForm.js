import ReactDOM from 'react-dom';
import React, { useState, useRef, useEffect } from "react";
import { BsListTask } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";

const NewTaskForm = (props) => {
  const titleInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setdescriptionError] = useState("");
  const [dateError, setDateError] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(()=>{
    // descriptionInputRef.current = null;
    titleInputRef.current && titleInputRef.current.focus();
  },[taskTitle])
  useEffect(()=>{
    // titleInputRef.current = null;
    descriptionInputRef.current && descriptionInputRef.current.focus();
  },[taskDescription])
  const titleChangeHandler = (event) => {
    setTaskTitle(event.target.value);
    setTitleError("");
    setIsValid(true);
    console.log(titleInputRef.current, titleInputRef)
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
    console.log(titleInputRef);
    const taskTitle = titleInputRef.current.value;
    const taskDescription = descriptionInputRef.current.value
    const taskDate = dateInputRef.current.value;

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
      setTitleError("");
      setdescriptionError("");
      setDateError("");
      props.onAddTask(task);
    }
  };
  const ModalOverlay = (props) =>{
    return (
      <div className="bg-purple-100 z-10 w-1/2 m-auto 2xl:w-2/6 h-96 fixed inset-0 align-middle rounded-md  shadow-lg">
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
                      id='title'
                      className=" bg-transparent w-full outline-none block appearance-none mt-2 "
                      value={taskTitle}
                      onChange={titleChangeHandler}
                      ref= {titleInputRef}
                    />
                    <label className="absolute top-0 -z-1 text-gray-100 -ml-2 mt-2 " htmlFor='title'>
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
                      id="date"
                      className=" bg-transparent mt-2 w-full outline-none block appearance-none "
                      value={taskDate}
                      onChange={dateChangeHandler}
                      ref={dateInputRef}
                    />
                    <label className="absolute top-0 -z-1  -ml-2 mt-2 " htmlFor='date'>
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
                  ref={descriptionInputRef}
                ></textarea>
                {descriptionError.length > 0 && (
                  <small className="text-red-500">{descriptionError}</small>
                )}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between h-12 bg-purple-200 w-full p-2">
              <button
                type="button"
                className="w-20 flex rounded-lg uppercase justify-center text-purple-500 text-sm p-2 hover:bg-pink-300 hover:text-white bg-white"
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
    )
  };
  const Backdrop = (props) =>{
    return (
      <div className="absolute inset-0 flex justify-center z-10 items-center w-full h-full  bg-black/40">
        <ModalOverlay></ModalOverlay>
      </div>
    )
  };
  return (
    <React.Fragment>
      <Backdrop></Backdrop>
    </React.Fragment>

  );
};
export default NewTaskForm;
