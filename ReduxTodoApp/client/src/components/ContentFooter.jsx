import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { changeActiveFilter,clearCompleted,selectTodos,selectActiveFilter } from '../redux/todos/todosSlice'
import { clearCompletedTodosAsync } from '../redux/todos/services'
const ContentFooter = () => {
    const dispatch=useDispatch();
    const items=useSelector(selectTodos)     //useSelector(state=> state.todos.items)
    const itemsLeft=items.filter(item => !item.completed).length;

    const activeFilter=useSelector(selectActiveFilter)  //useSelector(state=> state.todos.activeFilter)
    useEffect(()=>{
        localStorage.setItem('activeFilter',activeFilter)
    },[activeFilter])

  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{itemsLeft}</strong> item{itemsLeft>1 ? 's': ''} left
        </span>

        <ul className="filters">
            <li>
                <a  href="#/" 
                    className={activeFilter === 'all' ? "selected" : ''}
                    onClick={()=> dispatch(changeActiveFilter('all'))}
                    >All</a>
            </li>
            <li>
                <a  href="#/" 
                    className={activeFilter === 'active' ? "selected" : ''}
                    onClick={()=> dispatch(changeActiveFilter('active'))}
                    >Active</a>
            </li>
            <li>
                <a  href="#/" 
                    className={activeFilter === 'completed'? "selected" : ''}
                    onClick={()=> dispatch(changeActiveFilter('completed'))}
                    >Completed</a>
            </li>
        </ul>

        <button className="clear-completed" onClick={()=> dispatch(clearCompletedTodosAsync())}>
            Clear completed
        </button>
    </footer>
  )
}

export default ContentFooter