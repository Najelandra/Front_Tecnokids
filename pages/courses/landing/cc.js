import styles from '../../../styles/courses/Cc.module.css';
import Points from '../../components/Points';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import FirstCourse from '../../svgs/LessonIcons-cc/Automata1';
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
import WebBin from '../../svgs/LessonIcons-cc/WebBin';
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

    const lessons = props.lessons;
    const progress = props.progress;
    console.log('lessons', lessons, 'progress', progress)
    let progress1 = "in";
    let progress2 = "in";
    let progress3 = "in";
    let progress4 = "in";
    let progress5 = "in";
    let progress6 = "in";
    if (lessons == 1) {
        progress1 = progress;

    }

    if (lessons == 2) {
        progress1 = 100;
        progress2 = progress;
    }
    if (lessons == 3) {
        progress1 = 100;
        progress2 = 100;
        progress3 = progress;
    }
    if (lessons == 4) {
        progress1 = 100;
        progress2 = 100;
        progress3 = 100;
        progress4 = progress;
    }
    if (lessons == 5) {
        progress1 = 100;
        progress2 = 100;
        progress3 = 100;
        progress4 = 100;
        progress5 = progress;
    }
    if (lessons == 6) {
        progress1 = 100;
        progress2 = 100;
        progress3 = 100;
        progress4 = 100;
        progress5 = 100;
        progress6 = progress;
    }

    function validateReq() {
        const router = useRouter();
    }
    return (
        <div>

            <div className="flex -mx-2 mb-8">

                <div className="w-1/2 px-2">
                    <div className="bg-grey h-26" className={styles.couseInsideList}>
                        <a onClick={validateReq()} href={`../less/aut1/a1`}>

                            <div className={styles.courseitem}>
                                <FirstCourse></FirstCourse>
                            </div>
                            <div className={styles.courseitemmv}>
                                <FirstCourseW></FirstCourseW>
                            </div>
                            <ProgressBar completed={progress1}></ProgressBar>
                            <p className={styles.coursename} href={`./science/a1`}>
                                AUTÓMATA 1
                            </p>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                        <a
                            href={progress1 == 100
                            ? `../less/aut2/a1`
                            : `javascript: void(0)`}
                            className={progress1 == 100
                            ? styles.courseitemd
                            : styles.disabledCursor}>
                            <div className={styles.courseitem}>
                                <Automata2
                                    active={lessons >= 2
                                    ? "1"
                                    : "0"}></Automata2>
                            </div>
                            <div className={styles.courseitemmv}>
                                <Automata2Web
                                    active={lessons >= 2
                                    ? "1"
                                    : "0"}></Automata2Web>
                            </div>
                            <ProgressBar completed={progress2} currentlesson={lessons}></ProgressBar>
                            <span className={styles.coursename}>
                                AUTÓMATA 2
                            </span>
                        </a>
                    </div>
                </div>

            </div>

            <div className="flex -mx-2 mb-8">
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                        <a
                            onClick={validateReq()}
                            href={progress2 == 100
                            ? `../less/lem/a1`
                            : `javascript: void(0)`}
                            className={progress2 == 100
                            ? styles.courseitemd
                            : styles.disabledCursor}>
                            <div className={styles.courseitem}>
                                <Lemmon
                                    active={lessons >= 2
                                    ? "1"
                                    : "0"}></Lemmon>
                            </div>
                            <div className={styles.courseitemmv}>
                                <WebLemmon
                                    active={lessons >= 3
                                    ? "1"
                                    : "0"}></WebLemmon>
                            </div>
                            <ProgressBar completed={progress3}></ProgressBar>
                            <span className={styles.coursename}>
                                RECARGA DEL LIMÓN
                            </span>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                        <a
                            onClick={validateReq()}
                            href={progress3 == 100
                            ? `../less/plas/a1`
                            : `javascript: void(0)`}
                            className={progress3 == 100
                            ? styles.courseitemd
                            : styles.disabledCursor}>
                            <div className={styles.courseitem}>
                                <Plastilina
                                    active={lessons >= 4
                                    ? "1"
                                    : "0"}></Plastilina>
                            </div>
                            <div className={styles.courseitemmv}>
                                <WebPl
                                    active={lessons >= 4
                                    ? "1"
                                    : "0"}></WebPl>
                            </div>
                            <ProgressBar completed={progress4}></ProgressBar>
                            <span className={styles.coursename}>
                                PLASTILINA CONDUCTIVA
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex -mx-2 mb-8">

                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                        <a
                            onClick={validateReq()}
                            href={progress4 == 100
                            ? `../less/bin/a1`
                            : `javascript: void(0)`}
                            className={progress4 == 100
                            ? styles.courseitemd
                            : styles.disabledCursor}>
                            <div className={styles.courseitem}>
                                <Binario
                                    active={lessons >= 5
                                    ? "1"
                                    : "0"}></Binario>
                            </div>
                            <div className={styles.courseitemmv}>
                                <WebBin
                                    active={lessons >= 5
                                    ? "1"
                                    : "0"}></WebBin>
                            </div>
                            <ProgressBar completed={progress5}></ProgressBar>
                            <span className={styles.coursename}>
                                BINARIO
                            </span>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                        <a
                            onClick={validateReq()}
                            href={progress5 == 100
                            ? `../less/mblock/a1`
                            : `javascript: void(0)`}
                            className={progress5 == 100
                            ? styles.courseitemd
                            : styles.disabledCursor}>
                            <div className={styles.courseitem}>
                                <Mblock
                                    active={lessons >= 6
                                    ? "1"
                                    : "0"}></Mblock>
                            </div>
                            <div className={styles.courseitemmv}>
                                <WebMBlock
                                    active={lessons >= 6
                                    ? "1"
                                    : "0"}></WebMBlock>
                            </div>
                            <ProgressBar completed={progress6}></ProgressBar>
                            <span className={styles.coursename}>
                                MBLOCK
                            </span>
                        </a>
                    </div>
                </div>

            </div>

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
            courses: 1,
            lessons: 1,
            activities: '0',
            progress: 0,
            insignia: '0',
            skills: '',
            data: ''
        };

    }
    componentDidMount(prevProps) {
        var self = this;
        var id = '';
        if (typeof window !== 'undefined') {
            id = sessionStorage.getItem('idUser');
            if (!id) {
                this
                    .props
                    .history
                    .push(`${process.env.HOST}/intro/login`)
            }
            self.setState({idUser: id});
        }

        setTimeout(() => {
            //obtener la informacion del usuario
            const urlUserData = `${process.env.HOST}${process.env.get_user_info}${this.state.idUser}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);
                    self.setState({lessons: data.user_behavior[0].lessons});
                    self.setState({progress: data.user_behavior[0].progress});
                    self.setState({username: data.user_behavior[0].username});
                })
                .catch((error) => {
                    console.log(error);
                });

        }, 500);

        setTimeout(() => {
            // Compu
            const url = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_course_imagepc&course_id=${this.state.idUser}`;
            const options = {
                method: 'GET'
            };
            fetch(url, options).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('url', data);
                    let temporal2 = data;
                    self.setState({img1: temporal2.value});
                })
                .catch((error) => {
                    console.log(error);
                });
            const url2 = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_course_imagemobile&course_id=${this.state.idUser}`;
            const options2 = {
                method: 'GET'
            };
            fetch(url2, options2).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log(data);
                    let temporal3 = data;
                    self.setState({img2: temporal3.value});
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

    }

    render() {

        return (
            <div className={styles.container}>
                <Points active="1" username={this.state.username}></Points>
                <main className={styles.main}>
                    {/**  <Dialog1></Dialog1> */}

                    <ListCourses lessons={this.state.lessons} progress={this.state.progress}></ListCourses>
                    {/**  <BackLessons></BackLessons>*/}

                </main>
                <Footer></Footer>
            </div>
        )

    }

}

/*
class BackLessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img1: '35'
        };
    }
    componentDidMount(prevProps) {
        var self = this;
        this.setState({ data: '85' });
        const url = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_course_les` +
            'son&courseid=4';
        const options = {
            method: 'GET'
        };
        fetch(url, options).then(function (response) {
            self.setState({ img1: response.lecciones });
            return response.json();
        })
            .then(function (data) {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
        //  router.push("./guias")
    }
    render() {
        return (
            <div>

                <h1></h1>
            </div>

        );
    }
}*/