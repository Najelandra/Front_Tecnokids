import styles from "../../styles/components/Navsup.module.css"
import AHab from "../svgs/NavBar/AHab"

function Habilidades(props) {
    return (
        <div style={{'backgroundColor':props.active2}}>
        <a className={styles.row} href="/add/hab">
            <div className={styles.column}>
                <AHab></AHab>
            </div>
            <div className={styles.column}>
                <p className={styles.letra}>
                    Habilidades
                </p>
            </div>
        </a>
        </div>
    )
}

export default Habilidades