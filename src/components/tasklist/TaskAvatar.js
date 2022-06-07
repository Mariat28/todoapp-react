const TaskAvatar = (props) => {
    return(
        <div className=" h-full min-h-full flex items-center  p-2 ">
            <div className="rounded-lg w-20 text-3xl h-4/5  justify-center shadow-xl bg-purple-200 uppercase text-purple-900 h font-bold flex items-center">
                {props.title[0][0]}{props.title[1][0]}
            </div>                
        </div>
    )
}
export default TaskAvatar;
