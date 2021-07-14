import styles from './Switch.module.scss'
import SunIcon from '../../assets/images/desktop/icon-sun.svg'
import MoonIcon from '../../assets/images/desktop/icon-moon.svg'

const Switch = () => {
    return (
        <div className={styles.switch}>
            <img className={styles.sunIcon} src={SunIcon} alt="light-mode-icon" />
            <label htmlFor="themeToggle" className={styles.themeToggle}>
                <input 
                    type="checkbox"
                    id="themeToggle"
                    name="themeToggle"
                />
                <span className={styles.toggleSlider}></span>
            </label>
            <img className={styles.moonIcon} src={MoonIcon} alt="dark-mode-icon" />
        </div>
    )
}

export default Switch
