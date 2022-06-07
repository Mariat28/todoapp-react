import {IoAdd} from 'react-icons/io5';
import SearchComponent from './SearchComponent';
import Button from './Button';

const HeaderComponent =(props)=>{
    const AddFormHandler = () => {
        props.onAddFormButtonClick(true);
    }
    return(
    <div className="flex justify-between w-full p-2 border-b mb-4">
        <div className="text-purple-900">1st June 2022</div>
        <div className='flex justify-center '>Todo App</div>
        <div className='flex gap-2 items-center'>
            <SearchComponent/>
            <Button title= 'Add Task' icon= {<IoAdd/>} type='button' onButtonClick={AddFormHandler}></Button>
        </div>
    </div>
    )
}
export default HeaderComponent;