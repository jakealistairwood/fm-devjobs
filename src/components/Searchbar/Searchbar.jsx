import styles from './Searchbar.module.scss'
import SearchIcon from '../../assets/images/desktop/icon-search.svg';
import FilterIcon from '../../assets/images/desktop/icon-location.svg';

const Searchbar = () => {
    return (
        <form className={styles.search}>
            <div className={styles.search__filterOne}>
                <img src={SearchIcon} alt="magnifying-glass" />
            </div>
        </form>
    )
}

export default Searchbar
