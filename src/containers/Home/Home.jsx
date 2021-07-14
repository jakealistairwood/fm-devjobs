import { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import JobListings from '../../components/JobListings'
import axios from 'axios'

const Home = () => {

    const [ jobs, setJobs ] = useState([])

    useEffect(() => {
        const fetchJobs = async () => {
            const request = await axios.get('/data/data.json')
            setJobs(request.data)
        }
        fetchJobs()
    }, []);

    return (
        <main className={styles.home}>
            <div className={styles.container}>
                <JobListings jobs={jobs} />
            </div>
        </main>
    )
}

export default Home
