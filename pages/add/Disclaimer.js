import styles from '../../styles/courses/Profile.module.css';
import Construccion from '../components/Construccion';
//import React from 'react';
import Footer from '../components/Footer';

export default function Disclaimer() {

    return (
        <div className={styles.container}>
        
            <main className={styles.main}>
            <div style={{'padding':'5vw'}}>
              
            <h1 style={{'fontFamily':'Kg-second-chances',
        'fontSize':'32px',
        'textAlign':'center'}}>Disclaimer </h1> <br></br> <br></br>
            <p style={{'fontFamily':'Nunito-Semibold',
        'fontSize':'18pt'}}>
                                La información publicada en este sitio web no es información oficial del
                                Gobierno de estados Unidos y no representa los puntos de vista o posiciones de
                                la Agencia de Estados Unidos para el Desarrollo Internacional (USAID), del
                                gobierno de los Estados Unidos, ni de la Organización Internacional para las
                                Migraciones (OIM).
                            </p> 
                            <img style={{'padding':'5vw'}} src="/svg/Personajes-computador.svg"></img>
        </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
