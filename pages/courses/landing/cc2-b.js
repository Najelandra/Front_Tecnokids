import styles from '../../../styles/courses/Cc2.module.css';
import Points from '../../components/Points';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Text2 from '../../svgs/Text2';
import Automata1 from '../../svgs/LessonIcons-cc/Automata1';
import FirstCourseW from '../../svgs/LessonIcons-cc/FirstCourseW';
import Automata2 from '../../svgs/LessonIcons-cc/Automata2';
import Lemmon from '../../svgs/LessonIcons-cc/Lemmon';
import Mblock from '../../svgs/LessonIcons-cc/Mblock';
import Plastilina from '../../svgs/LessonIcons-cc/Plastilina';
import Binario from '../../svgs/LessonIcons-cc/Binario';
import ProgressBar from '../../components/ProgressBar';
import WebAutomata2 from '../../svgs/LessonIcons-cc/WebAutomata2';
import WebLemmon from '../../svgs/LessonIcons-cc/WebLemmon';
import WebMBlock from '../../svgs/LessonIcons-cc/WebMblock';
import WebPl from '../../svgs/LessonIcons-cc/WebPlastilina';
import WebBin from '../../svgs/LessonIcons-cc/WebBin';
import Footer from '../../components/Footer';

export function Dialog1() {

    return (
        <div>
            <Text2 showtxt={text1}></Text2>
        </div>
    )
}

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

export function ListCourses() {
    const [list1,
        setList1] = useState("");
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
                                <Automata1></Automata1>
                            </div>
                            <div className={styles.courseitemmv}>
                                <FirstCourseW></FirstCourseW>
                            </div>
                            {/** View 2 para evitar que se muestre la vista web, y mostrar la vista  */}
                            <ProgressBar completed="100" view="2"></ProgressBar>
                            <p className={styles.coursename} href={`../less/aut1/a1`}>
                                AUTÓMATA 1
                            </p>

                        </a>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                        <a onClick={validateReq()} href={`../less/aut2/a1`}>
                            <div className={styles.courseitem}>
                                <Automata2 active="1"></Automata2>
                            </div>
                            <div className={styles.courseitemmv}>
                                <WebAutomata2 active="1"></WebAutomata2>
                            </div>
                            <ProgressBar completed="0"></ProgressBar>
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
                    <a onClick={validateReq()} href={`../less/lem/a1`}>
                        <div className={styles.courseitem}>
                            <Lemmon active="0"></Lemmon>
                        </div>
                        <div className={styles.courseitemmv}>
                            <WebLemmon active="0"></WebLemmon>
                        </div>
                        <ProgressBar completed="0"></ProgressBar>
                        <span className={styles.coursename}>
                            RECARGA DEL LIMÓN
                        </span>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                    <a onClick={validateReq()} href={`../less/plas/a1`}>
                        <div className={styles.courseitem}>
                            <Plastilina active="0"></Plastilina>
                        </div>
                        <div className={styles.courseitemmv}>
                            <WebPl active="0"></WebPl>
                        </div>
                        <ProgressBar completed="0"></ProgressBar>
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
                    <a onClick={validateReq()} href={`../less/bin/a1`}>
                        <div className={styles.courseitem}>
                            <Binario active="0"></Binario>
                        </div>
                        <div className={styles.courseitemmv}>
                            <WebBin active="0"></WebBin>
                        </div>
                        <ProgressBar completed="0"></ProgressBar>
                        <span className={styles.coursename}>
                            BINARIO
                        </span>
                        </a>
                    </div>
                </div>
                <div className="w-1/2 px-2">
                    <div className="bg-grey-light h-26" className={styles.couseInsideList}>
                    <a onClick={validateReq()} href={`../less/mblock/a1`}>
                        <div className={styles.courseitem}>
                            <Mblock active="0"></Mblock>
                        </div>
                        <div className={styles.courseitemmv}>
                            <WebMBlock active="0"></WebMBlock>
                        </div>
                        <ProgressBar completed="0"></ProgressBar>
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

export default function Courses() {
    return (
        <div className={styles.container}>
            <Points active="1"></Points>
            <main className={styles.main}>
                <ListCourses></ListCourses>
            </main>
            <Footer></Footer>
        </div>
    )
}
