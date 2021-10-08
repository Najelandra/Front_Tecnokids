import LogoLight from '../svgs/NavBar/TealLogo'
import styles from '/styles/components/Tealnav.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function NavegSup() {
    return (
        <div className={styles.background}>
            <Head>
                <title>
                    Tecnokids
                </title>
                <meta name="description" content="Tecnokids"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <nav className="flex items-center justify-between flex-wrap bg-white-500 p-1">
                <div className="flex items-center flex-shrink-0 text-teal ">
                    <span className={styles.logo}>
                        <LogoLight></LogoLight>
                    </span>
                </div>
                <div className="flex items-center flex-shrink ">
                    <div className="hidden md:block">
                        <Link href="/courses/start">
                            <strong className={styles.btn1}>
                                Inicio
                            </strong>
                        </Link>
                    </div>
                    <div>
                        <Link href="/courses/main">
                            <strong className={styles.btn1}>
                                Cursos
                            </strong>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/courses/profile">

                            <strong className={styles.btn1}>
                                Perfil
                            </strong>

                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/courses/msg" className="hidden md:block">
                            <strong className={styles.btn1}>
                                Mensajes
                            </strong>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/courses/community" className="hidden md:block">
                            <strong className={styles.btn1}>
                                Comunidad
                            </strong>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/intro/login" className="hidden md:block">

                            <strong className={styles.btn1}>
                                Salir
                            </strong>

                        </Link>
                    </div>

                </div>

            </nav>
        </div>
    )
}