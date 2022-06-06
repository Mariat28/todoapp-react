const Button =(props) => {
  const classes = 'bg-purple-300 text-purple-900 p-2 flex items-center uppercase text-sm rounded-lg hover:bg-purple-900 hover:text-purple-300 '+ props.className;
  const onButtonClickHandler = () =>{
    props.onButtonClick();
  }
  return(
    <div>
      <button className={classes} type={props.type} onClick={onButtonClickHandler}>{props.icon}{props.title}</button>
    </div>
  )
}
export default Button;