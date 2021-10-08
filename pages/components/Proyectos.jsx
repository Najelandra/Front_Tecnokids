//import IProfile from '../svgs/NavBar/IConfig'
import AConfig from '../svgs/NavBar/AConfig'
import styles from "../../styles/components/Navsup.module.css"

function Profile(props) {
    return (
        <a href="/add/proy">

            <div className={styles.row}>
                <div className={styles.column}>
                    <AConfig></AConfig>
                </div>
                <div className={styles.column}>
                    <p className={styles.letra}>
                        Proyectos
                    </p>
                </div>
            </div>
        </a>

    )
}

export default Profile