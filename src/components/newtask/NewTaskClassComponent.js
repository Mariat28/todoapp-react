import ReactDOM from 'react-dom';
import React from "react";
import { BsListTask } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";

class NewTaskClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.titleInputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.descriptionInputRef = React.createRef();
    this.state = {taskTitle: '', taskDate: '', taskDescription: '', titleError: '', dateError: '', descriptionError: ''
      ,isValid: true};
  }
  titleChangeHandler = (event) => {
    this.setState({
      ...this.state,
      taskTitle: event.target.value,
      isValid: true,
      titleError: ''
    });
  };
   dateChangeHandler = (event) => {
    this.setState({
      ...this.state,
      taskDate: event.target.value,
    });
  };
   descriptionChangeHandler = (event) => {
    this.setState({
      ...this.state,
      taskDescription: event.target.value,
    });
  };
   closeButtonClickHandler = () => {
    this.props.onCloseButtonClick(false);
  };
   onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.titleInputRef);
    const taskTitle = this.titleInputRef.current.value;
    const taskDescription = this.descriptionInputRef.current.value
    const taskDate = this.dateInputRef.current.value;
    if (taskTitle.trim().length === 0) {
      this.setState({
        ...this.state,
        titleError: 'Task title is required',
        isValid: false,
      });
      return;
    } else if (this.taskDate.trim().length === 0) {
      this.setState({
        ...this.state,
        titleError: '',
        isValid: false,
        dateError: 'Task date is required',
      });
      return;
    } else if (this.taskDescription.trim().length === 0) {
      this.setState({
        ...this.state,
        titleError: '',
        dateError: '',
        isValid: false,
        descriptionError: "Task date is required",
      });
      return;
    } else {
      const task = {
        title: taskTitle,
        date: taskDate,
        description: taskDescription,
      };
      this.setState({
        ...this.state,
        titleError: '',
        dateError: '',
        descriptionError: '',
      });
      this.props.onAddTask(task);
    }
  };
   Backdrop = (props) =>{
    return (
      <div className="absolute inset-0 flex justify-center z-10 items-center w-full h-full  bg-black/40">
      </div>
    )
  };

  render() {
    let Backdrop = (props) =>{
      return (
        <div className="absolute inset-0 flex justify-center z-10 items-center w-full h-full  bg-black/40">
        </div>
      )
    };
    let ModalOverlay = (props) =>{
      return (
        <div className="bg-purple-100 z-20 w-1/2 m-auto 2xl:w-2/6 h-96 fixed inset-0 align-middle rounded-md  shadow-lg">
          <div className="rounded-md h-full shadow-lg ">
            <div className="w-full bg-purple-900 h-12 flex items-center justify-between p-2 text-slate-200 font-bold text-base">
              <h2>Add New Task</h2>
              <span className="cursor-pointer" onClick={this.closeButtonClickHandler}>
                &times;
              </span>
            </div>
            <form className="p-2" onSubmit={this.onSubmitHandler}>
              <div className="flex items-center gap-2">
                <BsListTask />
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="col-span-1 relative">
                    <div className={ `bg-white p-3 shadow-md focus-within:border-purple-500 focus-within:border-b ${!this.state.isValid ? ' border-red-300 border' : ''}`}>
                      <input
                        type="text"
                        placeholder="Task title"
                        id='title'
                        className=" bg-transparent w-full outline-none block appearance-none mt-2 "
                        value={this.state.taskTitle}
                        onChange={this.titleChangeHandler}
                        ref= {this.state.titleInputRef}
                        key="titleInput"
                      />
                      <label className="absolute top-0 -z-1 text-gray-100 -ml-2 mt-2 " htmlFor='title'>
                        Task title
                      </label>
                    </div>
                    {this.titleError.length > 0 && (
                      <small className="text-red-500">{this.state.titleError}</small>
                    )}
                  </div>
                  <div className="col-span-1 relative">
                    <div className=" bg-white p-3 shadow-md focus-within:border-purple-500 focus-within:border-b">
                      <input
                        type="date"
                        id="date"
                        className=" bg-transparent mt-2 w-full outline-none block appearance-none "
                        value={this.state.taskDate}
                        onChange={this.dateChangeHandler}
                        ref={this.state.dateInputRef}
                      />
                      <label className="absolute top-0 -z-1  -ml-2 mt-2 " htmlFor='date'>
                        Task date
                      </label>
                    </div>
                    {this.state.dateError.length > 0 && (
                      <small className="text-red-500">{this.state.dateError}</small>
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
                    value={this.state.taskDescription}
                    onChange={this.descriptionChangeHandler}
                    ref={this.state.descriptionInputRef}
                  ></textarea>
                  {this.state.descriptionError.length > 0 && (
                    <small className="text-red-500">{this.state.descriptionError}</small>
                  )}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between h-12 bg-purple-200 w-full p-2">
                <button
                  type="button"
                  className="w-20 flex rounded-lg uppercase justify-center text-purple-500 text-sm p-2 hover:bg-pink-300 hover:text-white bg-white"
                  onClick={this.closeButtonClickHandler}
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
    return (
      <React.Fragment>
        {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlay-root'))}
      </React.Fragment>
    );
  }
}
export default NewTaskClassComponent;
