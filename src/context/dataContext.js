import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [ loading, setLoading ] = useState(false)
    const [ jobs, setJobs ] = useState([])

    useEffect(() => {
        setLoading(true)
        const fetchJobs = async () => {
            const request = await axios.get('/data/data.json')
            setJobs(request.data)
            setLoading(false)
        }
        fetchJobs()
    }, []);

    return (
        <DataContext.Provider value={{  
            jobs,
            loading
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext