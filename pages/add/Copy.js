import styles from '../../styles/courses/Profile.module.css';
import Construccion from '../components/Construccion';
// import React from 'react';
import Footer from '../components/Footer';

export default function Terms() {

    return (
        <div className={styles.container}>

            <main className={styles.main}>

                <Construccion></Construccion>
                <br></br>
                Próximamente leerás aquí el CopyRight
            </main>
            <Footer></Footer>
        </div>
    )
}
