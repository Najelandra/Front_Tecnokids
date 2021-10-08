import Home from '../svgs/NavBar/Home'
import styles from '../../styles/components/LessonNav.module.css'
import ProgressBar from '../components/ProgressBar';
import GoBack from "./GoBack";

/**
 * @version 1.0
 * @author Creatvra
 * @function NavBar1
 *
 */

const NavBar1 = (props) => {
    const {bgcolor, completed} = props;

    const containerStyles = {
        height: 20,
        width: '110%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginTop: 20,
        marginLeft: -5
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'center'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span className={styles.labelStyles}></span>
            </div>
        </div>
    );
};

const testData = [
    {
        bgcolor: "#F9C62B",
        completed: 0
    }
];

function LessonNav(props) {
    return (
        <div
            className="grid grid-cols-3 gap-1"
            style={{
            'marginTop': '15px',
            'marginBottom': '5px'
        }}>
            <div
                style={{
                'textAlign': 'right',
                'marginLeft': '10%'
            }}
                className={styles.atras}>
                <GoBack route={props.prev}></GoBack>
            </div>
            <div
                style={{
                'width': '153%',
                'marginLeft': '-24%'
            }}>
                {/**
                 * {testData.map((item, idx) => (<NavBar1 key={idx} bgcolor={item.bgcolor} completed={props.completed}/>))}
                 */}
                <ProgressBar completed={props.completed}></ProgressBar>
            </div>
            <div style={{
                // 'marginLeft': '50%'
                'position':'absolute',
                'right':'20px'
            }}>
                <Home></Home>
                <p
                    style={{
                    'fontFamily': 'Nunito-Bold',
                    'fontSize': '14pt',
                    'marginLeft': '-3px'
                }}>cursos</p>
            </div>

        </div>
    )
}

export default LessonNav
