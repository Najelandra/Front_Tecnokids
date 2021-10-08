import IScore from "../svgs/NavBar/IScore"
import AScore from "../svgs/NavBar/AScore"
import styles from "../../styles/components/Navsup.module.css"

{/** function Score(props) {
    return (
        <a href="/courses/score">

            <div className={styles.row}>
                <div className={styles.column}>
                    {props.active != "2" && <IScore></IScore>
}
                    {props.active == "2" && <AScore></AScore>
}
                </div>
                <div className={styles.column}>
                    <p className={styles.letra}>
                        Teknokers
                    </p>
                </div>
            </div>

        </a>

    )
} */}

function Score(props) {
    return (

        <AScore></AScore>

        )
    }

export default Score