import styles from '../../styles/courses/Profile.module.css';
import Construccion from '../components/Construccion';
import React from 'react';
//import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default function Priv() {

    return (
        <div className={styles.container}>
        
            <main className={styles.main}>                
             
                <Construccion></Construccion>  <br></br> Próximamente leerás aquí Privacidad
            </main>
            <Footer></Footer>
        </div>
    )
}
