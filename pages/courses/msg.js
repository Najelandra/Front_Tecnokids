import styles from '../../styles/courses/Profile.module.css';
import React from "react";
import NavegSup from '../components/Tealnav';

export default function Msg() {

    return (
        <div className={styles.container}>
            <NavegSup></NavegSup>
            <main className={styles.main}>
                <div className="grid md:grid-cols-2 gap-1">
                    <div>
                        Mensaje 1
                    </div>
                    <div>
                        <span className={styles.name}>
                            Mensaje 2
                        </span>

                    </div>
                </div>

            </main>
        </div>
    )
}
