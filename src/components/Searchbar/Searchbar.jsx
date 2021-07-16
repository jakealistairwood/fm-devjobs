import styles from './Searchbar.module.scss'
import SearchIcon from '../../assets/images/desktop/icon-search.svg';
import FilterIcon from '../../assets/images/desktop/icon-location.svg';
import styled from 'styled-components'

const StyledSearch = styled.form`
    background-color: ${props => props.theme.cardBg}
`

const StyledDiv = styled.div`
    border-right: 1px solid ${props => props.theme.borderRight}
`

const Searchbar = () => {
    return (
        <StyledSearch className={styles.search}>
            <StyledDiv className={styles.search__filterOne}>
                <img src={SearchIcon} alt="magnifying-glass" />
                <label htmlFor="searchByPosition"></label>
                <input 
                    type="text"
                    id="searchByPosition"
                    placeholder="Filter by title, companies, expertise..."
                />
            </StyledDiv>
            <StyledDiv className={styles.search__filterTwo}>
                <img src={FilterIcon} alt="pin-icon" />
                <label htmlFor="filterByLocation"></label>
                <input 
                    type="text"
                    id="filterByLocation"
                    placeholder="Filter by location..."
                />
            </StyledDiv>
        </StyledSearch>
    )
}

export default Searchbar
