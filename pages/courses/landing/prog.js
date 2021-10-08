import styles from '../../../styles/courses/Cc.module.css';
import Points from '../../components/Points';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Text2 from '../../svgs/Text2';
import WDibujoAnim from '../../svgs/LessonIcons-prog/WDibujoAnim';
import WDibujo from '../../svgs/LessonIcons-prog/WDibujo';
import Footer from '../../components/Footer';
import WSimon from '../../svgs/LessonIcons-prog/WSimon';
import WColor from '../../svgs/LessonIcons-prog/WColor'
import WColoreando from '../../svgs/LessonIcons-prog/WColoreando';
import Color from '../../svgs/LessonIcons-prog/Color';
import Coloreando from '../../svgs/LessonIcons-prog/Coloreando';
import Dibujo from '../../svgs/LessonIcons-prog/Dibujo';
import Dibujoanim from '../../svgs/LessonIcons-prog/Dibujoanim';
import Simon from '../../svgs/LessonIcons-prog/Simon';


export function Dialog1() {
    
    return (
        <div  className={styles.dial}>
            <Text2 showtxt={text1}></Text2>
        </div>
    )
}

function NavBar1() {
    return (
        <svg
            id="prefix__Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 212 38"
            xmlSpace="preserve">
            <style>
                {
                    ".st0pxel1vn{fill:#e5e5e5}"
                }
</style>
            <path
                className="st0pxel1vn"
                d="M202.6 27.92H22.92c-4.17 0-7.58-3.29-7.58-7.31v-3.23c0-4.02 3.41-7.31 7.58-7.31H202.6c4.17 0 7.58 3.29 7.58 7.31v3.23c-.01 4.02-3.42 7.31-7.58 7.31"/>
            <path
                className="st0pxel1vn"
                d="M31.07 29.95c-.49.17-1.01.21-1.53.12l-5.81-.92c-.47-.08-.97-.03-1.43.12-.46.16-.88.42-1.21.77l-4.06 4.26c-.37.39-.8.67-1.29.83-.9.3-1.88.19-2.7-.3-.8-.49-1.35-1.3-1.5-2.24l-.92-5.81c-.15-.97-.78-1.8-1.66-2.23l-5.31-2.54a3.182 3.182 0 01-1.82-2.86c-.01-1.23.66-2.34 1.76-2.9l5.24-2.67c.88-.45 1.48-1.29 1.61-2.27l.78-5.83c.16-1.22.99-2.22 2.15-2.62s2.43-.1 3.3.77l4.16 4.16c.69.7 1.69 1.01 2.65.83l5.79-1.07c1.21-.22 2.42.25 3.15 1.24.74.99.85 2.28.29 3.38l-2.68 5.24c-.45.88-.44 1.91.03 2.78l2.8 5.18c.45.83.51 1.82.17 2.69-.35.9-1.07 1.59-1.96 1.89z"/>
        </svg>
    )
}

const testData = [
    {
        bgcolor: "#F9C62B",
        completed: 10
    }
];

export function ProgressBar(props) {
    return (
        <div>
            <NavBar1></NavBar1>
        </div>
    )
}

/**
 * @version 1.0
 * @author Creatvra
 * Listing courses
 * @function ListCourses
 *
 */

export function ListCourses() {
    const [list1,
        setList1] = useState("");
    function validateReq() {
        const router = useRouter();
    }
    return (
        <div>
            <br></br>{' '}
            <div className="flex -mx-2 mb-8">

                <div className="w-1/2 px-2">
                    <div className="bg-grey h-26" className={styles.couseInsideList}>
                        <a onClick={validateReq()} href={`./science/a1`}>

                            <div className={styles.courseitem}>
                                <Color active="0"></Color>
                            </div>
                            <div className={styles.courseitemmv}>
                                <WColor active="0"></WColor>
                            </div>
                            <ProgressBar completed="10"></ProgressBar>
                            <p className={styles.coursename} href={`./science/a1`}>
                             ¡DALE   COLOR AL MUNDO!
                            </p>
                            
                        </a>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                        <div className={styles.courseitem}>
                            <Coloreando  active="0"></Coloreando>
                        </div>
                        <div className={styles.courseitemmv}>
                            <WColoreando active="0"></WColoreando>
                        </div>
                        <ProgressBar completed="0"></ProgressBar>
                        <span className={styles.coursename}>
                           COLOREANDO EL MUNDO 1.0
                        </span>
                    </div>
                </div>

            </div>

            <div className="flex -mx-2 mb-8">
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                    <div className={styles.courseitem}>
                            <Dibujo active="0"></Dibujo>
                        </div>
                        <div className={styles.courseitemmv}>
                            <WDibujo  active="0"></WDibujo>
                        </div>
                        <ProgressBar completed="40"></ProgressBar>
                        <span className={styles.coursename}>
                        ¿YA HICISTE  DIBUJOS DE LUZ?
                        </span>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                    <div className={styles.courseitem}>
                            <Dibujoanim active="0"></Dibujoanim>
                        </div>
                        <div className={styles.courseitemmv}>
                            <WDibujoAnim active="0"></WDibujoAnim>
                        </div>
                        <ProgressBar completed="20"></ProgressBar>
                        <span className={styles.coursename}>
                      HAGAMOS  DIBUJOS ANIMADOS
                        </span>
                    </div>
                </div>

            </div>

            <div className="flex -mx-2 mb-8">

                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                    <div className={styles.courseitem}>
                            <Simon active="0"></Simon>
                        </div>
                        <div className={styles.courseitemmv}>
                            <WSimon active="0"></WSimon>
                        </div>
                        <ProgressBar completed="0"></ProgressBar>
                        <span className={styles.coursename}>
                            SIMÓN DICE: MEMORIZA LOS COLORES
                        </span>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                   
                </div>

            </div>

        </div>
    )
}

export default function Courses() {
    return (
        <div className={styles.container}>
            <Points active="1"></Points>
            <main className={styles.main}>
              {/**   <Dialog1></Dialog1> */}
                <ListCourses></ListCourses>
            </main>
            <Footer></Footer>
        </div>
    )
}
