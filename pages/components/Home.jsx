import AHome from '../svgs/NavBar/Home'
import IHome from '../svgs/NavBar/IHome'
import styles from "../../styles/components/Navsup.module.css"

function Home(props) {
    return (

        <div
            className={styles.row}
           >

            <div className={styles.column}>

                <AHome></AHome>

            </div>
            <a href="/courses/main">
                <div className={styles.column}>
                    <p className={styles.letra}>
                        Cursos
                    </p>
                </div>
            </a>
        </div>

    )
}

export default Home