import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchAllQuotes,quotesSelector,statusSelector,errorSelector} from '../../redux/quotesSlice'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import Item from './Item'

const Quotes = () => {
    const data=useSelector(quotesSelector)
    const status=useSelector(statusSelector)
    const error=useSelector(errorSelector)
    const dispatch=useDispatch()

    useEffect(()=>{
        if(status==="idle"){
            dispatch(fetchAllQuotes())
        }
        
    },[dispatch,status])

    if(error){
        return <Error message={error}/>
    }

    return (
    <div style={{padding:10}}>
        <h3>Quotes</h3>
        {status === "loading" && <Loading/>}
        {
            status === "succeeded" && data?.map((item,index)=>(<Item key={index} item={item}/>))
        }
    </div>
  )
}

export default Quotes