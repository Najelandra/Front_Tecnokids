import styles from "../../../styles/components/LessonNav.module.css"

/**
 * @version 1.0
 * @author Creatvra
 * Navigation Bar 20%
 * @function NavBar3
 *
 */

function NavBar3(props) {
    return (
        <div>
            <div className={styles.barra}>
                <Web></Web>
            </div>
            <div className={styles.barrita}>
                <Mobile></Mobile>
            </div>
        </div>
    )
}

export default NavBar3

function Web() {
    return (
        <img src="/svg/barra-progreso1-compu.svg"></img>
    )
}

function Mobile() {
    return (
        <img src="/svg/barra-progreso-1.svg"></img>
    )
}