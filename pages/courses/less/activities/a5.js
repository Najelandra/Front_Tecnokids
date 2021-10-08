import styles from '../../../../styles/courses/A2.module.css';
import React, {useState} from 'react';
import LessonNav from '../../../components/LessonNav';
import router, {useRouter} from 'next/router';
import Btn from '../../../components/Btn'



function Titulo(props) {
    let title = props.title;
    let activity_icon = props.activity_icon;
    return (
        <div>
            <div className={styles.row2}>
                <section  className={styles.contgen2a}>

                    <div className={styles.column2b}>
                        <img  style={{'height':'100px'}} src={activity_icon}></img>
                    </div>
                    <div className={styles.column2}>
                        <h2  className={styles.elempart}>
                            {title}
                        </h2>
                    </div>
                </section>
            </div>

        </div>
    )
}

function Encabezado(props) {
    let header_image = props.header_image;
    
    return (
        <div>
            <div>        
                <img src={header_image}></img>
                <br></br>               
            </div>
            
        </div>
    )
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
            idUser: 2,
            progress: 60,
            idCourse: '',
            user_lesson: 0,
            lesson_position: 0,
            lesson_id:0,
            course_position:'',
            user_course:'',
            height: '400',
            insignia:''
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
            const urlUserData = `${process.env.HOST}${process.env.get_activity_content}&lessonid=${this.state.lesson_position}&activityid=5&courseid=${this.state.idCourse}&userid=${this.state.idUser}`;
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
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

    }
    handleClick() {
        console.log(' ', this);
    }
    sendLessionProgress() {

        var progress = 80;
        //Si el curso es superior no registra progreso en este punto
        if (this.state.course_position < this.state.user_course) {
            
            router.push('./a6');
            return;
        }
        
        //Si el curso del usuario es igual al de la posicion revisar lecciones
        if(this.state.course_position == this.state.user_course)
        {
            //Si la leccion es superior a la actual no debe registrar progreso
            if (this.state.lesson_position < this.state.user_lesson) {
                
                router.push('./a6');
                return;
            }

            if (this.state.progress > 80) {
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
                        router.push('./a6')
                    }
                });
        });
        //
    }
    render() {
        
        return (
            <div className={styles.container}>
                <LessonNav completed={this.state.progress} prev="./a4"></LessonNav>
                <main className={styles.main}>
                    <Encabezado header_image={this.state.header_image}></Encabezado>
                    <Titulo title={this.state.title} activity_icon={this.state.activity_icon}></Titulo>
               
                    
                    <Ph5p geneally_ph5p={this.state.embedded}  alto={this.state.height}></Ph5p>

                    <br></br>

                    <a href="#!" onClick={() => this.sendLessionProgress()}>
                        <Btn texto="Continuar" tipo="0"></Btn>
                    </a>
                </main>
            </div>

        );
    }
}

function Ph5p(props) {
    let geneally_ph5p = props.geneally_ph5p;
    return (
        <iframe style={{
            'marginTop':'30px'}}
            src={geneally_ph5p}
            width="100%"
            height={props.alto}
            frameBorder="0"
            allowFullScreen="allowFullScreen"
            allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
            title="H5P"></iframe>

    )
}
