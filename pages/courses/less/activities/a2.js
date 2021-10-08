import styles from '../../../../styles/courses/A2.module.css';
import React, {useState} from 'react';
import LessonNav from '../../../components/LessonNav';
import router, {useRouter} from 'next/router';
import Btn from '../../../components/Btn'

export function MainActivity(props) {

    let url_embed = props.urlEmbed
    return (
        <div className="">
            <iframe
                src={url_embed}
                key={url_embed}
                width="100%"
                height="604"
                frameBorder="0"
                allowFullScreen="allowFullScreen"
                allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
                title="H5P"
                allowscripts="true"></iframe>

        </div>
    )
}

export function Dialog1(props) {

    let bloqueImage = props.bloqueImage;
    let bloqueText = props
        .bloqueText
        .replace(/<strong>/g, `<strong style="font-family: 'Nunito-SemiBold'">`)
        .replace(/<p /g, `<p style="text-align:center;font-family: 'Nunito-Semibold'; font-size:14pt"  className="inline-block align-middle" `);

    return (

        <div
            class="flex flex-wrap overflow-hidden"
            style={{
            'textAlign': 'center'
        }}>

            <div className={styles.mteo1}>
                <div className={styles.espmteo2}>
                    <img
                        style={{
                        'paddingLeft': '45px',
                        'paddingRight': '45px'
                    }}
                        className={styles.teo2txt}
                        src={bloqueImage}></img>
                </div>
            </div>

            <div className={styles.mteo2}>
                <div className={styles.espmteo2}>
                    <div
                        className={styles.teo2txt}
                        dangerouslySetInnerHTML={{
                        __html: bloqueText
                    }}/>
                </div>
            </div>

        </div>

    )
}

export function Dialog2(props) {

    let bloqueImage = props.bloqueImage;
    let bloqueText = props
        .bloqueText
        .replace(/<strong>/g, `<strong style="font-family: 'Nunito-SemiBold'">`)
        .replace(/<p /g, `<p style="text-align:center;font-family: 'Nunito-Semibold'; font-size:14pt"  className="inline-block align-middle" `);

    return (

        <div
            class="flex flex-wrap overflow-hidden"
            style={{
            'textAlign': 'center'
        }}>

            <div className={styles.mteo2}>

                <div className={styles.espmteo2}>
                    <div
                        className={styles.teo2txt}
                        dangerouslySetInnerHTML={{
                        __html: bloqueText
                    }}/>
                </div>
            </div>

            <div className={styles.mteo1}>
                <div className={styles.espmteo2}>
                    <img className={styles.teo2txt}   style={{
                        'paddingLeft': '45px',
                        'paddingRight': '45px'
                    }} src={bloqueImage}></img>
                </div>
            </div>

        </div>

    )
}

function Titulo(props) {

    return (
        <div className={styles.row2}>
            <div className={styles.contgen}>
                <div className={styles.column2b}>
                    <img src="/svg/Iconos-03.svg"></img>
                </div>

                <div className={styles.column2}>
                    <span>
                        {props.title}
                    </span>
                </div>
            </div>
        </div>
    )
}

function Encabezado(props) {

    let title = props.title;
    let header_image = props.header_image;
    let image = props.image;
    let separator = props.separator;
    let activity_icon = props.activity_icon;
    let descriptive_previus = props
        .descriptive_text
        .replace(/<strong>/g, `<strong style="font-family: 'Nunito-Bold'">`)
        .replace(/<p>/g, `<p style="text-align:center;font-family: 'Nunito-Semibold'; font-size:16pt">`);

    {/**  const [list1,
        setList1] = useState("");  */
    }

    return (
        <div>
            <div>
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
                }}/>

                <br></br>{' '}
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
            idUser: 0,
            progress: 20,
            user_lesson: 0,
            lesson_position: 0,
            lesson_id: 0,
            user_course: '',
            course_position: '',
            idCourse: '',
            title_minimarco: '',
            bloque1: '',
            bloque2: '',
            bloque3: '',
            bloque4: '',
            bloque5: '',
            bloque6: '',
            bloque7: '',
            bloque8: '',
            nfilas: '',
            separador1: '',
            separador2: '',
            separador3: '',
            insignia: 0

        };
        this.handleClick = this
            .handleClick
            .bind(this);

        this.sendLessionProgress = this
            .sendLessionProgress
            .bind(this);
        this.createMiniMarco = this
            .createMiniMarco
            .bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
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
            lesson_position = sessionStorage.getItem('lesson_position');
            lesson_id = sessionStorage.getItem('lesson_id');
            course_position = sessionStorage.getItem('course_position');
            if (!id) {
                router.push('../../../intro/login');
            }
            self.setState({idUser: id});
            self.setState({idCourse: id_Course});
            self.setState({lesson_id: lesson_id});
            self.setState({lesson_position: lesson_position});
            self.setState({course_position: course_position});
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

                        if (data.user_behavior[0].lessons > self.state.lesson_position) {
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

            const urlUserData = `${process.env.HOST}${process.env.get_activity_content}&lessonid=${this.state.lesson_position}&activityid=2&courseid=${this.state.idCourse}&userid=${this.state.idUser}`;
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

        //Get Mini marco Content
        setTimeout(() => {

            const urlUserData = `${process.env.HOST}${process.env.get_minimarco}${this.state.lesson_id}`;
            const optionsUserData = {
                method: 'GET'
            };

            const res = fetch(urlUserData, optionsUserData).then(function (response) {
                return response.json();
            })
                .then(function (data) {
                    console.log('minimarco', data);

                    self.setState({title_minimarco: data.titulo});
                    self.setState({bloque1: data.bloque1});
                    self.setState({bloque2: data.bloque2});
                    self.setState({bloque3: data.bloque3});
                    self.setState({bloque4: data.bloque4});
                    self.setState({bloque5: data.bloque5});
                    self.setState({bloque6: data.bloque6});
                    self.setState({bloque7: data.bloque7});
                    self.setState({bloque8: data.bloque8});
                    self.setState({nfilas: data.nfilas});
                    self.setState({separador1: data.separador1});
                    self.setState({separador2: data.separador2});
                    self.setState({separador3: data.separador3});

                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);

    }
    sendLessionProgress() {

        var progress = 20;

        //Si el curso es superior no registra progreso en este punto
        if (this.state.course_position < this.state.user_course) {

            router.push('./a3');
            return;
        }

        //Si el curso del usuario es igual al de la posicion revisar lecciones
        if (this.state.course_position == this.state.user_course) {
            //Si la leccion es superior a la actual no debe registrar progreso
            if (this.state.lesson_position < this.state.user_lesson) {

                router.push('./a3');
                return;
            }

            if (this.state.progress > 20) {
                progress = this.state.progress;
            }
        }
        //peticion actualizar progreso
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
                        router.push('./a3')
                    }
                });
        });
        //
    }
    createMiniMarco() {
        let minimarco = [];
        //hacer un loop con el numero de familiarizados
        if (this.state.nfilas == 1) {
            minimarco.push(
                <Dialog1 bloqueImage={this.state.bloque1} bloqueText={this.state.bloque2}></Dialog1>
            );

        } else if (this.state.nfilas == 2) {
            minimarco.push(
                <Dialog1 bloqueImage={this.state.bloque1} bloqueText={this.state.bloque2}></Dialog1>
            );
            minimarco.push(
                <img src={this.state.separador1}></img>
            );
            minimarco.push(
                <Dialog2 bloqueImage={this.state.bloque3} bloqueText={this.state.bloque4}></Dialog2>
            );

        } else if (this.state.nfilas == 3) {
            minimarco.push(
                <Dialog1 bloqueImage={this.state.bloque1} bloqueText={this.state.bloque2}></Dialog1>
            );
            minimarco.push(
                <img src={this.state.separador1}></img>
            );
            minimarco.push(
                <Dialog2 bloqueImage={this.state.bloque3} bloqueText={this.state.bloque4}></Dialog2>
            );
            minimarco.push(
                <img src={this.state.separador2}></img>
            );
            minimarco.push(
                <Dialog1 bloqueImage={this.state.bloque5} bloqueText={this.state.bloque6}></Dialog1>
            );

        } else if (this.state.nfilas == 4) {
            minimarco.push(
                <Dialog1 bloqueImage={this.state.bloque1} bloqueText={this.state.bloque2}></Dialog1>
            );
            minimarco.push(
                <img src={this.state.separador1}></img>
            );
            minimarco.push(
                <Dialog2 bloqueImage={this.state.bloque3} bloqueText={this.state.bloque4}></Dialog2>
            );
            minimarco.push(
                <img src={this.state.separador2}></img>
            );
            minimarco.push(
                <Dialog1 bloqueImage={this.state.bloque5} bloqueText={this.state.bloque6}></Dialog1>
            );
            minimarco.push(
                <img src={this.state.separador3}></img>
            );
            minimarco.push(
                <Dialog2 bloqueImage={this.state.bloque7} bloqueText={this.state.bloque8}></Dialog2>
            );
        }

        return minimarco;
    }

    render() {
        let main_activity = <div></div>;

        if (this.state.idUser != '') {
            main_activity = <MainActivity urlEmbed={`${this.state.embedded}`}></MainActivity>;
        }
        return (
            <div className={styles.container}>
                <LessonNav completed={this.state.progress} prev="./a1"></LessonNav>
                <main className={styles.main}>
                    {/**<Intro></Intro>**/}

                    <Encabezado
                        title={this.state.title}
                        image={this.state.image}
                        header_image={this.state.header_image}
                        separator={this.state.separator}
                        activity_icon={this.state.activity_icon}
                        descriptive_text={this.state.descriptive_text}></Encabezado>

                    <h1
                        style={{
                        'textAlign': 'center',
                        'color': '#50b6bd',
                        'fontFamily': 'Kg-second-chances',
                        'fontSize': '21pt'
                    }}>
                        {this.state.title_minimarco}
                    </h1>
                    <br></br>

                    {this.createMiniMarco()}

                    <a href="#!" onClick={() => this.sendLessionProgress()}>
                        <Btn texto="Continuar" tipo="0"></Btn>
                    </a>

                </main>
            </div>

        );
    }
}
