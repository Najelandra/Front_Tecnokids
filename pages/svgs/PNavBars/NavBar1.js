/**
 * @version 1.0
 * @author Creatvra
 * Navigation Bar 0%
 * @function NavBar1
 *
 */
import styles from "../../../styles/components/LessonNav.module.css"

export default function NavBar1(props) {
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
      <img src="/svg/barra-sin-progreso-compu.svg"></img>
       
    )
}


function Mobile() {
    return (
      <img src="/svg/barra-sin-progreso.svg"></img>
    )
}