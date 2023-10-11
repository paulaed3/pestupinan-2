import axios from "axios"
import { useEffect , useState } from "react"

function useFetch(endpoint ,  initial) {
    const [ data , setData ] = useState (initial)

    useEffect (() => {
        const getData = axios.get (endpoint)
        getData
        .then(res => setData (res.data))
        .catch (err => console.log(err))
    }, [endpoint])

    
    
    return  {data}
}

export default useFetch