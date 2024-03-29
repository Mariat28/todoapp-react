import {GoSearch} from 'react-icons/go';
const SearchComponent = (props) => {
    const inputChangeHandler=(event)=>{
        props.onSearchItemChange(event.target.value);
    }
return(
    <div className="rounded-md flex gap-2 p-1 shadow-sm h-10 items-center border border-gray-200 focus-within:border-purple-500 focus-within:transition-all ease-in duration-200">
        <GoSearch className='text-purple-500 text-base'/>
        <input type="search" className='outline-none bg-slate-50 h-full text-base' placeholder='search task' onChange={inputChangeHandler} />
    </div>
)
}
export default SearchComponent;