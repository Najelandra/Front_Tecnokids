import styles from '../../styles/courses/Profile.module.css';
import Points from '../components/Points';
import React, {useState} from 'react';
//import Profile from '../components/Profile';
import ProfileInsig1 from '../components/ProfileInsig1';
import ProfileProy1 from '../components/ProfileProy1';
import Footer from '../components/Footer';
import ModalProf from '../components/ModalProf'
import ModalSalir from '../components/ModalSalir';
import LazyLoad from 'react-lazyload';
import router, {useRouter} from 'next/router';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ' ',
            avatar: 1,
            idUser: '',
            city: '',
            institute: '',
            insignias: '',
            proyect_list: '',
            num_insiginias: 0,
            num_proyects: 0
        };
    }

    componentDidMount(prevProps) {
        var self = this;
        // get Id usuario
        var id = '';
        var self = this;
        if (typeof window !== 'undefined') {
            id = sessionStorage.getItem('idUser');

            if (!id) {
                router.push('../../../intro/login');
            }
            self.setState({idUser: id});
        }

        setTimeout(() => {
            //obtener la informacion de los proyectos desde moodle
            const urlUserData = `${process.env.HOST}${process.env.get_proyectsByUser}${this.state.idUser}`;
            const optionsUserData = {
                method: 'GET'
            };
            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('~ ~ proy', data.recursos_proyecto);
                    self.setState({proyect_list: data.recursos_proyecto});
                    self.setState({num_proyects: data.recursos_proyecto.length});

                })
                .catch((error) => {
                    console.log(error);
                });

        }, 500);

        setTimeout(() => {
            //obtener la informacion del usuario obtener la informacion del usuario
            const urlUserData = `${process.env.HOST}${process.env.get_user_info}${this.state.idUser}&lessonid=2`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);

                    self.setState({avatar: data.user_behavior[0].avatar});
                    self.setState({username: data.user_behavior[0].username});
                    self.setState({num_insiginias: data.user_behavior[0].insignia});

                })
                .catch((error) => {
                    console.log(error);
                });

        }, 500);

        setTimeout(() => {
            //obtener la informacion de los proyectos desde moodle
            const urlUserData = `${process.env.HOST}${process.env.get_all_insignias}`;
            const optionsUserData = {
                method: 'GET'
            };
            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('insignias', data.insignias);
                    self.setState({insignias: data.insignias});

                })
                .catch((error) => {
                    console.log(error);
                });

        }, 500);

        //obtener la informacion del usuario
        const urlUser = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_users_profile&userid=${id}`;
        const optionsUser = {
            method: 'GET'
        };

        const resUser = fetch(urlUser, optionsUser).then(function (response) {
            return response.json();
        })
            .then(function (data) {
                console.log('usuario', data);

                self.setState({institute: data.inst});
                self.setState({city: data.city});
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className={styles.container}>
                <Points active="3" username={this.state.username}></Points>
                <main className={styles.main}>
                    <br></br>
                    <h1 className={styles.title}>
                        Mi perfil
                    </h1>

                    <div>

                        <a href={`#!`} className={styles.courseitem}>
                            <ModalProf idUser={this.state.idUser} avatar={this.state.avatar}></ModalProf>
                        </a>

                        <BackCourses
                            username={this.state.username}
                            institute={this.state.institute}
                            city={this.state.city}></BackCourses>
                        <br></br>
                        <ModalSalir></ModalSalir>

                        <br></br>
                    </div>
                    <Options
                        insignias={this.state.insignias}
                        proyect_list={this.state.proyect_list}
                        cantIns={this.state.num_insiginias}
                        cantProy={this.state.num_proyects}></Options>
                </main>
                <Footer></Footer>
            </div>
        )
    }

}

function BackCourses(props) {

    return (
        <div className={styles.centerimg}>
            <div className={styles.datos}>
                <div className={styles.row}>
                    <div className={styles.columnname}>
                        <img className={styles.imguser} src="/imgs/user.png"></img>
                    </div>
                    <div className={styles.columnname}>
                        <p className={styles.textosback}>
                            {props.username}
                        </p>
                    </div>
                </div>
                <br></br>
                <div className={styles.row}>
                    <div className={styles.columnname}>
                        <img className={styles.imginst} src="/imgs/prof.png"></img>
                    </div>
                    <div className={styles.columnname}>
                        <p className={styles.textosback}>
                            {props.institute}
                        </p>
                    </div>
                </div>
                <br></br>
                <div className={styles.row}>
                    <div className={styles.columnname}>
                        <img className={styles.imgcity} src="/imgs/city.png"></img>
                    </div>
                    <div className={styles.columnname}>
                        <p className={styles.textosback}>
                            {props.city}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );

}

function Options(params) {
    let listaProyectos = <div></div>;
    let insignias = <div></div>;
    const [choosenoption,
        setchoosenoption] = useState(false);
    if (params.proyect_list != '') {
        listaProyectos = <ListaProyectos proyects_list={params.proyect_list}></ListaProyectos>;
    }

    if (params.insignias != '') {
        insignias = <ListaInsignias insignias={params.insignias} cantIns={params.cantIns}></ListaInsignias>;
    }

    return (
        <div style={{
            'cursor': 'pointer'
        }}>
            <div
                className={styles.divisioninsig}
                onClick={() => setchoosenoption(!choosenoption)}>
                <ProfileInsig1
                    activo={choosenoption}
                    cantIns={params.cantIns}
                    cantProy={params.cantProy}></ProfileInsig1>

            </div>

            <div
                className={styles.divisionproy}
                onClick={() => setchoosenoption(!choosenoption)}>
                <ProfileProy1
                    activo={choosenoption}
                    cantIns={params.cantIns}
                    cantProy={params.cantProy}></ProfileProy1>
            </div>

            {choosenoption == false && <div
                style={{
                'backgroundColor': '#FBE9E5',
                'padding': '5%'
            }}>
                {insignias}
            </div>
}
            {choosenoption == true && <div
                style={{
                'backgroundColor': '#FFEFCD',
                'padding': '5%'
            }}>
                {listaProyectos}
            </div>}

        </div>
    )
}

function ListaInsignias(props) {

    let num_insig = props.cantIns;
    let insignias = props.insignias;

    const items = []
    {
        insignias.map((insignia, i) => {

            if (i < num_insig) {
                items.push(
                    <div className={styles.column1} key={i + 1}>
                        <ShowInsignia
                            id={insignia.id}
                            name={insignia.insignia}
                            position={i + 1}
                            url={insignia.name}></ShowInsignia>
                    </div>
                )

            }

        })
    }

    return (
        <div className={styles.row}>
            <div>
                {items}
            </div>
        </div>
    )
}

function ShowInsignia(params) {

    function redirectToDetailsInsignia(id) {
        sessionStorage.setItem('insig_detail', id);
        router.push('../modales/insig/insigDetails');
    }

    return (
        <div
            style={{
            'position': 'absolute',
            'display': 'contents'
        }}>
            <a onClick={() => redirectToDetailsInsignia(params.id)}>
                <img className={styles.imgsinsign} src={`${params.url}`}></img>
                <p
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'width': '150px',
                    'color': '#0E153E'
                }}>{params.name}</p>
                <br></br>
            </a>
        </div>
    )
}

function ShowProyecto(params) {
    const [ver,
        setVer] = useState(false);
    return (
        <div
            style={{
            'position': 'absolute',
            'display': 'contents'
        }}>

            <a href="/add/detalleproy">
                {params.tipo == "video" && <div
                    style={{
                    'padding': '1vw 1vw 0vw 1vw'
                }}>
                    <LazyLoad width={"100%"} debounce={false} offsetVertical={200}>
                        <video
                            style={{
                            'height': '300px',
                            'width': '100%',
                            'objectFit': 'cover',
                            'borderRadius': '25px'
                        }}
                            controls>
                            <source src={`${params.id}`}/>
                        </video>

                    </LazyLoad>
                </div>}
                {params.tipo == "imagen" && <div
                    style={{
                    'padding': '1vw 1vw 0vw 1vw'
                }}>
                    <LazyLoad width={"100%"} debounce={false} offsetVertical={200}>
                        <img
                            style={{
                            'borderRadius': '25px',
                            'border': '3px solid white',
                            'height': '300px',
                            'width': '400px',
                            'objectFit': 'cover'
                        }}
                            src={`${params.id}`}></img>
                    </LazyLoad>

                </div>}
            </a>

            <div >

                <div className={styles.column1proya}>
                    <a href="/add/detalleproy">
                        <p
                            style={{
                            'fontFamily': 'Kg-second-chances',
                            'color': '#1d4c79',
                            'marginTop': '12px'
                        }}>
                            Plastilina
                        </p>
                    </a>
                </div>
                <div
                    className={styles.column1proyb}
                    style={{
                    'marginLeft': '4.5vw',
                    'marginBottom': '10px'
                }}>
                    <MeGusta name={params.name} likes={params.likes}></MeGusta>
                </div>
            </div>
        </div>
    )
}

function ListaProyectos(props) {

    let elements = "";
    if (props.proyects_list) {
        elements = new Array(props.proyects_list.length);
    } else {
        elements = new Array(1);
    }

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + props.proyects_list.length)
    console.log(props.proyects_list[0].id);
    const items = []
    for (const [index,
        value]of elements.entries()) {
        items.push(
            <div className={styles.column1} key={index}>

                <ShowProyecto
                    name={props.proyects_list[index].id}
                    id={props.proyects_list[index].name}
                    tipo={props.proyects_list[index].type}
                    likes={props.proyects_list[index].likes}></ShowProyecto>
            </div>
        )
    }

    return (
        <div className={styles.row}>
            {items}
        </div>
    )
}

function MeGusta(params) {
    const [liked,
        setliked] = useState(false);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={90}
            viewBox="0  0 181 83"
            style={{
            'cursor': 'pointer'
        }}
            onClick={() => setliked(!liked)}>
            <path
                d="M158.37 79.587H23.38c-10.97 0-19.863-8.893-19.863-19.862V23.627c0-10.968 8.892-19.861 19.863-19.861h134.99c10.97 0 19.862 8.893 19.862 19.861v36.098c0 10.969-8.892 19.862-19.863 19.862"
                fill="#4386c6"/>
            <path
                d="M158.37 76.254H33.132c-3.152 0-6.327.105-9.477 0-10.578-.359-16.67-8.195-16.806-18.316-.109-8.183 0-16.375 0-24.557 0-8.075-1.008-16.86 6.09-22.587C20.39 4.78 34.574 7.099 43.48 7.099h101.19c4.32 0 8.657-.117 12.975 0 10.58.288 17.063 7.712 17.252 18.01.167 9.042 0 18.105 0 27.149 0 2.484.095 4.984 0 7.467-.353 9.348-7.237 16.112-16.529 16.529-4.272.192-4.296 6.86 0 6.667 12.99-.584 22.707-10.171 23.196-23.196.268-7.091 0-14.24 0-21.334 0-7.46 1.127-16.286-1.697-23.376C176.22 5.86 167.569.723 157.94.433c-32.193-.974-64.563 0-96.77 0-12.374 0-24.807-.36-37.177 0C14.29.713 5.582 5.722 1.881 15.015-.824 21.805.184 29.942.184 37.1c0 7.522-.283 15.107 0 22.626.45 11.974 9.17 22.1 21.388 23.113 10.348.86 21.046.083 31.414.083H158.37c4.29 0 4.297-6.667 0-6.667"
                fill="#1d1d1b"/>
            <path
                d="M176.954 71.057l-6.671-5.305-1.05.765c-4.078 2.971-8.738 4.54-13.486 4.54H18.594c-3.563 0-6.452-4.41-6.452-9.85l.232-35.518a47.304 47.304 0 011.529-11.656l.043-.168-5.254-7.88c-3.097 2.791-5.174 7.934-5.174 13.82v43.743c0 8.859 10.452 16.039 16.256 16.039h142.202c4.026 0 13.271-3.459 15.035-8.535-.02 0-.037.005-.057.005"
                fill="#1d4c79"/>
            <path
                d="M164.274 3.766H14.026c-2.164 0-4.173 7.021-5.845 8.732l5.765 1.368 3.481-.708a34.269 34.269 0 016.88-.691l138.178.145c4.454 0 8.066 5.511 8.066 12.31l-.34 41.588 5.61 5.204c1.981-2.975 2.412-5.492 2.412-8.166V19.803c0-8.856-8.154-16.037-13.959-16.037"
                fill="#bdccea"/>
            <path
                d="M158.16 77.587H33.312c-3.142 0-6.307.11-9.45 0C12.4 77.181 5.741 68.742 5.518 57.75c-.164-8.083 0-16.188 0-24.272 0-8.526-.847-17.472 6.553-23.576 7.791-6.427 22.142-4.135 31.56-4.135h100.871c4.305 0 8.632-.124 12.936 0 11.425.327 18.576 8.377 18.795 19.535.174 8.937 0 17.894 0 26.833 0 2.455.096 4.927 0 7.38-.403 10.215-7.906 17.616-18.074 18.073-2.564.115-2.578 4.115 0 4 12.376-.556 21.595-9.672 22.074-22.073.269-7.007 0-14.073 0-21.084 0-7.161 1.126-15.77-1.53-22.605-3.426-8.812-11.736-13.806-20.97-14.06-32.104-.882-64.355 0-96.47 0-12.338 0-24.726-.322-37.06 0-9.31.244-17.678 5.113-21.157 14.06-2.541 6.537-1.528 14.46-1.528 21.328 0 7.433-.287 14.932 0 22.36.437 11.385 8.65 20.936 20.244 21.992 10.3.937 21.02.082 31.341.082H158.16c2.575 0 2.58-4 0-4"
                fill="#1d1d1b"/>
            <text
                y={52.22}
                x={88.854}
                style={{
                InkscapeFontSpecification: "Nunito-Black"
            }}
                fontWeight={900}
                fontSize={31.601}
                fontFamily="Nunito-Semibold"
                fill="#fff"
                strokeWidth={1.333}>
                {params.likes > 1 && <tspan y={52.22} x="88.854012 109.39502 129.93596">
                    {params.likes}
                </tspan>}
                {params.likes < 1 && <tspan y={52.22} x="88.854012 109.39502 129.93596">
                    0
                </tspan>}
            </text>
            <g >
                {liked == true && <path
                    d="M39.29 20.947h1.174c.066.013.131.032.196.036 1.638.102 3.184.533 4.638 1.286 2.293 1.19 4.052 2.946 5.414 5.12l.128.196c.028-.025.039-.032.047-.042l.107-.172c1.186-1.89 2.686-3.471 4.596-4.646a11.624 11.624 0 014.642-1.66c.334-.042.668-.08 1.002-.118h1.173c.073.013.144.033.217.038 2.226.142 4.271.815 6.083 2.12 2.705 1.948 4.241 4.608 4.71 7.896.053.359.083.72.123 1.08v1.539c-.009.077-.024.157-.032.237-.097 1.024-.154 2.058-.301 3.075a15.856 15.856 0 01-1.832 5.448c-1.084 1.968-2.53 3.652-4.105 5.235-1.726 1.73-3.567 3.333-5.414 4.93-3.345 2.896-6.692 5.792-9.917 8.822-.361.34-.713.692-1.07 1.038h-.04c-.033-.041-.062-.088-.1-.121-1.84-1.688-3.66-3.395-5.523-5.052-2.664-2.365-5.368-4.683-8.038-7.039-1.694-1.497-3.329-3.056-4.776-4.802-1.498-1.808-2.674-3.798-3.358-6.058-.451-1.484-.698-3.002-.798-4.548-.024-.374-.053-.75-.081-1.125v-1.62c.013-.065.035-.13.039-.196.068-1.164.284-2.305.713-3.388 1.687-4.25 4.819-6.687 9.321-7.387.352-.054.707-.082 1.062-.122"
                    fill="#e1262f"/>}
                {liked == false && <path
                    d="M39.29 20.947h1.174c.066.013.131.032.196.036 1.638.102 3.184.533 4.638 1.286 2.293 1.19 4.052 2.946 5.414 5.12l.128.196c.028-.025.039-.032.047-.042l.107-.172c1.186-1.89 2.686-3.471 4.596-4.646a11.624 11.624 0 014.642-1.66c.334-.042.668-.08 1.002-.118h1.173c.073.013.144.033.217.038 2.226.142 4.271.815 6.083 2.12 2.705 1.948 4.241 4.608 4.71 7.896.053.359.083.72.123 1.08v1.539c-.009.077-.024.157-.032.237-.097 1.024-.154 2.058-.301 3.075a15.856 15.856 0 01-1.832 5.448c-1.084 1.968-2.53 3.652-4.105 5.235-1.726 1.73-3.567 3.333-5.414 4.93-3.345 2.896-6.692 5.792-9.917 8.822-.361.34-.713.692-1.07 1.038h-.04c-.033-.041-.062-.088-.1-.121-1.84-1.688-3.66-3.395-5.523-5.052-2.664-2.365-5.368-4.683-8.038-7.039-1.694-1.497-3.329-3.056-4.776-4.802-1.498-1.808-2.674-3.798-3.358-6.058-.451-1.484-.698-3.002-.798-4.548-.024-.374-.053-.75-.081-1.125v-1.62c.013-.065.035-.13.039-.196.068-1.164.284-2.305.713-3.388 1.687-4.25 4.819-6.687 9.321-7.387.352-.054.707-.082 1.062-.122"
                    fill="#E5E5E5"/>}
            </g>
            <path
                d="M39.29 22.947c4.216 0 7.542 2.184 9.824 5.646.729 1.108 2.153 1.304 3.141.406 2.692-2.452 3.881-5.163 7.93-5.863 5.85-1.012 11.163 3.672 11.375 9.567.379 10.526-9.112 16.576-16.122 22.789-1.474 1.307-3.726 2.885-4.912 4.461 1.897 1.236 2.129 1.259.7.07l-2.754-2.535c-3.253-2.952-6.645-5.75-9.889-8.71-4.327-3.946-7.821-7.88-8.347-13.993-.508-5.926 2.696-11.108 9.054-11.838 2.528-.291 2.557-4.294 0-4C26.986 20.36 22.974 33.404 28.68 43.54c4.02 7.14 11.95 12.199 17.882 17.621 5.02 4.59 4.99 3.182 10.053-1.37 8.973-8.068 24.605-19.188 17.448-33.438-2.372-4.722-7.576-7.636-12.83-7.406-5.763.25-8.653 4.352-11.806 7.224l3.141.404c-3.096-4.702-7.574-7.628-13.278-7.628-2.575 0-2.579 4 0 4"
                fill="#1d1d1b"/> {liked == true && <path
                d="M69.334 39.057c-3.672 3.684-8.813 7.66-12.69 11.124-.96.86-1.917 1.727-2.863 2.604-.48.446-.976 1.092-1.524 1.446-.622.402-.236.46-.89-.136-1.85-1.688-3.676-3.402-5.552-5.064-3.93-3.482-8.221-6.734-11.71-10.674-3.263-3.686-3.884-7.454-3.884-12.394-2.86 4.29-2.584 10.285-.63 14.908 2.103 4.968 6.583 8.466 10.539 11.914 2.165 1.888 4.34 3.767 6.465 5.698.99.898 1.97 1.808 2.954 2.713.216.2 1.032 1.221 1.28 1.21.316-.015.865-.806 1.11-1.04 4.162-3.946 8.614-7.563 12.863-11.411 4.532-4.104 9.388-12.424 9.921-18.718-1.072 1.92-3.844 6.268-5.39 7.82"
                fill="#940a11"/>}
            {liked == false && <path
                d="M69.334 39.057c-3.672 3.684-8.813 7.66-12.69 11.124-.96.86-1.917 1.727-2.863 2.604-.48.446-.976 1.092-1.524 1.446-.622.402-.236.46-.89-.136-1.85-1.688-3.676-3.402-5.552-5.064-3.93-3.482-8.221-6.734-11.71-10.674-3.263-3.686-3.884-7.454-3.884-12.394-2.86 4.29-2.584 10.285-.63 14.908 2.103 4.968 6.583 8.466 10.539 11.914 2.165 1.888 4.34 3.767 6.465 5.698.99.898 1.97 1.808 2.954 2.713.216.2 1.032 1.221 1.28 1.21.316-.015.865-.806 1.11-1.04 4.162-3.946 8.614-7.563 12.863-11.411 4.532-4.104 9.388-12.424 9.921-18.718-1.072 1.92-3.844 6.268-5.39 7.82"
                fill="#5F5F5F"/>}
            <path
                d="M39.29 22.947c4.216 0 7.542 2.184 9.824 5.646.729 1.108 2.153 1.304 3.141.406 2.692-2.452 3.881-5.163 7.93-5.863 5.85-1.012 11.163 3.672 11.375 9.567.379 10.526-9.112 16.576-16.122 22.789-1.474 1.307-3.726 2.885-4.912 4.461 1.897 1.236 2.129 1.259.7.07l-2.754-2.535c-3.253-2.952-6.645-5.75-9.889-8.71-4.327-3.946-7.821-7.88-8.347-13.993-.508-5.926 2.696-11.108 9.054-11.838 2.528-.291 2.557-4.294 0-4C26.986 20.36 22.974 33.404 28.68 43.54c4.02 7.14 11.95 12.199 17.882 17.621 5.02 4.59 4.99 3.182 10.053-1.37 8.973-8.068 24.605-19.188 17.448-33.438-2.372-4.722-7.576-7.636-12.83-7.406-5.763.25-8.653 4.352-11.806 7.224l3.141.404c-3.096-4.702-7.574-7.628-13.278-7.628-2.575 0-2.579 4 0 4"
                fill="#1d1d1b"/>
            <path
                d="M57.13 27.336c2.445-1.337 5.42-2.196 8.005-1.152 2.11.852 3.545 1.87 4.09 5.128a11.28 11.28 0 01-.94 6.64 10.878 10.878 0 00-3.318-7.21 10.883 10.883 0 00-7.36-2.975"
                fill="#fff"/>
        </svg>
    )
}