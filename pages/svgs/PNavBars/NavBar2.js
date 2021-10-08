/**
 * @version 1.0
 * @author Creatvra
 * Navigation Bar 100%
 * @function NavBar2
 *
 */

import styles from "../../../styles/components/LessonNav.module.css"

function NavBar2(props) {
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

export default NavBar2

function Web() {
    return (
        <img src="/svg/barra-progreso5-compu.svg"></img>
    )
}

function Mobile() {
    return (
        <img src="/svg/barra-progreso-5.svg"></img>
    )
}
