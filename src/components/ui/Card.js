const Card = (props) => {
  const classes = 'rounded-xl shadow-lg  border-l border-purple-500 '+ props.className;
  return(
    <div className={classes}>
      <div className="min-h-full h-full">
        {props.children}
      </div>
      
    </div>
  )
}
export default Card;