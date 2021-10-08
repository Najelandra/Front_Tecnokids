import styles from '../../../styles/intro/Ins.module.css';
import Points from '../../components/Points';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Footer from '../../components/Footer';

/**
 * @version 1.0
 * @author Creatvra
 * Listing courses
 * @function ListCourses
 *
 */

function ListaCategorias() {
    const [active,
        setActive] = useState(0);
    return (
        <div
            style={{
            'textAlign': 'center',
            'cursor': 'pointer',
            'padding': '1vw'
        }}>
            <h2
                style={{
                'fontFamily': 'Kg-second-chances',
                'color': '#4386C6',
                'fontSize': '31px'
            }}>Mecánica</h2>

        </div>
    )
}

function ListaInsigniasBloq() {
    return (
        <div
            className={styles.row}
            style={{
            'padding': '1vw',
            'textAlign': 'center'
        }}>
            <p>Parte de la física, ¡sí esa maravillosa ciencia!, que estudia el movimiento y
                el equilibrio de los cuerpos (cualquier cosa que ocupa espacio), así como de las
                fuerzas que los mueven o los dejan quietos.</p>
        </div>
    )
}

function ListaInsignias() {
    return (
        <div
            className={styles.row}
            style={{
            'padding': '1vw',
            'textAlign': 'center'
        }}>

            <div >
                <img
                    style={{
                    'width': '100%',
                    'paddingLeft': '12vw',
                    'paddingRight': '12vw'
                }}
                    src="/svg/Ins-0.svg"></img>
                <br></br>
                <h3
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '21px'
                }}>Mecánica</h3>
            </div>

        </div>
    )
}

function ListCourses() {
    const [list1,
        setList1] = useState("");
    function validateReq() {
        const router = useRouter();
    }
    return (
        <div style={{
            'textAlign': 'center'
        }}>
            <h2
                style={{
                'fontFamily': 'Kg-second-chances',
                'color': '#4386C6',
                'fontSize': '31px'
            }}>Lo encuentras en:</h2>
            <br></br>
            <h3
                style={{
                'fontFamily': 'Kg-second-chances',
                'fontSize': '21px'
            }}>Ciencia en casa</h3>
            <div >
                <img
                    style={{
                    'width': '100%',
                    'paddingLeft': '13vw',
                    'paddingRight': '13vw'
                }}
                    src="/cc1gif1.gif"></img>
                <br></br>
                <h3
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '21px',
                    'color': '#4386C6'
                }}>Automáta 1</h3>
            </div> <br></br>
            {/** <strong>PERTENECE A:
INGENIERÍA, DISEÑO, ARTE Y CREACIÓN
</strong> */}
        </div>
    )
}

export default function Insig() {
    return (
        <div className={styles.container}>
            <Points active2="#F69399"></Points>
            <main className={styles.main}>
                {/**  <Dialog1></Dialog1> */}
                <h3
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'color': '#E66869',
                    'textAlign': 'center',
                    'fontSize': '42px'
                }}>Insignias</h3>
                <br></br>
                <hr
                    style={{
                    'border': '1.9px solid black'
                }}></hr>
                <ListaCategorias></ListaCategorias>
                <ListaInsignias></ListaInsignias>
                <ListaInsigniasBloq></ListaInsigniasBloq>

                <hr
                    style={{
                    'border': '1.9px solid black'
                }}></hr>
                <ListCourses></ListCourses>
                <hr
                    style={{
                    'border': '1.9px solid black'
                }}></hr>
            </main>
            <Footer></Footer>
        </div>
    )
}
