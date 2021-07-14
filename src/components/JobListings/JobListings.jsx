import styles from './JobListings.module.scss'
import Job from '../Job';

const JobListings = ({ jobs }) => {
    return (
        <div className={styles.grid}>
            {jobs.map(job => (
                <Job job={job} key={job.id} />
            ))}
        </div>
    )
}

export default JobListings
