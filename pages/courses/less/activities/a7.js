import styles from '../../../../styles/courses/A2.module.css';
import React, { useState } from 'react';
import LessonNav from '../../../components/LessonNav';
//import MainActivity from '../../../svgs/MTeorico'
import { Component } from 'react';
import router, { useRouter } from 'next/router';
import Btn from '../../../components/Btn'

class Content extends Component {
    render() {
        return (
            <p className={styles.title1}>¡Completaste la lección!</p>
        );
    }
}

function Titulo(props) {
    let title = props.title
    let activity_icon = props.activity_icon;
    return (
        <div style={{  'textAlign': 'center'}}>
            <div className={styles.row2}>
            <section  className={styles.contgen2a}>
                <div className={styles.column2b}>
                    <img src={activity_icon}></img>
                </div>
                <div
                    className={styles.column2}
                    style={{
                        'color': '#E9676B',
                        'fontSize':'25pt'
                    }}>
                    <h2 className={styles.elempart}>
                        {title}
                    </h2>
                </div>
                </section>
            </div>

        </div>
    )
}

function Exp(props){

    let insignia = props.insignia;
    let insignia_name = props.insignia_name;
    let insignia_url = props.insignia_url;
    return (
            <div
                style={{
                    'textAlign': 'center',
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '41px'
                }}>
              {/**  <p className={styles.title2}>¡Has ganado una insignia!
                </p>  */}
                <br></br>
                <div>
                    <a href={insignia_url}>
                        <img
                            style={{
                                'width': '50%',
                                'paddingLeft': '4vw',
                                'paddingRight': '4vw',
                                'marginLeft': '25%'
                            }}
                            src={insignia}></img>

                        <h3
                            style={{
                                'fontSize': '21px',
                                'paddingTop': '3vw'
                            }}>
                                {insignia_name}
                        </h3>
                        <br></br>
                    </a>
                </div>
            </div>

        );
    }


export default class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            title: '',
            descriptive_text: '',
            activity_icon: '',
            header_image: '',
            image: '',
            separator: '',        
            type_activity: '',
            id_activity: '',
            embedded: '',
            activity_icon: '/imgs-png/Iconos-13.png', 
            isToggleOn: false,
            btnActive: false,
            idUser: 0,
            progress: 100,
            idCourse: '',
            lesson_position: 0,
            lesson_id:0,
            user_lesson: 0,
            course_position: '',
            user_course: '',
            id_insignia:'',
            insignia_image:'',
            insignia_title:'',
            insignia_description:'',
            insignia:0
        };
        this.handleClick = this
            .handleClick
            .bind(this);

        this.sendLessionProgress = this
            .sendLessionProgress
            .bind(this);
    }
    componentDidMount(prevProps) {
        var self = this;
        var id = '';
        let id_Course = '';
        let lesson_id = '';
        let lesson_position = '';
        let course_position = '';

        if (typeof window !== 'undefined') {

            id = sessionStorage.getItem('idUser');
            id_Course = sessionStorage.getItem('course');
            lesson_id = sessionStorage.getItem('lesson_id');
            lesson_position = sessionStorage.getItem('lesson_position');
            course_position = sessionStorage.getItem('course_position');

            if (!id) {
                router.push('../../../intro/login');
            }
            self.setState({ idUser: id });
            self.setState({ idCourse: id_Course });
            self.setState({ lesson_id: lesson_id });
            self.setState({ lesson_position: lesson_position });
            self.setState({ course_position: course_position });

        }

        setTimeout(() => {
            //obtener la informacion del usuario
            const urlUserData = `${process.env.HOST}${process.env.get_user_info}${this.state.idUser}&lessonid=${this.state.lesson_position}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    self.setState({ user_course: data.user_behavior[0].courses });
                    self.setState({ user_lesson: data.user_behavior[0].lessons });
                    self.setState({ insignia: data.user_behavior[0].insignia });

                    if (data.user_behavior[0].courses > self.state.course_position) {
                        self.setState({ progress: 100 });
                    }

                    if (data.user_behavior[0].courses == self.state.course_position) {

                        if (data.user_behavior[0].lessons > self.state.lesson_position) {
                            self.setState({ progress: 100 });
                        } else {
                            self.setState({ progress: data.user_behavior[0].progress });
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

        //Get Activity Content        
        setTimeout(() => {
            //obtener la informacion del usuario
            const urlUserData = `${process.env.HOST}${process.env.get_activity_content}&lessonid=${this.state.lesson_position}&activityid=7&courseid=${this.state.idCourse}&userid=${this.state.idUser}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                   
                    self.setState({ title: data.titulo });
                    self.setState({ descriptive_text: data.texto_descriptivo });
                    self.setState({ activity_icon: data.icono_actividad });
                    self.setState({ header_image: data.imagen_cabecera });
                    self.setState({ image: data.imagen });
                    self.setState({ separator: data.separador });
                    self.setState({ type_activity: data.tipo_actividad });
                    self.setState({ id_activity: data.idactividad });
                    self.setState({ embedded: data.embed });

                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

        //Get Insignia  Content        
        setTimeout(() => {
            //obtener la informacion del usuario
            const urlUserData = `${process.env.HOST}${process.env.get_insignias_by_lesson}${this.state.lesson_id}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
             
                    self.setState({ id_insignia: data.insignias[0].id });
                    self.setState({ insignia_image: data.insignias[0].img });
                    self.setState({ insignia_title: data.insignias[0].titulo  });
                    self.setState({ insignia_description: data.insignias[0].description });
           
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

    }
    handleClick() { }
    sendLessionProgress() {

        var progress = 100;
        var insigniaCount = parseInt(this.state.insignia);
        //Si el curso es superior no registra progreso en este punto
        if (this.state.course_position < this.state.user_course) {
            
            router.push('./a8');
            return;
        }
        //Si el curso del usuario es igual al de la posicion revisar lecciones
        if(this.state.course_position == this.state.user_course)
        {
            //Si la leccion es superior a la actual no debe registrar progreso
            if (this.state.lesson_position < this.state.user_lesson) {
                
                router.push('./a8');
                return;
            }

            
        }

        insigniaCount = insigniaCount + 1;
        //peticion verificar ejercicio terminado
        const urlUserData = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_progress_user&userid=${this.state.idUser}&lessonid=${this.state.lesson_position}&progress=${progress}&course_id=${this.state.user_course}&insignia=${insigniaCount}`;
        const optionsUserData = {
            method: 'GET'
        };
        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response
                .text()
                .then(function (text) {
                    console.log(text);
                    if (text == "actividad registrada") {
                        router.push('./a8')
                    }
                });
        });
        //
    }

    render() {
        return (
            <div className={styles.container}>
                <LessonNav completed={this.state.progress} prev="./a6"></LessonNav>
                <main className={styles.main} style={{'marginTop':'50px'}}>
          
                    <Titulo title={this.state.title} activity_icon={this.state.activity_icon}></Titulo>
                  
                    <Exp insignia={this.state.insignia_image} insignia_name={this.state.insignia_title}></Exp>

                    <a href="#!" onClick={() => this.sendLessionProgress()}>
                        <Btn texto="Continuar" tipo="0"></Btn>
                    </a>
                </main>
            </div>
        )
    }
}
