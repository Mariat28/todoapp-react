const Card = (props) => {
  const classes = 'rounded-xl shadow-lg  border-l-2 border-purple-500 '+ props.className;
  return(
    <div className={classes}>
      <div className="min-h-full h-full">
        {props.children}
      </div>
      
    </div>
  )
}
export default Card;