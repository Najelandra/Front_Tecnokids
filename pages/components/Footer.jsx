import Siguenos from '../svgs/Siguenos'
import styles from '../../styles/components/Footer.module.css'

function Foot2er(props) {
    const containerStyles = {
        color: 'white',
        display: '',
        width: '100%',
        left: '0%',
        height: '160px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <footer className={styles.footer}>
            <div className={styles.footermobile}>
                <div className={styles.logoapoyo}>
                    {/** Div arriba --> logos usaid, oim y creatura */}
                    <img src={'/crea.svg'} alt="Logo"/>
                </div>

                <div className={styles.wrapper}>
                    {/** Div central --> logo TK y robots */}
                    <a className={styles.iconossvg}  href="/">
                        <img src={'/svg/tecnokids.svg'} className={styles.logo2334a} alt="Logo"/>
                    </a>
                    <div className={styles.iconossvg}>
                        <img src={'/rbts.svg'} alt="Logo" className={styles.logo2334a}/>
                    </div>
                </div>

                <div className={styles.siguenos}>
                    {/** Div abajo --> logo siguenos */}
                    <Siguenos></Siguenos>
                </div>
            </div>

            <div className={styles.footerweb}>
                <div className=" grid grid-cols-3 grid-flow-col ">
                    <a className={styles.lgounoleft} href="/">
                        <img src={'/svg/tecnokids.svg'} alt="Logo"/>
                    </a>

                    <div className={styles.logo2334}>
                        <img src={'/crea.svg'} alt="Logo"/>
                        <div className={styles.websig}>
                            <Siguenos></Siguenos>
                        </div>
                    </div>
                    <div className={styles.lgounoright}>
                        <img src={'/rbts.svg'} alt="Logo"/>
                    </div>

                </div>
            </div>

        </footer>

    )
}



function Terms() {
    const containerStyles = {
        color: 'white',
        width: '100%',
        fontFamily: 'Nunito-Semibold',
        backgroundColor: '#3A7DC6'
    }
    return (
        <div style={containerStyles}>

            <div className={styles.row}>
                
                    <div className={styles.columnfoot}>
                        <a href="/add/Termss">Términos y condiciones</a>
                    </div>
                    <div className={styles.columnfoot}>
                        <p>Copyright Tecnokids ®</p>
              
                </div>
            </div>

        </div>
    )
}

function NewDesign7() {
    return (
        <div
            style={{
            'backgroundColor': 'white',
            'paddingBottom': '3%',
            'padding': '2%',
            'textAlign': 'center'
        }}>
            <div className={styles.main}>
                <div className={styles.row3}>
                    <div >
                        <div>
                            <br></br>
                            <p
                                style={{
                                'textAlign': 'center',
                                'fontFamily':'Nunito-Semibold'
                            }}>Con el apoyo de:</p>
                        </div>
                    </div>

                </div>
                <div className={styles.row3}>
                    <div className={styles.column3}>
                        <div >
                            <img src={'/logof1.png'} alt="Logo"/>
                        </div>
                    </div>
                    <div className={styles.column3}>
                        <div >
                            <img src={'/logof2.png'} alt="Logo"/>
                        </div>
                    </div>
                    <div className={styles.column3}>
                        <div >
                            <img src={'/logof3.png'} alt="Logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




function Footer() {

    return (
        <div className={styles.container}>
       
            <NewDesign7></NewDesign7>

            <Terms></Terms>
        </div>
    )
}

export default  Footer;