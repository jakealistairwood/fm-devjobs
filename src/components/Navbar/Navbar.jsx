import styles from './Navbar.module.scss'
import LogoIcon from '../../assets/images/desktop/logo.svg'
import Switch from '../Switch'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <img src={LogoIcon} alt="site-logo" />
                <Switch />
            </div>
        </nav>
    )
}

export default Navbar
