import { useState, useEffect } from 'react'
import styles from './JobDetails.module.scss'
import styled from 'styled-components'

const StyledMain = styled.main`
    background-color: ${props => props.theme.cardBg}
`

const StyledHeader = styled.div`
    background-color: ${props => props.theme.cardBg}
`

const StyledButton = styled.button`
    background-color: ${props => props.theme.buttonBgColor};
    color: ${props => props.theme.buttonTextColor};

    &:hover {
        background-color: ${props => props.theme.buttonHoverColor};
    }
`

const StyledFooter = styled.footer`
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
                    <div className={styles.jobDetails__headerContent}>
                        <div>
                            <h3>{job.company}</h3>
                            <p>{website}.com</p>
                        </div>
                        <a href={job.website}>
                            <StyledButton className={styles.secondaryBtn}>Company Site</StyledButton>
                        </a>
                    </div>
                </StyledHeader>
                <StyledMain className={styles.jobDetails__content}>
                    <section className={styles.jobDetails__contentHeader}>
                        <div>
                            <p className={styles.jobDetails__contract}>{job.postedAt} . {job.contract}</p>
                            <h2>{job.position}</h2>
                            <p className={styles.jobDetails__location}>{job.location}</p>
                        </div>
                        <button className={styles.primaryBtn}>Apply Now</button>
                    </section>
                    <section className={styles.jobDetails__description}>
                        <p>{job.description}</p>
                        <div className={styles.jobDetails__requirements}>
                            <h4>Requirements</h4>
                            <p>{job.requirements && job.requirements.content}</p>
                            <ul>
                                {job.requirements && job.requirements.items.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.jobDetails__role}>
                            <h4>Who we're looking for</h4>
                            <p>{job.role && job.role.content}</p>
                            <ol>
                                {job.role && job.role.items.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </section>
                </StyledMain>
            </div>
            <StyledFooter className={styles.footer}>
                <div className={styles.footer__container}>
                    <div className={styles.footer__content}>
                        <h3>{job.position}</h3>
                        <p>{job.company}</p>
                    </div>
                    <button className={styles.primaryBtn}>Apply Now</button>
                </div>
            </StyledFooter>
        </>
    )
}

export default JobDetails
