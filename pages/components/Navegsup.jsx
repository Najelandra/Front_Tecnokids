import LogoLight from '../svgs/NavBar/LogoLight'
import styles from '/styles/Home.module.css'

import Link from 'next/link'

export default function NavegSup() {
    return (
        <div>
           
            <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
                <div className="flex items-center flex-shrink-0 text-teal mr-6">
                    <span className={styles.logo}>
                        <LogoLight></LogoLight>
                    </span>
                </div>
                <div>

                    <Link href="/intro/login" className={styles.btn1}>
                        <strong>
                            Salir
                        </strong>
                    </Link>
                </div>
            </nav>
        </div>
    )
}