import styles from '../../styles/intro/Hab.module.css';
import Points from '../components/Points';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ProgHabCrea from '../components/ProgHabCrea';
import Footer from '../components/Footer';

/**
 * @version 1.0
 * @author Creatvra
 * Listing courses
 * @function Hab
 *
 */

function Hab1Crea(props) {
    const skills = props.skill;
    const [ver,
        setVer] = useState(false);
    return (
        <div style={{
            'paddingLeft': '3%',
            'paddingTop':'20px',
            'paddingBottom':'20px',
            //'border':'3px solid red'
        }}>
            <div
                className={styles.row}
                style={{
                    'padding': '1vh',
                    'cursor': 'pointer'
                }}
                onClick={() => setVer(!ver)}>
                <div className={styles.column1}>
                    <img
                        style={{
                            'width': '15vh'
                        }}
                        src="/svg/creatividad.svg"></img>
                </div>
                <div
                    className={styles.column2}
                    style={{
                        'paddingLeft': '2vw',
                        'textAlign': 'left'
                    }}>
                    <h2
                        style={{
                            'fontFamily': 'Kg-second-chances',
                            'color': '#4386C6',
                            'fontSize': '2.4vh',
                            'marginTop': '0.7vw'
                        }}>Creatividad
                        <span
                            style={{
                                'marginLeft': '2vw'
                            }}>{skills}%</span>
                    </h2>

                    <p
                        style={{
                            'fontFamily': 'Nunito-Bold'
                        }}>Tu porcentaje acumulado</p>

                    <ProgHabCrea habilidad="#4386C6" completed={skills}></ProgHabCrea>


                </div>
            </div>
            {ver == true && <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'textAlign': 'center',
                    'fontFamily': 'Nunito-Semibold'
                }}>
                <p>
                    Tienes el superpoder de convertir ideas y conceptos conocidos en fantásticas soluciones originales. ¡WOW!
                </p>
            </div>}

        </div>
    )
}

function Hab2Rec(props) {
    const skills = props.skill;
    const [ver,
        setVer] = useState(false);
    return (
        <div style={{
            'paddingLeft': '3%',
            'paddingTop':'20px',
            'paddingBottom':'20px',
            //'border':'3px solid red'
        }}>
            <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'cursor': 'pointer'
                }}
                onClick={() => setVer(!ver)}>
                <div className={styles.column1}>
                    <img
                        style={{
                            'width': '15vh'
                        }}
                        src="/svg/recursividad.svg"></img>
                </div>
                <div
                    className={styles.column2}
                    style={{
                        'paddingLeft': '2vw',
                        'textAlign': 'left'
                    }}>
                    <h2
                        style={{
                            'fontFamily': 'Kg-second-chances',
                            'color': '#4386C6',
                            'fontSize': '2.4vh',
                            'marginTop': '0.7vw'
                        }}>Recursividad
                        <span
                            style={{
                                'marginLeft': '2vw'
                            }}>{skills}%</span>
                    </h2>

                    <p
                        style={{
                            'fontFamily': 'Nunito-Bold'
                        }}>Tu porcentaje acumulado</p>
                    <ProgHabCrea habilidad="#E66868" completed={skills}></ProgHabCrea>
                </div>
            </div>
            {ver == true && <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'textAlign': 'center',
                    'fontFamily': 'Nunito-Semibold'
                }}>
                <p>
                    Si alguien tiene un problema, tu habilidad para encontrar soluciones comienza a brillar. La recursividad te ayuda a identificar recursos en medio del caos.
                </p>
            </div>}
        </div>
    )
}

function Hab3Aut(props) {
    const skills = props.skill;
    const [ver,
        setVer] = useState(false);
    return (
        <div style={{
            'paddingLeft': '3%',
            'paddingTop':'20px',
            'paddingBottom':'20px',
            //'border':'3px solid red'
        }}>
            <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'cursor': 'pointer'
                }}
                onClick={() => setVer(!ver)}>
                <div className={styles.column1}>
                    <img
                        style={{
                            'width': '15vh'
                        }}
                        src="/svg/autonomia.svg"></img>
                </div>
                <div
                    className={styles.column2}
                    style={{
                        'paddingLeft': '2vw',
                        'textAlign': 'left'
                    }}>
                    <h2
                        style={{
                            'fontFamily': 'Kg-second-chances',
                            'color': '#4386C6',
                            'fontSize': '2.4vh',
                            'marginTop': '0.7vw'
                        }}>Autonomía
                        <span
                            style={{
                                'marginLeft': '2vw'
                            }}>{skills}%</span>
                    </h2>

                    <p
                        style={{
                            'fontFamily': 'Nunito-Bold'
                        }}>Tu porcentaje acumulado</p>
                    <ProgHabCrea habilidad="#F7C401" completed={skills}></ProgHabCrea>
                </div>
            </div>
            {ver == true && <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'textAlign': 'center',
                    'fontFamily': 'Nunito-Semibold'
                }}>
                <p>
                    No solo eres capaz de establecer límites y reglas, también eres muy hábil para tomar decisiones. ¡Piensas, sientes y analizas tu entorno!
                </p>
            </div>}
        </div>
    )
}

function Hab4Cur(props) {

    const skills = props.skill;
    const [ver,
        setVer] = useState(false);
    return (
        <div style={{
            'paddingLeft': '3%',
            'paddingTop':'20px',
            'paddingBottom':'20px',
            //'border':'3px solid red'
        }}>
            <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'cursor': 'pointer'
                }}
                onClick={() => setVer(!ver)}>
                <div className={styles.column1}>
                    <img
                        style={{
                            'width': '15vh'
                        }}
                        src="/svg/curiosidad.svg"></img>
                </div>
                <div
                    className={styles.column2}
                    style={{
                        'paddingLeft': '2vw',
                        'textAlign': 'left'
                    }}>
                    <h2
                        style={{
                            'fontFamily': 'Kg-second-chances',
                            'color': '#4386C6',
                            'fontSize': '2.4vh'
                        }}>Curiosidad
                        <span
                            style={{
                                'marginLeft': '2vw'
                            }}>{skills}%</span>
                    </h2>

                    <p
                        style={{
                            'fontFamily': 'Nunito-Bold'
                        }}>Tu porcentaje acumulado</p>
                    <ProgHabCrea habilidad="#7CC4CA" completed={skills}></ProgHabCrea>
                </div>
            </div>
            {ver == true && <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'textAlign': 'center',
                    'fontFamily': 'Nunito-Semibold'
                }}>
                <p>
                    Tu habilidad para navegar entre cientos de preguntas te llevará a encontrar las respuestas. Investiga y experimenta, ¡hay un universo de conocimientos por descubrir!
                </p>
            </div>}
        </div>
    )
}

function Hab5Exp(props) {
    const skills = props.skill;
    const [ver,
        setVer] = useState(false);
    return (
        <div style={{
            'paddingLeft': '3%',
            'paddingTop':'20px',
            'paddingBottom':'20px',
            //'border':'3px solid red'
        }}>
            <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'cursor': 'pointer'
                }}
                onClick={() => setVer(!ver)}>
                <div className={styles.column1}>
                    <img
                        style={{
                            'width': '15vh'
                        }}
                        src="/svg/experimentacion.svg"></img>
                </div>
                <div
                    className={styles.column2}
                    style={{
                        'paddingLeft': '2vw',
                        'textAlign': 'left'
                    }}>
                    <h2
                        style={{
                            'fontFamily': 'Kg-second-chances',
                            'color': '#4386C6',
                            'fontSize': '2.4vh',
                            'marginTop': '0.7vw'
                        }}>Experimentación
                        <span
                            style={{
                                'marginLeft': '2vw'
                            }}>{skills}%</span>
                    </h2>

                    <p
                        style={{
                            'fontFamily': 'Nunito-Bold'
                        }}>Tu porcentaje acumulado</p>
                    <ProgHabCrea habilidad="#E66868" completed={skills}></ProgHabCrea>
                </div>
            </div>
            {ver == true && <div
                className={styles.row}
                style={{
                    'padding': '1vw',
                    'textAlign': 'center',
                    'fontFamily': 'Nunito-Semibold'
                }}>
                <p>
                    Eres de las personas que no se queda con la duda y sale a explorar el mundo. ¡Fija tus variables y que comience la investigación!
                </p>
            </div>}
        </div>
    )
}

export default class Hab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            btnActive: false,
            idUser: 0,
            skill: 0,
            user_course: '',
            user_lesson: '',
            total_lesson: 0,
            username: '',
            creatividad: '',
            recursividad: '',
            autonomia: '',
            curiosidad: '',
            experimentacion: '',
        };

    }
    componentDidMount(prevProps) {
        var self = this;
        var id = '';


        if (typeof window !== 'undefined') {
            id = sessionStorage.getItem('idUser');


            if (!id) {
                router.push('../../../intro/login');
            }
            self.setState({ idUser: id });

        }

        setTimeout(() => {
            //obtener la informacion del usuario
            const urlUserData = `${process.env.HOST}${process.env.get_user_info}${this.state.idUser}&lessonid=2`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);

                    self.setState({ user_course: data.user_behavior[0].courses });
                    self.setState({ user_lesson: data.user_behavior[0].lessons });
                    self.setState({ total_lesson: 1 });
                    if (data.user_behavior[0].courses == "1") {
                        if (data.user_behavior[0].lessons == 1) 
                        {
                            self.setState({ total_lesson: 0 });
                         
                        }
                        let countFirstCourse = parseInt(data.user_behavior[0].lessons) - 1;
                        self.setState({ total_lesson: countFirstCourse });
                    } else if (data.user_behavior[0].courses == "2") {
                        let countFirstCourse = parseInt(data.user_behavior[0].lessons) + 5;
                        self.setState({ total_lesson: countFirstCourse });
                    } else if (data.user_behavior[0].courses == "3") {
                        let countFirstCourse = parseInt(data.user_behavior[0].lessons) + 10;
                        self.setState({ total_lesson: countFirstCourse });
                    }else if (data.user_behavior[0].courses > "3")
                    {
                        self.setState({ total_lesson: 16 });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

        setTimeout(() => {
            //obtener la informacion del usuario
            const urlUserData = `${process.env.HOST}${process.env.get_skills}${this.state.total_lesson}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);
                    self.setState({ creatividad: data.creatividad });
                    self.setState({ recursividad: data.recursividad });
                    self.setState({ autonomia: data.autonomia });
                    self.setState({ curiosidad: data.curiosidad });
                    self.setState({ experimentacion: data.experimentacion });

                })
                .catch((error) => {
                    console.log(error);
                });
        }, 1000);

    }
    render() {
        return (
            <div className={styles.container}>
                <Points active="2" username={this.state.username}></Points>
                <main className={styles.main}>
                    <div
                        style={{
                            'paddingLeft': '2vw',
                            'paddingRight': '2vw'
                        }}>
                        <h1
                            style={{
                                'fontFamily': 'Kg-second-chances',
                                'color': '#4386C6',
                                'textAlign': 'center',
                                'fontSize': '2em'
                            }}>Habilidades</h1>
                        <br></br>
                        <p style={{ 'fontFamily': 'Nunito-Semibold' }}>
                            Sea en el Universo Tecnokids o en el mundo real, las habilidades te ayudan a conquistar tus sueños. ¡Gana puntos de experiencia y poténcialas al infinito!
                        </p>
                        <br></br>
                        <hr
                            style={{
                                'border': '0.1vw solid black',
                                'backgroundColor': 'black'
                            }}></hr>
                            
                        <Hab1Crea skill={this.state.creatividad}></Hab1Crea>
                        <hr
                            style={{
                                'border': '0.1vw solid black',
                                'backgroundColor': 'black'
                            }}></hr>
                        <Hab2Rec skill={this.state.recursividad}></Hab2Rec>
                        <hr
                            style={{
                                'border': '0.1vw solid black',
                                'backgroundColor': 'black'
                            }}></hr>
                        <Hab3Aut skill={this.state.autonomia}></Hab3Aut>
                        <hr
                            style={{
                                'border': '0.1vw solid black',
                                'backgroundColor': 'black'
                            }}></hr>
                        <Hab4Cur skill={this.state.curiosidad}></Hab4Cur>
                        <hr
                            style={{
                                'border': '0.1vw solid black',
                                'backgroundColor': 'black'
                            }}></hr>
                        <Hab5Exp skill={this.state.experimentacion}></Hab5Exp>
                        <hr
                            style={{
                                'border': '0.1vw solid black',
                                'backgroundColor': 'black'
                            }}></hr>

                    </div>
                </main>
                <Footer></Footer>
            </div>
        )
    }

}
