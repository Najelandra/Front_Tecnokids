import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Siguenos from './svgs/Siguenos';
import ModalLanding from './components/ModalLanding';

export function Naveg() {
    return (
        <div>
            <div className={styles.rowMob}>
                <div className={styles.row3}>
                    <div className={styles.column3b}>
                        <div >
                            <img src={'/svg/logo-celular.svg'} alt="Logo" className={styles.logohead}/>
                        </div>
                    </div>
                    <div
                        className={styles.column3b}
                        style={{
                        'padding': '1vw',
                        'paddingTop': '12vw',
                        'paddingBottom': '2vw'
                    }}>
                        <div className={styles.iniciar2}>
                            <Link href="/intro/login">
                                <a href="#" className={styles.btn1}>

                                    RETROCEDER

                                </a>
                            </Link>
                        </div>

                    </div>
                    <div className={styles.column3b}>

                        <ModalLanding></ModalLanding>

                    </div>
                </div>
            </div>
            <div
                className={styles.row6}
                style={{
                'paddingLeft': '6vw'
            }}>
                <div className={styles.column6}>

                    <img
                        src={'/svg/logo-header.svg'}
                        alt="Logo"
                        style={{
                        'width': '40%'
                    }}/>

                </div>
                <div
                    className={styles.column6}
                    style={{
                    'paddingTop': '1.5vw'
                }}>
                    <a href="#responsive-header" className={styles.botoncitosheader}>
                        CURSOS
                    </a>

                </div>
                <div
                    className={styles.column6}
                    style={{
                    'paddingTop': '1.5vw'
                }}>
                    <a href="#responsive-header" className={styles.botoncitosheader}>

                        PROYECTOS

                    </a>

                </div>

                <div
                    className={styles.column6}
                    style={{
                    'paddingTop': '1.5vw'
                }}>
                    <a href="#responsive-header" className={styles.botoncitosheader}>

                        TECNOKIDS

                    </a>

                </div>

                <div
                    className={styles.column6}
                    style={{
                    'paddingTop': '1.5vw'
                }}>
                    <a href="#responsive-header" className={styles.botoncitoselected}>

                        NUESTRO CANAL

                    </a>
                </div>
                <div
                    className={styles.column6}
                    style={{
                    'paddingTop': '1.5vw'
                }}>
                    <div className={styles.iniciar}>
                        <Link href="/intro/login" className={styles.btn1}>
                            <a href="#" className={styles.btn1}>

                                INGRESAR

                            </a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className={styles.container}>

            <Naveg></Naveg>
            <div className={styles.space1}>
                <NewDesign1></NewDesign1>
                <NewDesign2></NewDesign2>
                <NewDesign3></NewDesign3>
                <NewDesign4></NewDesign4>
                <NewDesign5></NewDesign5>
                <NewDesign6></NewDesign6>
                <NewDesign7></NewDesign7>
                <NewDesign8></NewDesign8>
            </div>
            <Terms></Terms>

        </div>
    )
}

function NewDesign1() {
    return (
        <div>

            <img
                className={styles.row6}
                src={'/svg/Banner landing Page 2-06.svg'}
                alt="Logo"/>
            <img className={styles.rowMob2} src={'/svg/banner-celular.svg'} alt="Logo"/>
            <div
                className={styles.txth1}
                style={{
                'textAlign': 'center',
                'position': 'absolute'
            }}>

                <h1 className={styles.texto1}>Descubre el universo de Tecnokids</h1>
                <br></br>
                <p className={styles.texto2}>Aventúrate en los divertidos mundos de la ciencia,
                    la electrónica y la programación.
                </p>

            </div>

        </div>
    )
}

function NewDesign2() {
    return (
        <div
            style={{
            'backgroundColor': '#F9DAD4',
            'textAlign': 'center',
            'padding': '4vw'
        }}>

            <div className={styles.texto3}>

                <p >
                    La aventura comienza con nuestros cursos
                </p>

            </div>
            <div
                className={styles.row3}
                style={{
                'paddingLeft': '5vw',
                'paddingRight': '5vw',
                'paddingTop': '1vw'
            }}>
                <div
                    className={styles.column3}
                    style={{
                    'padding': '3vh',
                    'paddingTop': '2vw',
                    'paddingBottom': '2vw'
                }}>
                    <div >
                        <img src={'/svg/Landing page Tecknokids plataforma-03.svg'} alt="Logo"/>
                    </div>
                </div>
                <div
                    className={styles.column3}
                    style={{
                    'padding': '3vh',
                    'paddingTop': '2vw',
                    'paddingBottom': '2vw'
                }}>
                    <div >
                        <img src={'/svg/Landing page Tecknokids plataforma-04.svg'} alt="Logo"/>
                    </div>
                </div>
                <div
                    className={styles.column3}
                    style={{
                    'padding': '3vh',
                    'paddingTop': '2vw',
                    'paddingBottom': '2vw'
                }}>
                    <div >
                        <img src={'/svg/Landing page Tecknokids plataforma-05.svg'} alt="Logo"/>
                    </div>
                </div>
            </div>
            <div className={styles.textonormal}>
                <p
                    className={styles.textonormalcentrado}
                    style={{
                    'fontFamily': 'Nunito-SemiBold'
                }}>¿Encender
                    un led? Fácil ¿Hacer un circuito? Pan comido ¿Crear un autómata? Aún más
                    divertido.
                    <br></br>
                    <strong
                        style={{
                        'fontFamily': 'Nunito-Bold'
                    }}>
                        ¡Dale corriente a tus inventos con los cursos Tecnokids!</strong>
                </p>
                <a href="/intro/login">
                    <button className={styles.botoneslanding}>¡Comienza ahora!</button>
                </a>
            </div>

        </div>
    )
}

function NewDesign3() {
    return (
        <div
            style={{
            'backgroundColor': '#FFDA83',
            'paddingLeft': '4vh',
            'paddingRight': '4vh'
        }}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <section className={styles.comp1}>
                        <div className={styles.texto4}>
                            <p>¿Quiénes son tus compañeros de aventura?</p>
                        </div>
                        <div className={styles.textonormal}>
                            <p>
                                <br></br>
                                <strong
                                    style={{
                                    'fontFamily': 'Nunito-Bold'
                                }}>   ¡Ellos son Ledticia, Gregorio y Roberto!   </strong>
                                Tres robots súper curiosos que te acompañarán a explorar cada mundo de nuestro
                                universo.
                                <br></br><br></br>
                                 Estos amigos tienen alma de ciencia, arte, música y diversión
                                <strong
                                    style={{
                                    'fontFamily': 'Nunito-Bold'
                                }}>  ¡Únete a ellos y que comience la aventura!</strong>
                                <br></br>
                            </p>

                        </div>
                        <div
                            style={{
                            'textAlign': 'center'
                        }}>
                            <button className={styles.botoneslanding}>Conócelos</button>
                        </div>
                    </section>
                </div>
                <div className={styles.column}>

                    <div className={styles.row3}>
                        <div className={styles.robots1}>
                            <div
                                className={styles.column3}
                                style={{
                                'padding': '1vw',
                                'paddingTop': '2vw',
                                'paddingBottom': '2vw'
                            }}>
                                <div className={styles.imgsrobots}>
                                    <img src={'/gif/Ledticia-feliz-animada-cuadrado.gif'} alt="Logo"/>
                                    <br></br>
                                    <h3
                                        style={{
                                        'fontFamily': 'Kg-second-chances',
                                        'color': '#E1262F',
                                        'fontSize': '18pt'
                                    }}>Ledticia</h3>

                                </div>
                                <p className={styles.textonormaldesc}>Altamente curiosa
                                    <br></br>
                                    y muy divertida.</p>
                            </div>
                            <div
                                className={styles.column3}
                                style={{
                                'padding': '1vw',
                                'paddingTop': '2vw',
                                'paddingBottom': '2vw',
                             
                            }}>
                                <div className={styles.imgsrobots}>
                                    <img src={'/gif/Gregorio-celebra-animado-cuadrado.gif'} alt="Logo"/>
                                    <br></br>
                                    <h3
                                        style={{
                                        'fontFamily': 'Kg-second-chances',
                                        'color': '#E1262F',
                                        'fontSize': '18pt',
                                        
                                    }}>Gregorio</h3>
                                    <p className={styles.textonormaldesc} style={{   'paddingLeft': '2vw'}}>Muy recursivo
                                        <br></br>y buen lector.</p>
                                </div>
                            </div>
                            <div
                                className={styles.column3}
                                style={{
                                'padding': '1vw',
                                'paddingTop': '2vw',
                                'paddingBottom': '2vw'
                            }}>
                                <div className={styles.imgsrobots}>
                                    <img src={'/gif/Roberto-saluda-animado.gif'} alt="Logo"/>
                                    <br></br>
                                    <h3
                                        style={{
                                        'fontFamily': 'Kg-second-chances',
                                        'color': '#E1262F',
                                        'fontSize': '18pt'
                                    }}>Roberto</h3>
                                    <p className={styles.textonormaldesc}>Visionario y algo tímido.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

function NewDesign4() {
    return (

        <div
            className={styles.row2}
            style={{
            'backgroundColor': '#183E41',
            'textAlign': 'center'
        }}>

            <div
                className={styles.column2}
                style={{
                'backgroundColor': '#4386C6'
            }}>
                <section className={styles.nuevatemp1}>
                    <br></br>
                    <div className={styles.texto5}>
                        <h3>¡Nueva temporada en YouTube!</h3>
                    </div>
                    <div >
                        <h4
                            style={{
                            'color': 'white',
                            'fontFamily': 'Nunito-Bold',
                            'fontSize': '18pt',
                            'marginTop': '2vh',
                            'marginBottom': '2vh'
                        }}>¿Quién dijo que aprender sobre tecnología es difícil?</h4>

                        <br></br>
                        <p className={styles.textonormalblanco}>
                            En la nueva temporada de Tecnokids, Conectando el Mundo, aprenderás súper fácil
                            conceptos para hacer experimentos divertidos en casa.
                        </p>
                        <br></br>
                    </div>
                    <a href="https://www.youtube.com/channel/UCfzU-
VBt3DrBfpS97AK0oUNg">
                        <button className={styles.botoneslanding}>Ver canal</button>
                    </a>

                </section>
            </div>

            <div className={styles.column2}>
                <div
                    style={{
                    'backgroundColor': '#183E41',
                    'padding': '6vh'
                }}>
                    <br></br>
                    <iframe
                        width="100%"
                        className={styles.video1}
                        src="https://www.youtube.com/embed/ZrKVNUmk0k4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    <br></br>

                </div>
            </div>
        </div>

    )
}

function NewDesign5() {
    return (
        <div
            style={{
            'backgroundColor': '#E66869',
            'textAlign': 'center',
            'padding': '5vh'
        }}>

            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.marcovideo1}>

                        <iframe
                            width="100%"
                            src="https://www.youtube.com/embed/ITSTArGBQyw"
                            title="YouTube video player"
                            frameBorder="10"
                            height="315"
                            className={styles.video2}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>

                    </div>
                </div>
                <div className={styles.column}>
                    <section className={styles.quees}>
                        <div className={styles.texto7}>
                            <p>¿Qué es Tecnokids?</p>
                        </div>
                        <div className={styles.marcovideo1}>
                            <p
                                className={styles.textonormalblanco}
                                style={{
                                'fontFamily': 'Nunito-SemiBold'
                            }}>
                                Desde el 2015, hemos viajado por toda Colombia visitando ciudades, municipios,
                                veredas y corregimientos para desarrollar diferentes proyectos educativos con
                                niñas, niños, jóvenes y adolescentes.
                            </p>
                            <br></br>
                            <p
                                className={styles.textonormalblanco}
                                style={{
                                'fontFamily': 'Nunito-SemiBold'
                            }}>
                                Con Tecnokids queremos que todas las personas sepan que la tecnología no es algo
                                lejano y desconocido. En cada uno de nuestros hogares, comunidades y territorios
                                la utilizamos como un instrumento para mejorar nuestra calidad de vida.

                            </p>
                            <br></br>
                            <button className={styles.botoneslanding}>Conócenos</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
function NewDesign6() {
    return (
        <div
            style={{
            'textAlign': 'center',
            'verticalAlign': 'center'
        }}>
            <div className={styles.row2}>
                <div
                    className={styles.column2}
                    style={{
                    'backgroundColor': '#F7C402'
                }}>
                    <section className={styles.superkit1}>
                        <div className={styles.texto4}>

                            <p>¡Súper Kit Tecnológico!</p>

                        </div>
                        <div className={styles.textonormal}>
                            <p >
                                Mete las manos en la masa con tu propio laboratorio en casa. ¡El Súper Kit
                                Tecnológico es todo lo que necesitas para navegar en el Universo Tecnokids!
                                <br></br>
                                <br></br>
                                Juega con una variedad de componentes electrónicos y digitales como leds,
                                resistencias, sensores y mucho más. Aprenderás electrónica y programación en la
                                práctica.
                            </p>

                            <button className={styles.botoneslanding}>Descúbrelo aquí</button>
                        </div>
                    </section>
                </div>
                <div
                    className={styles.column2}
                    style={{
                    'backgroundColor': '#C2E1E7',
                    'textAlign': 'center',
                    'position': 'relative'
                }}>

                    <img className={styles.masqueunacaja} src={'/masqueunacaja.png'} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

function NewDesign7() {
    return (
        <div
            style={{
            'backgroundColor': 'white',
            'paddingBottom': '3vw',
            'textAlign': 'center'
        }}>
            <section className={styles.dream1}>
                <br></br>
                <p className={styles.texto8}>¿Quiénes hacen posible este sueño?</p>

                <br></br>
                <div className={styles.textonormal2}>
                        <p
                            style={{
                            'textAlign': 'center',
               
                        }}>El
                            Universo Tecnokids no sería posible sin el apoyo de las siguientes
                            organizaciones</p>
                    </div>

            </section>
           
            <div className={styles.row3}>
                <section
                    style={{
                    'paddingLeft': '5vw',
                    'paddingRight': '5vw'
                }}>
                    <div className={styles.column3}>
                        <div className={styles.imgscursos}>
                            <img src={'/logof1.png'} alt="Logo"/>
                        </div>
                    </div>
                    <div className={styles.column3}>
                        <div className={styles.imgscursos}>
                            <img src={'/logof2.png'} alt="Logo"/>
                        </div>
                    </div>
                    <div className={styles.column3}>
                        <div className={styles.imgscursos}>
                            <img src={'/logof3.png'} alt="Logo"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

function NewDesign8() {
    return (
        <div
            style={{
            'backgroundColor': '#7DC4CA',
            'paddingTop': '2vw',
            'paddingBottom': '2vw',
            'textAlign': 'center',
            'padding': '5vh'
        }}>
            <div className={styles.row4}>
                <div className={styles.column4}>

                    <img className={styles.logotk1} src={'/svg/logo.svg'} alt="Logo"/>

                </div>
                <div className={styles.column4anch}>
                    <div className={styles.cajitatxtfoot}>
                        <div >
                            <br></br>
                            <p>
                                La información publicada en este sitio web no es información oficial del
                                Gobierno de estados Unidos y no representa los puntos de vista o posiciones de
                                la Agencia de Estados Unidos para el Desarrollo Internacional (USAID), del
                                gobierno de los Estados Unidos, ni de la Organización Internacional para las
                                Migraciones (OIM).
                            </p>
                            <br></br>
                        </div>
                    </div>
                </div>

                <div className={styles.column4}>
                    <div className={styles.logotk1}>
                        <Siguenos titulo="true"></Siguenos>

                    </div>

                </div>
            </div>

        </div>
    )
}

function Terms() {
    const containerStyles = {
        color: 'white',
        width: '100%',
        fontFamily: 'Nunito-Semibold',
        backgroundColor: '#3A7DC6'
    }
    return (
        <div style={containerStyles}>

            <div className={styles.row}>
                <div className={styles.alfoot}>
                    <div className={styles.column}>
                        <a href="/add/Terms">Términos y condiciones</a>
                    </div>
                    <div className={styles.column}>
                        <p>Copyright Tecnokids ®</p>
                    </div>
                </div>
            </div>

        </div>
    )
}