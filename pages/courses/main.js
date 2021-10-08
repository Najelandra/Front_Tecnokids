import styles from '../../styles/courses/Course.module.css';
import Points from '../components/Points';
//import Text1 from '../svgs/Text1';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import router, { useRouter } from 'next/router';

/**
 * @version 1.0
 * @author Creatvra
 * Listing courses
 * @function ListCourses
 *
 */


export function ListCourses(props) {

    let courses = props.courses;
    let count_courses = 0;
    let enrrolled_courses = props.enrrolled_courses;
    console.log('enrroled', props.enrrolled_courses);
    

    function redirectToCourse(idCourse , position) {

        sessionStorage.setItem('course', idCourse);
        sessionStorage.setItem('course_position', position);
        console.log('redirect')
        router.push('./landing/course');
    }
    return (
        <div>
            <div className="grid grid-cols-1 gap-3 align-center">


                {enrrolled_courses.map((course, i) => {

                    count_courses++;
                   
                    // Return the element. Also pass key     
                    return (
                        <a key={course.id}  onClick={() => redirectToCourse(course.id, i+1)} href="#!">

                            {courses >= count_courses
                                ? <div>


                                    <img
                                        src={course[1]}
                                        className={styles.courseitem3d}
                                        alt="Logo" />
                                    <img
                                        src={course[3]}
                                        className={styles.courseitem}
                                        alt="Logo" />
                                </div>
                                :
                                <div>

                                    <img
                                        src={course[2]}
                                        className={styles.courseitem3d}
                                        alt="Logo" />
                                    <img
                                        src={course[4]}
                                        className={styles.courseitem}
                                        alt="Logo" />
                                </div>
                            }

                        </a>

                    )
                })}

            </div>
        </div>
    )
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img1: '35',
            img2: '45',
            idUser: '',
            username: '',
            avatar: '',
            courses: 1,
            lessons: '0',
            activities: '0',
            progress: '0',
            insignia: '0',
            skills: '',
            enrrolled_courses: '',
            id_lesson_db:''

        };
        this.sendLessionProgress = this
            .sendLessionProgress
            .bind(this);

    }
    componentDidMount(prevProps) {
        var self = this;

        // Obtener id del usuario guardado en session storage
        var id = '';
        var user_courses = '';
        var id_lesson_db = '';
        var course_flag = '';

        if (typeof window !== 'undefined') {
            id = sessionStorage.getItem('idUser');
            user_courses = sessionStorage.getItem('idUser');
            id_lesson_db = sessionStorage.getItem('id_lesson');
            course_flag  = sessionStorage.getItem('curse_flag')
            if (!id) {
                router.push('../intro/login');  
            }
            self.setState({ idUser: id });

            if(user_courses)
            {
                self.setState({ courses: user_courses });
            }

            if(course_flag)
            {
                self.setState({ id_lesson_db: course_flag });
            }else{
                self.setState({ id_lesson_db: '2' });
            }

            
        }


        // Obtener cursos desde moodle
        setTimeout(() => {
            //obtener la informacion del progreso del usuario desde moodle
            const urlUserData = `${process.env.HOST}${process.env.get_courses}${this.state.idUser}`;
            const optionsUserData = {
                method: 'GET'
            };
            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);
                    self.setState({ enrrolled_courses: data.cursos });

                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);


        setTimeout(() => {
            //obtener la informacion del progreso del usuario desde moodle
            const urlUserData = `${process.env.HOST}${process.env.get_user_info}${this.state.idUser}&lessonid=${this.state.id_lesson_db}`;
            const optionsUserData = {
                method: 'GET'
            };
            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);
                    self.setState({ courses: data.user_behavior[0].courses });
                    console.log('cursosget', data.user_behavior[0].courses);
                    sessionStorage.setItem('userName', data.user_behavior[0].username);
                    sessionStorage.setItem('avatar', data.user_behavior[0].avatar);
                    self.setState({ username: data.user_behavior[0].username });
                    sessionStorage.setItem('user_lesson', data.user_behavior[0].lessons);
                    sessionStorage.setItem('user_progress', data.user_behavior[0].progress);
                    sessionStorage.setItem('user_courses', data.user_behavior[0].courses);
                    
                })
                .catch((error) => {
                    console.log('error en usuario inicial')
                    this.sendLessionProgress();
                });
        }, 500);

        

    }

    sendLessionProgress() {

        var progress = 0;

        //peticion verificar ejercicio terminado
        const urlUserData = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_progress_user&userid=${this.state.idUser}&lessonid=1&progress=${progress}&course_id=1&insignia=0`;
        const optionsUserData = {
            method: 'GET'
        };
        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response
                .text()
                .then(function (text) {
                    console.log(text);
                    if (text == "actividad registrada") {
                        window
                            .location
                            .reload();
                    }
                });
        });
    }

    render() {

        let list_courses = <div></div>;
        let username = <div></div>;
        if (this.state.enrrolled_courses != '' && this.state.courses) {
            list_courses = <ListCourses enrrolled_courses={this.state.enrrolled_courses} courses={this.state.courses}></ListCourses>
        }

        if(this.state.username != '')
        {
            username = <Points active="1"></Points>;
        }

        return (

            <div className={styles.container}>
                {username}
                <main className={styles.main}>

                    {
                        list_courses
                    }

                </main>
                <Footer></Footer>
            </div>

        );
    }

}
