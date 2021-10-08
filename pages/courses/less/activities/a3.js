import styles from '../../../../styles/courses/A2.module.css';
import React, { useState } from 'react';
import LessonNav from '../../../components/LessonNav';
import router, { useRouter } from 'next/router';
import Btn from '../../../components/Btn';
import ModalEmoticon from '../../../components/ModalEmoticon';

import Dialogos from '../../../components/Dialogos';

export function Dialog1() {
    const dialogo1 = "Te presentamos a Valentina y Juan Esteban, ellos te acompañarán a lo largo de ca" +
        "da lección.";
    return (
        <Dialogos texto={dialogo1}></Dialogos>
    )
}

function Emojis(props) {

    let png_question = props.png_question;
    let question = props.question;
    let emoticon1 = props.emoticon1;
    let emoticon2 = props.emoticon2;
    let emoticon3 = props.emoticon3;
    let idUser = props.idUser;
    let idLesson = props.idLesson;
    return (
       <div style={{'textAlign':'center'}}> <br></br>
          <img style={{'width':'80%', 'marginLeft':'10%'}} src={png_question}></img>
           <br></br> <br></br>
           <p style={{'fontFamily':'Nunito-Semibold'}}>{question}</p> <br></br>
           <div className={styles.row}>
               <div className={styles.column3d}>
               <ModalEmoticon opt="1" emoticon1={emoticon1} idUser={idUser} idLesson={idLesson}></ModalEmoticon>
               </div>
               <div className={styles.column3d}>
               <ModalEmoticon opt="2" emoticon2={emoticon2} idUser={idUser} idLesson={idLesson}></ModalEmoticon>
               </div>   <div className={styles.column3d}>
               <ModalEmoticon opt="3" emoticon3={emoticon3} idUser={idUser} idLesson={idLesson}></ModalEmoticon>
               </div>
            
         
           </div>
       </div>
        
    )
}


class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Comentar...'
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('Comentario subido: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span className={styles.itemcom}></span>
                    <textarea
                        value={this.state.value}
                        className={styles.itemform}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

function Titulo(props) {
    let title = props.title;
    return (
        <div>
            <div className={styles.row3}>
                <section  className={styles.contgen2a}>
                    <div className={styles.column3a}>
                        <img style={{'height':'100px'}} src="/svg/flechaazul.svg"></img>
                    </div>
                    <div className={styles.column3b}>
                        <img style={{'height':'100px'}} src="/svg/Iconos-06.svg"></img>
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

export function MainActivity() {
    return (
        <iframe
            width="100%"
            height="600vh"
            src="https://www.tecnokids.com.co/moodle/mod/hvp/embed_tk.php?id=374"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
    )
}

export default class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            descriptive_text: '.',
            activity_icon: '',
            header_image: '',
            image: '',
            separator: '',
            video: '',
            descriptive_image:'',
            question:'',
            emoticon1:'',
            emoticon2:'',
            emoticon3:'',
            png_question:'',
            type_activity: '',
            id_activity: '',
            embedded: '',
            isToggleOn: false,
            idUser: 0,
            progress: 20,         
            idCourse: '',       
            user_lesson: 0,
            lesson_position: 0,
            lesson_id:0,
            course_position:'',
            user_course:'',
            insignia:0
            // height: '300'
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
            const urlUserData = `${process.env.HOST}${process.env.get_activity_content}&lessonid=${this.state.lesson_position}&activityid=3&courseid=${this.state.idCourse}&userid=${this.state.idUser}`;
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
                    self.setState({ descriptive_image: data.imagen_descriptiva });
                    self.setState({ type_activity: data.tipo_actividad });
                    self.setState({ id_activity: data.idactividad });            
                    self.setState({ question: data.question });
                    self.setState({ emoticon1: data.emoticon1 });
                    self.setState({ emoticon2: data.emoticon2 });
                    self.setState({ emoticon3: data.emoticon3 });
                    self.setState({ png_question: data.pngpregunta });
                    self.setState({ embedded: data.embed });
                   // self.setState({ height: data.height });
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

        var progress = 40;
        
        //Si el curso es superior no registra progreso en este punto
        if (this.state.course_position < this.state.user_course) {
            
            router.push('./a4');
            return;
        }
        
        //Si el curso del usuario es igual al de la posicion revisar lecciones
        if(this.state.course_position == this.state.user_course)
        {
            //Si la leccion es superior a la actual no debe registrar progreso
            if (this.state.lesson_position < this.state.user_lesson) {
                
                router.push('./a4');
                return;
            }

            if (this.state.progress > 40) {
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
                        router.push('./a4')
                    }
                });
        });
        //
    }

    render() {
        let title = <div></div>;
        let emoji = <div></div>;
        let descriptive_text = <div></div>;
        if (this.state.title != '' && this.state.descriptive_text != '') {
            title = <Titulo title={this.state.title} ></Titulo>;
            descriptive_text = this.state.descriptive_text
                            .replace(/<strong>/g , `<strong style="font-family: 'Nunito-Bold'">`)
                            .replace(/<p>/g , `<p style="text-align:center;font-family: 'Nunito-Semibold'; font-size:16pt">`); 
        }

        if(this.state.question != '')
        {
            emoji =   <Emojis idUser={this.state.idUser} idLesson={this.state.lesson_id} png_question={this.state.png_question} question={this.state.question} emoticon1={this.state.emoticon1} emoticon2={this.state.emoticon2} emoticon3={this.state.emoticon3}></Emojis>;
                  
        }



        return (
            <div className={styles.container}>
                <LessonNav completed={this.state.progress} prev="./a2"></LessonNav>
                <main className={styles.main}>
                    <div>
                        <img src={this.state.header_image}></img>
                        <br></br>
                        {title}
                        <img src={this.state.separator}></img>
                    </div>
                    <br></br>{' '}
                    <div className="grid gitem sm:grid-cols-1 gap-1" style={{'marginBottom':'40px'}}>
                        <div dangerouslySetInnerHTML={{ __html: descriptive_text }} />
                    </div>
                    <iframe
                        width="100%"
                        height="425" // {this.state.height}
                        src={this.state.embedded}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                    { emoji }
                    {/**
                   *
                   *   <AddComment></AddComment>
                 
                    <MainActivity></MainActivity>*/}

                    <a href="#!" onClick={() => this.sendLessionProgress()}>
                        <Btn texto="Continuar" tipo="0"></Btn>
                    </a>

                </main>

            </div>
        )

    }

}
