import styles from '../../styles/courses/Course.module.css';
import Points from '../components/Points';
import Text1 from '../svgs/Text1';
import React, {useState} from 'react';
import {useRouter} from 'next/router';


export default function Logros() {

    return (
        <div className={styles.container}>
            <Points active="2"></Points>
            <main className={styles.main}>
                <br/>
             Tecknokers
            </main>
        </div>
    )
}