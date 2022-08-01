import {IoAdd, IoLogOutOutline} from 'react-icons/io5';
import SearchComponent from './SearchComponent';
import Button from './Button';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const HeaderComponent =(props)=>{
    const ctx = useContext(AuthContext);
    const AddFormHandler = () => {
        props.onAddFormButtonClick(true);
    }
    const searchItemChangeHandler =(searchItem)=>{
        props.onSearchFilter(searchItem);
    }
    return(
    <div className="flex justify-between w-full p-2 border-b mb-4 shadow-lg">
        <div className="text-purple-900">1st June 2022</div>
        <div className='flex justify-center '>Todo App</div>
        <div className='flex gap-2 items-center'>
            <SearchComponent onSearchItemChange={searchItemChangeHandler}/>
            <Button title= 'Add Task' icon= {<IoAdd/>} type='button' onClick={AddFormHandler}>Add Task</Button>
            <IoLogOutOutline className='text-purple-600 cursor-pointer' onClick={ctx.onLogout}/>
        </div>
    </div>
    )
}
export default HeaderComponent;