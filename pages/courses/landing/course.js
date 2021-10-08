import styles from '../../../styles/courses/Cc.module.css';
import Points from '../../components/Points';
import React, { useState } from 'react';
import router, { useRouter } from 'next/router';
/*import FirstCourse from '../../svgs/LessonIcons-cc/Automata1';
import FirstCourseW from '../../svgs/LessonIcons-cc/FirstCourseW';
import Automata2 from '../../svgs/LessonIcons-cc/Automata2';
import Lemmon from '../../svgs/LessonIcons-cc/Lemmon';
import Mblock from '../../svgs/LessonIcons-cc/Mblock';
import Plastilina from '../../svgs/LessonIcons-cc/Plastilina';
import Binario from '../../svgs/LessonIcons-cc/Binario';
import Automata2Web from '../../svgs/LessonIcons-cc/WebAutomata2';
import WebLemmon from '../../svgs/LessonIcons-cc/WebLemmon';
import WebMBlock from '../../svgs/LessonIcons-cc/WebMblock';
import WebPl from '../../svgs/LessonIcons-cc/WebPlastilina';
import WebBin from '../../svgs/LessonIcons-cc/WebBin'; */
import Footer from '../../components/Footer';
import ProgressBar from '../../components/ProgressBar';

const testData = [
    {
        bgcolor: "#F9C62B",
        completed: 10
    }
];

/**
 * @version 1.0
 * @author Creatvra
 * Listing courses
 * @function ListCourses
 *
 */

export function ListCourses(props) {

    let course_position = props.coursePosition;;
    let user_courses = props.courses;
    let user_lessons = props.lessons;
    let progress = props.progress;

    let lessons_list = props.lessons_list;


    function redirectToCourse(lesson_position,id_lesson,progress) {

        if(progress == 100)
        {
            sessionStorage.setItem('lesson_position', lesson_position);
            sessionStorage.setItem('lesson_id', id_lesson);
            router.push('../less/activities/a2');
        }else{
            sessionStorage.setItem('lesson_position', lesson_position);
            sessionStorage.setItem('lesson_id', id_lesson);
            router.push(`../less/activities/a${props.activities}`);
        }
        
    }

    function notRedirectToCourse() {

        return;
    }

    return (
        <div>

            {lessons_list.map((lesson, i) => {
                
                var secondColumnEnable = false;
                //Si es par va en la segunda columna y no se llena 
                const secondColumn = lessons_list[i + 1];

                if (secondColumn) {
                    secondColumnEnable = true;
                    if ((i+1) % 2 == 0) {                       
                        return;//retorna cuando pasa por items que son pares ya que fueron pintados en la iteracion anterior
                    }
                } else {
                    secondColumnEnable = false;  

                    if ((i+1) % 2 == 0) {                       
                        return;//retorna cuando pasa por items que son pares ya que fueron pintados en la iteracion anterior
                    }
                    
                }

                //progreso columna 1 y 2 inactivos
                let progressFirst = "in";
                let progressSecond = "in";
                //obtener posicion de leccion actual 
                let currentLesson = (i + 1);
                //obtener posicion de leccion segunda columna 
                let secondLesson = lessons_list[i + 1];
                let idSecondLesson = '';

                if (secondLesson) {
                    idSecondLesson= secondLesson.id;
                    secondLesson = currentLesson + 1;                                
                }
             
                //Si El usuario ya desarrollo este curso 
                if (user_courses > course_position) {

                    console.log('1.curso actual desbloaqueado al 100%')
                    progressFirst = 100;
                    progressSecond = 100;

                } else if (user_courses < course_position) {
                    console.log('2.curso actual no desbloqueado')
                    progressFirst = "in"; // Si el curso del usuario supera al consultado                 
                    progressSecond = "in";

                }else if (user_courses == course_position) {
                    console.log('user_lesson',user_lessons)
                    console.log('current_lesson',currentLesson)
                    if (user_lessons > currentLesson) { //Si la leccion ya fue desarrollada 
                        console.log('3.leccion ya desarrollada ')
                        if (user_lessons > secondLesson) {//Verificar estado de la segunda columna de lecciones
                            progressSecond = 100;// segunda columna de lecciones al 100 %
                        } else if (user_lessons == secondLesson) {
                            progressSecond = progress;
                        }
                        progressFirst = 100; // primera columna de lecciones
    
                    } else if (user_lessons < currentLesson) { // Se inactiva si no ha superado la leccion
                        console.log('4.curson inactivo')
                        progressFirst = "in";
                        if (user_lessons < secondLesson) { // se inactiva segunda columna de lecciones
                            progressSecond = "in";// segunda columna de lecciones
                        }
                    } else if (user_lessons == currentLesson) {
                        console.log('5.desbloqueado y en progreso')
                        progressFirst = progress;
                        if (user_lessons == secondLesson) {
                            progressSecond = progress;// segunda columna de lecciones
                        }
                    }

                } 

                return (
                    <div key={lesson.id} className="flex -mx-2 mb-8">
                        <div className="w-1/2 px-2">
                            <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                                <a
                                    onClick={progressFirst >= 0
                                        ? () => redirectToCourse((i + 1), lesson.id ,progressFirst)
                                        : () => notRedirectToCourse()}
                                    href={'#!'}
                                    className={progressFirst >= 0
                                        ? styles.courseitemd
                                        : styles.disabledCursor}>
                                    {progressFirst >= 0
                                        ? <div>
                                            <div className={styles.courseitem}>
                                                <img src={lesson.mobile_active} alt="Logo" />
                                            </div>
                                            <div className={styles.courseitemmv}>
                                                <img src={lesson.pc_active} alt="Logo" />
                                            </div>
                                        </div>

                                        : <div>
                                            <div className={styles.courseitem}>
                                                <img src={lesson.mobile_inactive} alt="Logo" />
                                            </div>
                                            <div className={styles.courseitemmv}>
                                                <img src={lesson.pc_inactive} alt="Logo" />
                                            </div>
                                        </div>
                                    }

                                    <ProgressBar completed={progressFirst}></ProgressBar>
                                    <span className={styles.coursename}>
                                        {lesson.name}
                                    </span>
                                </a>
                            </div>
                        </div>
                        {secondColumnEnable == true
                    
                            ?<div className="w-1/2 px-2">
                                <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                                    <a
                                        onClick={progressSecond >= 0
                                            ? () => redirectToCourse(i + 2, idSecondLesson,progressSecond)
                                            : () => notRedirectToCourse()}
                                        href={'#!'}
                                        className={progressSecond >= 0
                                            ? styles.courseitemd
                                            : styles.disabledCursor}>
                                        {progressSecond >= 0
                                            ? <div>
                                                <div className={styles.courseitem}>
                                                    <img src={secondColumn.mobile_active} alt="Logo" />
                                                </div>
                                                <div className={styles.courseitemmv}>
                                                    <img src={secondColumn.pc_active} alt="Logo" />
                                                </div>
                                            </div>

                                            : <div>
                                                <div className={styles.courseitem}>
                                                    <img src={secondColumn.mobile_inactive} alt="Logo" />
                                                </div>
                                                <div className={styles.courseitemmv}>
                                                    <img src={secondColumn.pc_inactive} alt="Logo" />
                                                </div>
                                            </div>
                                        }
                                        <ProgressBar completed={progressSecond} ></ProgressBar>
                                        <span className={styles.coursename}>
                                            {secondColumn.name}
                                        </span>
                                    </a>
                                </div>
                            </div>
                            :<div></div>

                        }
                        
                    </div>
                )

            })}


        </div>
    )
}

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img1: '35',
            idUser: '',
            username: '',
            avatar: '1',
            courses: '',
            lessons: 1,
            activities: '0',
            progress: 0,
            insignia: '0',
            skills: '',
            data: '',
            idCourse: '',
            course_position: '',
            lessons_list: ''
        };

    }
    componentDidMount(prevProps) {
        var self = this;
        let id = '';
        let idCourse = '';
        let course_position = '';
        let user_lesson = '';
        if (typeof window !== 'undefined') {
            id = sessionStorage.getItem('idUser');
            if (!id) {
                router.push('../../../intro/login');  
            }
            idCourse = sessionStorage.getItem('course');
            course_position = sessionStorage.getItem('course_position');
            user_lesson = sessionStorage.getItem('user_lesson');
            self.setState({ idUser: id });
            self.setState({ idCourse: idCourse });
            self.setState({ course_position: course_position });
            self.setState({ lessons: user_lesson });
        }

        setTimeout(() => {
            //listado de lecciones
            const urlUserData = `${process.env.HOST}${process.env.get_lessons}${this.state.idCourse}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('lecciones', data);
                    self.setState({ lessons_list: data.lecciones });
                    console.log('lecciones_count',data.lecciones );
                    sessionStorage.setItem('lesson_count',data.lecciones.length );
                })
                .catch((error) => {
                    console.log(error);
                });

        }, 500);

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
                    self.setState({ lessons: data.user_behavior[0].lessons });
                    self.setState({ progress: data.user_behavior[0].progress });
                    self.setState({ username: data.user_behavior[0].username });
                    self.setState({ courses: data.user_behavior[0].courses });
                    self.setState({ activities: data.user_behavior[0].activities });
                })
                .catch((error) => {
                    console.log(error);
                });

        }, 500);



    }

    render() {

        let list_courses = <div></div>;
        if (this.state.lessons_list != '' && this.state.course_position != '') {
            list_courses = <ListCourses coursePosition={this.state.course_position} courses={this.state.courses} activities={this.state.activities} lessons={this.state.lessons} progress={this.state.progress} lessons_list={this.state.lessons_list} ></ListCourses>
        }
        return (
            <div className={styles.container}>
                <Points active="1"></Points>
                <main className={styles.main}>

                    {list_courses}

                </main>
                <Footer></Footer>
            </div>
        )

    }

}

