import styles from '../../styles/intro/Ins.module.css';
import Points from '../components/Points';
import React, {useState} from 'react';
import router, { useRouter } from 'next/router';
import Footer from '../components/Footer';

/**
 * @version 1.0
 * @author Creatvra
 * Listing courses
 * @function ListCourses
 *
 */

function Contenido(props) {

    let insignias = <div></div>;
    if (props.insignias_list != '') {
        insignias =  <ListaInsignias insignias_list={props.insignias_list}></ListaInsignias>;
    }

    return (
        <div>
            {insignias}
        </div>
    )
}

function ContDiseño() {
    return (
        <div style={{
            'padding': '5vw'
        }}>
            <img src="/svg/sin-insig.svg"></img>
        </div>
    )
}


function ShowInsignia(props) {

    function redirectToInsign(id) {

        sessionStorage.setItem('insig_detail',id);
        router.push('../modales/insig/insigDetails');
        
    }

    return (
        <div style={{ 'position':'absolute',
        'display':'contents',
        }} >
            <a onClick={() => redirectToInsign(props.id)} href="#!">
                <img
                     className={styles.imgsinsign}
                    src={props.url}></img>
                
                <p className={styles.nameinsign} >{props.name}</p>
                <br></br>
                <br></br>
            </a>
        </div>
    )
}



function ListaInsignias(props) {
    
    let insignias = props.insignias_list;
    const items = []
    {insignias.map((insignia, i) => {
    
        items.push(
            <div className={styles.column1} key={i}>
                <ShowInsignia url={insignia.name} name={insignia.insignia} id={insignia.id}></ShowInsignia>
            </div>
        )
    })};
    

    return (
        <div className={styles.row}>
            {items}
        </div>
    )
}

function ListCourses() {
  
    return (
        <div style={{'fontFamily':'Nunito-Semibold',
        'marginBottom':'30px',
        'fontSize':'16px',
        'marginLeft':'7vw',
        'marginRight':'7vw'}}>
            <p>Estas insignias demuestran los conocimientos que has ganado a través de la exploración del Universo Tecnokids.</p>
        </div>
    )
}

export default class Insig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img1: '35',
            img2: '45',
            idUser: '',
            username: '',
            avatar: '1',
            courses: 1,
            lessons: '0',
            activities: '0',
            progress: '0',
            insignia: '0',
            skills: '',
            insignias_list:''
        };

    }
    componentDidMount(prevProps) {
        var self = this;

        // Obtener id del usuario guardado en session storage
        var id = '';
        if (typeof window !== 'undefined') {
            id = sessionStorage.getItem('idUser');
            console.log('idUser-main', id);
            self.setState({idUser: id});
        }

        
        setTimeout(() => {
            //obtener la informacion del progreso del usuario desde moodle
            const urlUserData = `${process.env.HOST}${process.env.get_all_insignias}`;
            const optionsUserData = {
                method: 'GET'
            };
            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('insignias', data);

                    self.setState({insignias_list: data.insignias});
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

    }

    render() {
        return (
            <div className={styles.container}>
                <Points active="4" username={this.state.username}></Points>
                <main className={styles.main}>
                    {/**  <Dialog1></Dialog1>
                     *
                     *  <hr
                        style={{
                            'border': '1.9px solid black'
                        }}></hr>
                          <hr
                        style={{
                            'border': '1.9px solid black'
                        }}></hr>
                              <ListaCategorias></ListaCategorias>
                     */}
                    <h3
                        style={{
                        'fontFamily': 'Kg-second-chances',
                        'color': '#E66869',
                        'textAlign': 'center',
                        'fontSize': '2em'
                    }}>Insignias</h3>
                    <br></br>
                    <ListCourses></ListCourses>
                    <Contenido insignias_list={this.state.insignias_list}></Contenido>

                 
                    <hr
                        style={{
                        'border': '1.2px solid black',
                        'backgroundColor':'black'
                    }}></hr>
                </main>
                <Footer></Footer>
            </div>
        )
    }

}
