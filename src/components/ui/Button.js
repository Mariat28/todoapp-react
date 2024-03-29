// react css modules
import styles from './Button.module.css';
const Button =(props) => {
  // const classes = 'bg-purple-300 text-purple-900 p-2 flex items-center uppercase text-sm rounded-lg hover:bg-purple-900 hover:text-purple-300 '+ props.className;
  const onButtonClickHandler = () =>{
    props.onClick();
  }
  return(
    <div>
      <button className={styles.button} type={props.type} onClick={onButtonClickHandler}>{props.icon}{props.children}</button>
    </div>
  )
}
export default Button;