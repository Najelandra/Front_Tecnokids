import styles from "../../../styles/components/LessonNav.module.css"

/**
 * @version 1.0
 * @author Creatvra
 * Navigation Bar 60%
 * @function NavBar5
 *
 */

function NavBar5(props) {
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

export default NavBar5

function Web() {
    return (
        <img src="/svg/barra-progreso3-compu.svg"></img>
    )
}

function Mobile() {
    return (
        <img src="/svg/barra-progreso-3.svg"></img>
    )
}
