import { useState, useEffect } from 'react'
import styles from './JobDetails.module.scss'
import styled from 'styled-components'
import { concatenateToResponse } from 'workbox-streams'

const StyledMain = styled.main`
    background-color: ${props => props.theme.cardBg}
`

const StyledHeader = styled.div`
    background-color: ${props => props.theme.cardBg}
`

const JobDetails = (props) => {

    const [ job, setJob ] = useState({})

    useEffect(() => {
        setJob(props.location.state.job)
    }, [props.location.state.job])

    console.log(job)

    const logoPath = job.logo && job.logo.substring(1)

    const website = job.website && job.website.substring(20)

    return (
        <>
            <div className={styles.jobDetails}>
                <StyledHeader className={styles.jobDetails__header}>
                    <div className={styles.jobDetails__headerImg} style={{
                        backgroundColor: `${job.logoBackground}`
                    }}>
                        <img src={logoPath} alt="" />
                    </div>
                    <div className={styles.jobDetails__headerBody}>
                        <div>
                            <h3>{job.company}</h3>
                            <p>{website}.com</p>
                        </div>
                        <a href={job.website}>
                            <button className={styles.companyBtn}>Company Site</button>
                        </a>
                    </div>
                </StyledHeader>
                <StyledMain className={styles.jobDetails__content}>
                    <section className={styles.jobDetails__contentHeader}>
                        <div>
                            <p className={styles.jobDetails__jobType}>1w ago .</p>
                            <h2></h2>
                            <p className={styles.jobDetails__location}></p>
                        </div>
                        <button className={styles.primaryBtn}>Apply Now</button>
                    </section>
                    <section className={styles.jobDetails__jobDescription}>
                        <div></div>
                    </section>
                </StyledMain>
                {/* <HowToApply data={data} /> */}
            </div>
            <footer className={styles.footer}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__content}>
                        <h3></h3>
                        <p></p>
                    </div>
                    <button className={styles.primaryBtn}>Apply Now</button>
                </div>
            </footer>
        </>
    )
}

export default JobDetails
