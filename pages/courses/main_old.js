import styles from '../../styles/courses/Course.module.css';
import Points from '../components/Points';
//import Text1 from '../svgs/Text1';
import React, {useState} from 'react';
import Footer from '../components/Footer';
//import router, {useRouter} from 'next/router';

{/**
function Dialog1() {

    return (
        <div className={styles.dial}>
            <Text1 showtxt={text1}></Text1>
        </div>
    )
}  */}

/**
 * @version 1.0
 * @author Creatvra
 * Listing courses
 * @function ListCourses
 *
 */

export function ListCourses(props) {

    var courses = props.courses;
    console.log('courses', courses)

    function validateUser() {}
    return (
        <div>
            <div className="grid grid-cols-1 gap-3 align-center">
                <a href={`./landing/cc`} className={styles.courseitem}>
                    <img src={'/svg/cec-activi-movil.svg'} alt="Logo"/>
                </a>
                <a href={`./landing/cc`} className={styles.courseitem3d}>
                    {courses >= 1 && <img src={'/imgs-png/cec-activi-deskpot.png'} alt="Logo"/>}
                </a>

                <a
                    href={`./landing/el`}
                >
                    {courses == 2 || courses == 3
                        ? <div>
                                {/** Sección activa */}
                                <img
                                    src={'/svg/electronica-activo.svg'}
                                    className={styles.courseitem}
                                    alt="Logo"/>
                                <img
                                    src={'/svg/electronica-activo-computador.svg'}
                                    className={styles.courseitem3d}
                                    alt="Logo"/>
                            </div>
                        : <div>
                            {/** Sección inactiva */}
                            <img
                                src={'/svg/elect-inactivi-movil.svg'}
                                className={styles.courseitem}
                                alt="Logo"/>
                            <img
                                src={'/imgs-png/elect-inactivi-despokt.png'}
                                className={styles.courseitem3d}
                                alt="Logo"/>
                        </div>
}
                </a>

                <a
                    href={`./landing/prog`}
                >
                    {courses == 3
                        ? <div>
                        {/** Sección activa */}
                        <img
                            src={'/svg/electronica-activo.svg'}
                            className={styles.courseitem}
                            alt="Logo"/>
                        <img
                            src={'/imgs-png/progr-activi-despokt.png'}
                            className={styles.courseitem3d}
                            alt="Logo"/>
                    </div>
                        : <div>
                            <img
                                src={'/svg/progr-inactivi-movil.svg'}
                                className={styles.courseitem}
                                alt="Logo"/>
                            <img
                                src={'/imgs-png/progr-inactivi-despokt.png'}
                                className={styles.courseitem3d}
                                alt="Logo"/>
                        </div>
}

                </a>
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
            avatar: '1',
            courses: 1,
            lessons: '0',
            activities: '0',
            progress: '0',
            insignia: '0',
            skills: ''
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
            const urlUserData = `${process.env.HOST}${process.env.get_user_info}${this.state.idUser}`;
            const optionsUserData = {
                method: 'GET'
            };
            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('usuario', data);
                    self.setState({courses: data.user_behavior[0].courses});
                    self.setState({username: data.user_behavior[0].username});
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

        setTimeout(() => {
            // Compu
            const urlImage = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_course_imagepc&course_id=${this.state.idUser}`;
            const optionsImage = {
                method: 'GET'
            };
            fetch(urlImage, optionsImage).then(function (response) {
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

                    <ListCourses courses={this.state.courses}></ListCourses>
                    {/** <Dialog1></Dialog1>
                     *
                     * <BackCourses></BackCourses>
                    */}

                </main>
                <Footer></Footer>
            </div>

        );
    }

}
