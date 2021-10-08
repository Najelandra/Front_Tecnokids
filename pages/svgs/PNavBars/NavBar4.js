import styles from "../../../styles/components/LessonNav.module.css"

/**
 * @version 1.0
 * @author Creatvra
 * Navigation Bar 40%
 * @function NavBar4
 *
 */

function NavBar4(props) {
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

function Web() {
    return (
        <img src="/svg/barra-progreso2-compu.svg"></img>
    )
}

function Mobile() {
    return (
        <img src="/svg/barra-progreso-2.svg"></img>
    )
}

export default NavBar4
