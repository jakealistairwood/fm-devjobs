import styles from './Navbar.module.scss'
import LogoIcon from '../../assets/images/desktop/logo.svg'
import Switch from '../Switch'

const Navbar = ({ isToggled, onToggle, toggleTheme }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <img src={LogoIcon} alt="site-logo" />
                <Switch isToggled={isToggled} onToggle={onToggle} toggleTheme={toggleTheme} />
            </div>
        </nav>
    )
}

export default Navbar
