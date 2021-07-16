import { useState, useEffect, useContext } from 'react'
import styles from './Home.module.scss'
import JobListings from '../../components/JobListings'
import Searchbar from '../../components/Searchbar'
import DataContext from '../../context/dataContext'

const Home = () => {

    const { jobs, loading } = useContext(DataContext)

    return (
        <main className={styles.home}>
            <div className={styles.container}>
                <Searchbar />
                {loading ? <h2>Please wait while we load the latest job listings.</h2> : <JobListings jobs={jobs} />}
            </div>
        </main>
    )
}

export default Home
