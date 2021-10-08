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

function ListaInsigniasBloq(props) {
    return (
        <div
            className={styles.row}
            style={{
            'padding': '1vw',
            'textAlign': 'center',
            'fontFamily': 'Nunito-Semibold'
        }}>
            <p>{props.description}</p>
            <br></br>
        </div>
    )
}

function ListaInsignias(props) {
    return (
        <div>
            <div className={styles.espacioinsignia}>
                <img className={styles.imginsignia} src={props.url}></img>
            </div>
            <h3
                style={{
                'fontFamily': 'Kg-second-chances',
                'fontSize': '21px'
            }}>{props.name}</h3>

        </div>
    )
}

function ListCourses(props) {
    const [list1,
        setList1] = useState("");
    function validateReq() {
        const router = useRouter();
    }
    return (
        <div style={{
            'textAlign': 'center'
        }}>
            <br></br>
            <h2
                style={{
                'fontFamily': 'Kg-second-chances',
                'color': '#4386C6',
                'fontSize': '18pt'
            }}>Lo encuentras en:</h2>
            <br></br>
            <h3
                style={{
                'fontFamily': 'Kg-second-chances',
                'fontSize': '21px'
            }}>{props.n_course}</h3>
            <div >
                <img
                    style={{
                    'width': '30%',
                    'marginLeft': '35%'
                }}
                    src="/cc1gif1.gif"></img>
                <br></br>
                <h3
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '21px',
                    'color': '#4386C6'
                }}>{props.n_leccion}</h3>
            </div>
            <br></br>
            {/** <strong>PERTENECE A:
INGENIERÍA, DISEÑO, ARTE Y CREACIÓN
</strong> */}
        </div>
    )
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id_insig: '',
            img: '',
            titulo: '',
            titulo_insignia: '',
            descripcion: '',
            insignias: '',
            n_leccion: '',
            n_course: ''
        };

    }
    componentDidMount(prevProps) {
        var self = this;

        // Obtener id del usuario guardado en session storage
        var id = '';

        if (typeof window !== 'undefined') {

            id = sessionStorage.getItem('insig_detail');
            self.setState({id_insig: id});

        }

        setTimeout(() => {
            //obtener la informacion de los proyectos desde moodle
            const urlUserData = `${process.env.HOST}${process.env.get_insignias_by_id}${self.state.id_insig}`;
            const optionsUserData = {
                method: 'GET'
            };
            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('insignia', data.insignias);
                    self.setState({titulo_insignia: data.insignias[0].titulo});
                    self.setState({img: data.insignias[0].img});
                    self.setState({descripcion: data.insignias[0].descripcion});
                    self.setState({n_leccion: data.insignias[0].n_leccion});
                    self.setState({n_course: data.insignias[0].n_course});

                })
                .catch((error) => {
                    console.log(error);
                });

        }, 500);

    }
    render() {
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
                        'border': '1.9px solid black',
                        'backgroundColor': 'black'
                    }}></hr>

                    <ListaInsignias name={this.state.titulo_insignia} url={this.state.img}></ListaInsignias>
                    <ListaInsigniasBloq description={this.state.descripcion}></ListaInsigniasBloq>

                    <hr
                        style={{
                        'border': '1.9px solid black',
                        'backgroundColor': 'black'
                    }}></hr>
                    <ListCourses n_course={this.state.n_course} n_leccion={this.state.n_leccion}></ListCourses>
                    <hr
                        style={{
                        'border': '1.9px solid black',
                        'backgroundColor': 'black'
                    }}></hr>
                </main>
                <Footer></Footer>
            </div>
        )
    }

}
