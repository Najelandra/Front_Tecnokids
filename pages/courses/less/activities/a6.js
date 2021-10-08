import styles from '../../../../styles/courses/A2.module.css';
import React, { useState } from 'react';
import LessonNav from '../../../components/LessonNav';
import router, { useRouter } from 'next/router';
import Retroalimentacion from '../../../components/Retroalimentacion';
// import Dialogos from '../../../components/Dialogos';
import Btn from '../../../components/Btn'

function Titulo(props) {
    let image = props.image;
    let activity_icon = props.activity_icon;
    let title = props.title;
    return (
        <div>
            <div className={styles.row3}>
                <section className={styles.contgen2a}>
                    <div className={styles.column3a}>
                        <img  style={{'height':'100px'}}  src={image}></img>
                    </div>
                    <div className={styles.column3b}>
                        <img  style={{'height':'100px'}}  src={activity_icon}></img>
                    </div>
                    <div className={styles.column3}>
                        <h2 className={styles.elempart}>
                            {title}
                        </h2>
                    </div>
                </section>
            </div>

        </div>
    )
}

function Encabezado(props) {
    let title = props.title;
    let header_image = props.header_image;
    let separator = props.separator;
    let descriptive_previus = props
        .descriptive_text
        .replace(/<strong>/g, `<strong style="font-family: 'Nunito-Bold'">`)
        .replace(/<p>/g, `<p style="text-align:center;font-family: 'Nunito-Semibold'; font-size:16pt">`);
    let image = props.image;
    let activity_icon = props.activity_icon;
    return (
        <div>
            <div>
                {/**  <Dialogos texto={dialogo1}></Dialogos> */}
                <img src={header_image}></img>
                <br></br>
                <Titulo title={title} image={image} activity_icon={activity_icon}></Titulo>
                <img src={separator}></img>
            </div>
            <br></br>{' '}
            <div className="grid gitem sm:grid-cols-1 gap-1">

                <div
                    dangerouslySetInnerHTML={{
                        __html: descriptive_previus
                    }} />

            </div>
        </div>
    )
}

class ButtonCt extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        return (
            <a className={styles.btnCont} href="./a7">
                <a onClick={() => this.handleClick()} href="./a7">
                    <strong>
                        CONTINUAR
                    </strong>
                </a>
            </a>
        );
    }
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

            isToggleOn: false,
            btnActive: false,
            message: '',
            incorrect_message: '',
            correct_message: '',
            idUser: '',
            activity: false,
            activityResult: 0,
            progress: 80,
            lesson: 0,
            idCourse: '',
            user_lesson: 0,
            lesson_position: 0,
            lesson_id:0,
            course_position: '',
            user_course: '',
            height: '400',
            insignia:0,
        };
        this.handleClick = this
            .handleClick
            .bind(this);

        this.checkActivityStatus = this
            .checkActivityStatus
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
        let course_position = ''

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
            const urlUserData = `${process.env.HOST}${process.env.get_user_info}${this.state.idUser}&lessonid=${this.state.lesson_id}`;
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
            const urlUserData = `${process.env.HOST}${process.env.get_activity_content}&lessonid=${this.state.lesson_position}&activityid=6&courseid=${this.state.idCourse}&userid=${this.state.idUser}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);
                    self.setState({ title: data.titulo });
                    self.setState({ descriptive_text: data.texto_descriptivo });
                    self.setState({ activity_icon: data.icono_actividad });
                    self.setState({ header_image: data.imagen_cabecera });
                    self.setState({ image: data.imagen });
                    self.setState({ separator: data.separador });
                    self.setState({ type_activity: data.tipo_actividad });
                    self.setState({ id_activity: data.idactividad });
                    self.setState({ embedded: data.embed });
                    self.setState({ height: data.height });
                    if(data.height != '')
                    {
                        self.setState({ height: data.height });
                    }
                    if (self.state.id_activity != '') {

                        self.getFeedback();

                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);


    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    getFeedback() {
        var self = this;
        //obtener feedback activity
        const urlUserData = `${process.env.HOST}${process.env.get_feedbacks}${self.state.id_activity}`;

        const optionsUserData = {
            method: 'GET'
        };

        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response.json();
        })
            .then(function (data) {

                self.setState({ correct_message: data.correcto });
                self.setState({ incorrect_message: data.incorrecto });
                console.log(self.state.correct_message)
                if (self.state.correct_message != '') {
                    self.checkActivityStatus();
                }

            })
            .catch((error) => {
                console.log(error);
            });

    }
    checkActivityStatus() {

        //Peticion verificar si termina ejercicio {/** !prevState.isToggleOn */}
        var self = this;
        const urlUserData = `${process.env.HOST}${process.env.get_activity_status}${this.state.id_activity}&userid=${this.state.idUser}`;

        const optionsUserData = {
            method: 'GET'
        };

        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response.json();
        })
            .then(function (data) {

                console.log("datastatus", data)
                //get feedbacks

                //Estado de la actividad 
                if (data.user_activity_status[0].status == "True") {
                    self.setState({ activityStatus: true });
                } else {
                    self.setState({ activityStatus: false });
                }


                if (data.user_activity_status[0].value == "10.00000/10.00000") {
                    self.setState({ activityResult: "1" });
                    self.setState({ message: self.state.correct_message })
                } else if (data.user_activity_status[0].status == "True" && data.user_activity_status[0].value == "") {

                    self.setState({ activityStatus: false });

                } else if (data.user_activity_status[0].status == "True" && data.user_activity_status[0].value != "10.00000/10.00000") {
                    
                    self.setState({ activityResult: "0" });
                   
                    self.setState({ message: self.state.incorrect_message })
                }



            })
            .catch((error) => {
                console.log(error);
            });


    }
    sendLessionProgress() {

        var progress = 100;
        //Si el curso es superior no registra progreso en este punto
        if (this.state.course_position < this.state.user_course) {
            
            router.push('./a7');
            return;
        }
        
        //Si el curso del usuario es igual al de la posicion revisar lecciones
        if(this.state.course_position == this.state.user_course)
        {
            //Si la leccion es superior a la actual no debe registrar progreso
            if (this.state.lesson_position < this.state.user_lesson) {
                
                router.push('./a7');
                return;
            }

            if (this.state.progress == 100) {
                progress = this.state.progress;
            }
        }
        //peticion verificar ejercicio terminado
        const urlUserData = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_progress_user&userid=${this.state.idUser}&lessonid=${this.state.lesson_position}&progress=${progress}&course_id=${this.state.user_course}&insignia=${this.state.insignia}`;
        const optionsUserData = {
            method: 'GET'
        };
        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response
                .text()
                .then(function (text) {
                    console.log(text);
                    if (text == "actividad registrada") {
                        router.push('./a7')
                    }
                });
        });
        //
    }
    render() {
        let backAct = <div></div>;
        let feedback = <div></div>;

        if (this.state.idUser != '') {
            backAct = <BackAct urlEmbed={this.state.embedded} alto={this.state.height}></BackAct>;
        }
        if (this.state.message != '') {
            feedback = <Retroalimentacion
                result={this.state.activityResult}
                message={this.state.message}></Retroalimentacion>;
        }
        return (
            <div className={styles.container}>
                <LessonNav completed={this.state.progress} prev="./a5"></LessonNav>
                {this.state.activityStatus == false && <main className={styles.main}>

                    <Encabezado
                        title={this.state.title}
                        header_image={this.state.header_image}
                        separator={this.state.separator}
                        descriptive_text={this.state.descriptive_text}
                        activity_icon={this.state.activity_icon}
                        image={this.state.image}></Encabezado>
                    {backAct}

                    <div onClick={this.checkActivityStatus}>
                        <Btn texto="Comprobar" tipo="0"></Btn>
                    </div>
                </main>}
                {this.state.activityStatus == true && <main
                    className={styles.main}
                    style={{
                        'textAlign': 'center'
                    }}>

                    {feedback}

                    <a href="#!" onClick={() => this.sendLessionProgress()}>
                        <Btn texto="Continuar" tipo="0"></Btn>
                    </a>

                </main>}
            </div>

        );
    }
}

function BackAct(props) {
    return (
        <iframe
            style={{
                'marginTop': '30px'
            }}
            src={props.urlEmbed}
            width="100%"
            height={props.alto}
            frameBorder="0"
            allowFullScreen="allowFullScreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="H5P"></iframe>

    )
}
