//import IConfig from "../svgs/NavBar/IScore"
import AScore from "../svgs/NavBar/AScore"
import styles from "../../styles/components/Navsup.module.css"

function Config(props) {
    return (

        <a href="/add/insig" className={styles.row}>
            <div className={styles.column}>
                <AScore></AScore>
            </div>
            <div className={styles.column}>
                <p className={styles.letra}>
                    Insignias
                </p>
            </div>
        </a>

    )
}

export default Config