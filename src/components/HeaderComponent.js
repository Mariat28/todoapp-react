import {IoAdd} from 'react-icons/io5';
import SearchComponent from './ui/SearchComponent';
import Button from '../components/ui/Button';

const HeaderComponent =()=>{
    return(
    <div className="flex justify-between w-full p-2">
        <div className="text-purple-900">1st June 2022</div>
        <div className='flex justify-center '>Todo App</div>
        <div className='flex gap-2 items-center'>
            <SearchComponent/>
            <Button title= 'Add Task' icon= {<IoAdd/>} type='button' className="h-12"></Button>
        </div>
    </div>
    )
}
export default HeaderComponent;