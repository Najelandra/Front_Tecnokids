import Home from './Home'
import Proyectos from './Proyectos';
import styles from '/styles/components/Points.module.css';
import Config from './Config';
import Picture from './Picture';
import Username from './Username';
import Habilidades from './Habilidades';

function Points(props) {

    const containerStyles = {
        backgroundColor: '#62BFCF',
        display: '',
        width: '100%',
        left: '0%'
    }
    const itemStyles = {
        textAlign: 'center'
    }
    return (

        <div style={containerStyles}>

            <Username></Username>
            <div className={styles.main}>
                <div className="grid grid-cols-5 grid-flow-col ">
                    {props.active == 1 && <div
                        className={styles.item}
                        style={{
                        'backgroundColor': '#FF8591',
                        'borderRadius': '15px'
                    }}>
                        <Home active={props.active}></Home>
                    </div>}
                    {props.active != 1 && <div className={styles.item}>
                        <Home active={props.active}></Home>
                    </div>}

                    {props.active == 2 && <div
                        className={styles.item}
                        style={{
                        'backgroundColor': '#FF8591',
                        'borderRadius': '15px'
                    }}>
                        <Habilidades active={props.active}></Habilidades>
                    </div>}
                    {props.active != 2 && <div className={styles.item}>
                        <Habilidades active={props.active}></Habilidades>
                    </div>}
                    {props.active == 3 && <div
                        className={styles.item}
                        style={{
                        'backgroundColor': '#FF8591',
                        'borderRadius': '15px'
                    }}>
                        <Picture active={props.active}></Picture>
                    </div>}
                    {props.active != 3 && <div className={styles.item}>
                        <Picture active={props.active}></Picture>
                    </div>}
                    {props.active == 4 && <div
                        className={styles.item}
                        style={{
                        'backgroundColor': '#FF8591',
                        'borderRadius': '15px'
                    }}>
                        <Config active={props.active}></Config>
                    </div>}
                    {props.active != 4 && <div className={styles.item}>
                        <Config active={props.active}></Config>
                    </div>}

                    {props.active == 5 && <div
                        className={styles.item}
                        style={{
                        'backgroundColor': '#FF8591',
                        'borderRadius': '15px'
                    }}>
                        <Proyectos active={props.active}></Proyectos>
                    </div>}
                    {props.active != 5 && <div className={styles.item}>
                        <Proyectos active={props.active}></Proyectos>
                    </div>}
                   <div>
                  
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Points;
