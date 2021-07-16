import { Link } from 'react-router-dom'
import styles from './Job.module.scss'
import styled from 'styled-components'

const StyledCard = styled.div`
    background-color: ${props => props.theme.cardBg}
`

const Job = ({ job }) => {

    return (
        <Link to={{
            pathname: `job-listings/${job.id}`,
            state: {
                job: job
            }
        }}>
            <StyledCard className={styles.job}>
                <div className={styles.logoContainer} style={{
                backgroundColor: job.logoBackground
                }}>
                    <img src={job.logo} alt=""/>
                </div>
                <div className={styles.job__content}>
                    <p className={styles.job__postDate}>5h ago . Full Time</p>
                    <div className={styles.job__description}>
                        <h3>{job.position}</h3>
                        <p className={styles.job__company}>{job.company}</p>
                    </div>
                    <p className={styles.job__location}>{job.location}</p>
                </div>
            </StyledCard>
        </Link>
    )
}

export default Job
