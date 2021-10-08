//import IProfile from '../svgs/NavBar/IConfig'
import AConfig from '../svgs/NavBar/AConfig'
import styles from "../../styles/components/Navsup.module.css"

function Profile(props) {
    return (
        <div >

            <div className={styles.row}>
                <div className={styles.column}>
                    <AConfig></AConfig>
                </div>
                <div className={styles.column}>
                    <p className={styles.letra}>
                        Avisos
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Profile