const Button =(props) => {
  return(
    <div>
      <button className="bg-purple-300 text-purple-900 p-2 flex items-center uppercase text-sm rounded-lg hover:bg-purple-900 hover:text-purple-300" type={props.type}>{props.icon}{props.title}</button>
    </div>
  )
}
export default Button;