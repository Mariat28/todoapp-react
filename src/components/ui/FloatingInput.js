import { useState } from "react";
const FloatingInput = (props) => {
  const [inputValue, setInputValue] = useState('');
  const InputChangeHandler = (event) => {
      setInputValue(event.target.value);
      props.onInputChange(event.target.value);
  }

  return (
    <div className=" flex flex-col justify-center w-full relative mb-2 ">
      <input
        type={props.type}
        id={props.id}
        placeholder="Mariat Ndagire"
        className="flex-1 appearance-none bg-slate-50 rounded p-2.5 mt-2 text-sm w-full peer border border-slate-300 placeholder-transparent  shadow-sm focus:rounded-md focus:border-purple-600 focus:outline-none focus:border-0 focus:border-b"
        autoComplete="off"
        value={inputValue}
        onChange={InputChangeHandler}
      />
      <label
        htmlFor={props.id}
        className=" ml-5 top-4 absolute  -translate-y-2 -translate-x-2 peer-focus:-translate-y-2 text-gray-400 text-xs duration-300 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-7"
      >
        {props.label}
      </label>
    </div>
  );
};
export default FloatingInput;
