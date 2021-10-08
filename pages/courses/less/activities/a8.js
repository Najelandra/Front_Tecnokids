import styles from '../../../../styles/courses/A2.module.css';
import React, {useState} from 'react';
import LessonNav from '../../../components/LessonNav';
import router, {useRouter} from 'next/router';
import Btn from '../../../components/Btn'

export default class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header_image: '',
            isToggleOn: false,
            btnActive: false,
            idUser: 0,
            progress: 100,
            idCourse: '',
            user_lesson: 0,
            lesson_position: 0,
            lesson_id: 0,
            course_position: '',
            user_course: '',
            lesson_count: '',
            insignia: 0
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
        let lesson_count = '';

        if (typeof window !== 'undefined') {
            id = sessionStorage.getItem('idUser');
            id_Course = sessionStorage.getItem('course');
            lesson_id = sessionStorage.getItem('lesson_id');
            lesson_position = sessionStorage.getItem('lesson_position');
            course_position = sessionStorage.getItem('course_position');
            lesson_count = sessionStorage.getItem('lesson_count');

            if (!id) {
                router.push('../../../intro/login');
            }
            self.setState({idUser: id});
            self.setState({idCourse: id_Course});
            self.setState({lesson_id: lesson_id});
            self.setState({lesson_position: lesson_position});
            self.setState({course_position: course_position});
            self.setState({lesson_count: lesson_count});
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
                    self.setState({user_course: data.user_behavior[0].courses});
                    self.setState({user_lesson: data.user_behavior[0].lessons});
                    self.setState({insignia: data.user_behavior[0].insignia});

                    if (data.user_behavior[0].courses > self.state.course_position) {
                        self.setState({progress: 100});
                    }

                    if (data.user_behavior[0].courses == self.state.course_position) {

                        if (data.user_behavior[0].lessons > self.state.lesson_id) {
                            self.setState({progress: 100});
                        } else {
                            self.setState({progress: data.user_behavior[0].progress});
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
            const urlUserData = `${process.env.HOST}${process.env.get_activity_content}&lessonid=${this.state.lesson_position}&activityid=8&courseid=${this.state.idCourse}&userid=${this.state.idUser}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);
                    self.setState({title: data.titulo});
                    self.setState({descriptive_text: data.texto_descriptivo});
                    self.setState({activity_icon: data.icono_actividad});
                    self.setState({header_image: data.imagen_cabecera});
                    self.setState({image: data.imagen});
                    self.setState({separator: data.separador});
                    self.setState({type_activity: data.tipo_actividad});
                    self.setState({id_activity: data.idactividad});
                    self.setState({embedded: data.embed});

                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

    }
    handleClick() {}
    sendLessionProgress() {

        var progress = 0;
        var id_lesson = parseInt(this.state.lesson_position);
        var next_lesson = id_lesson + 1;
        var course = parseInt(this.state.user_course);
        var pathToReturn = "../../landing/course";
        //Si el usuario ya supero este curso no registra progreso
        if (this.state.idCourse < this.state.user_course) {

            router.push('../../landing/course')
            return;
        }
        //Si la leccion es superior a la actual no debe registrar progreso
        if (this.state.lesson_position < this.state.user_lesson) {

            router.push('../../landing/course')
            return;
        }

        if (this.state.lesson_count == this.state.lesson_position) {
            course = course + 1;
            pathToReturn = "../../main";
            next_lesson = 1;
        }
        //peticion verificar ejercicio terminado
        const urlUserData = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_progress_user&userid=${this.state.idUser}&lessonid=${next_lesson}&progress=${progress}&course_id=${course}&insignia=${this.state.insignia}`;
        const optionsUserData = {
            method: 'GET'
        };
        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response
                .text()
                .then(function (text) {
                    console.log(text);
                    if (text == "actividad registrada") {
                        router.push(pathToReturn)
                    }
                });
        });
        //
    }

    render() {
        return (
            <div className={styles.container}>
                <LessonNav completed={this.state.progress} prev="./a7"></LessonNav>
                <main className={styles.main}>

                    <img src={this.state.header_image}></img>
                    <br></br>
                    <br></br>

                    <a onClick={() => this.sendLessionProgress()} href="#!">
                        <Btn texto="Siguiente lección" tipo="1"></Btn>

                    </a>
                </main>
            </div>
        )
    }
}
