import styles from '../../styles/intro/Login.module.css'
//import Link from 'next/link';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
//import GetDataSession from '../components/hooks/Storage';
//import AHome from '../svgs/NavBar/Home'


/**
 * @version 1.0
 * @author Creatvra
 * Login Module
 * @function Login
 *
 */

export function Main() {
    const [email,
        setEmail] = useState("");
    const [password,
        setPassword] = useState("");
    const router = useRouter();
    const onSubmit = data => console.log(data);
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            validateUser();
        }
    }
    async function validateUser() {

        console.log('Us: ' + email + ' pas: ' + password)

        const url = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_oauth&username=${email}&password=${password}`
        console.log(url)
        const options = {
            method: 'GET'
        };

        await fetch(url, options)
            .then(res => res.json())
            .then(function (data) {
                console.log(data);
                if (data == 0) {
                    alert('Revisa tu usuario y contraseña')
                } else {

                    //const DataSession = GetDataSession()

                    sessionStorage.setItem('idUser', data);
                    //console.log('localstorage',localStorage.getItem('idUser'));
                    setTimeout(() => {
                        router.push("../courses/main")
                    }, 1000);

                    //  localStorage.setItem('idu', data)
                }
            })
            .catch((error) => {
                console.log(error);
                alert('Revisa tu usuario y contraseña')
            });


    }
    return (
        <div
            style={{
                'paddingLeft': '4vw',
                'paddingRight': '4vw',
                'textAlign': 'center'
            }}>
            <form className={styles.estilosForm}>
                <div className="mb-3">
                    <h1 className={styles.titulo}>Iniciar sesión</h1>

                    <input
                        style={{
                            'border': '2px solid black',
                            'borderRadius': '10px'
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="username"
                        type="text"
                        placeholder="Usuario"
                        autoComplete="on"
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-6">
                    <input
                        style={{
                            'border': '2px solid black',
                            'borderRadius': '10px'
                        }}
                        className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        onKeyDown={e => handleKeyDown(e)}
                        autoComplete="on"
                        onChange={e => setPassword(e.target.value)} />

                </div>
                <div className="" className={styles.btnsup}>

                    <a
                        href="#"
                        className={styles.btn1}
                        onClick={() => {
                            validateUser()
                        }}>
                        <strong>
                            Ingresar
                        </strong>
                    </a>


                </div>
            </form>
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
                    <div className={styles.columnfoot}>
                        <a href="/add/Terms">Términos y condiciones</a>
                    </div>
                    <div className={styles.columnfoot}>
                        <p>Copyright Tecnokids ®</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

function Apoyo() {
    return (
        <div
            style={{
                'backgroundColor': 'white',
                'paddingBottom': '3.5vh',

                'textAlign': 'center'
            }}>
            <div className={styles.main}>
                <div className={styles.row3}>
                    <div >
                        <div>
                            <br></br>
                            <p
                                style={{
                                    'textAlign': 'center'
                                }}>Con el apoyo de:</p>
                        </div>
                    </div>

                </div>
                <div className={styles.row3}>
                    <div className={styles.column3}>
                        <div >
                            <img src={'/logof1.png'} alt="Logo" />
                        </div>
                    </div>
                    <div className={styles.column3}>
                        <div >
                            <img src={'/logof2.png'} alt="Logo" />
                        </div>
                    </div>
                    <div className={styles.column3}>
                        <div >
                            <img src={'/logof3.png'} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LogoPrinc() {
    return (
        <div className={styles.row}>
            <a className={styles.column} href="/">
                <div className={styles.casita}>
                    <img  style={{'marginLeft':'10px'}} src={'/svg/home.svg'} alt="Logo"/>
                    <span className={styles.txtcasita}>  <span style={{'marginLeft':'10px'}}>PÁGINA</span>  <br></br>PRINCIPAL</span>
                </div>
            </a>
            <div className={styles.column}>
                <div className={styles.logo}>
                    <img src={'/svg/tecnokids.svg'} alt="Logo" />
                </div>
            </div>

        </div>
    )
}

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(prevProps) {

        //obtener la informacion del usuario obtener la informacion del usuario
        const urlUserData = `${process.env.HOST}${process.env.logout}`;
        const optionsUserData = {
            method: 'GET'
        };

        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response
                .text()
                .then(function (text) {
                    console.log(text);
                    if (text == "logout") {
                        sessionStorage.setItem('idUser', '');
                        //router.push("../intro/login");
                    }
                });
        });
    }
    render() {
        return (
            <div className={styles.container}>
                <div className="grid grid-cols-3 gap-1">
                    <div className={styles.colweb}></div>
                    <div className={styles.blanco}>
                        <main >
                            <LogoPrinc></LogoPrinc>
                            <div
                                style={{
                                    'textAlign': 'center',
                                    'color': 'white',
                                    'fontFamily': 'Nunito-Semibold',
                                    'fontSize': '18pt',
                                    'paddingTop': '1vw'
                                }}>

                                <strong>
                                    <strong
                                        style={{
                                            'color': '#FFDF7D',
                                            'fontFamily': 'Nunito-Bold',
                                            'padding': '1vw'
                                        }}>
                                        Ingresa tu usuario y contraseña   </strong>
                                    para que exploremos los cursos del Universo Tecnokids.
                                </strong>

                            </div>
                            <br></br>
                            <Main></Main>
                            <img style={{
                                'width': '80%',
                                'marginLeft': '10%'
                            }} src={'/svg/Personajes-computador.svg'} alt="Logo" />
                        </main>
                    </div>
                    <div className={styles.colweb}></div>

                </div>

                <Apoyo></Apoyo>


                <Terms></Terms>
            </div>
        )
    }
}


