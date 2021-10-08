import PersonajeRetro from "./PersonajeRetro"
import styles from "../../styles/components/Retroalimentacion.module.css"

{/**
0 = mal
1 = bien
*/
}

export default function Retroalimentacion(props) {

    let feedbackMessage = <div></div>;

    if (props.result == "0") {
        feedbackMessage = <div className={styles.cajatexto}>
            <p
                style={{
                'fontFamily': 'Nunito-Bold'
            }}
                className={styles.texto}>
                {props.message}
            </p>
        </div>;
    }

    if (props.result == "1") {
        feedbackMessage = <div className={styles.cajatexto}>
            <p
                style={{
                'fontFamily': 'Nunito-Bold'
            }}
                className={styles.textobien}>
                {props.message}
            </p>
        </div>;
    }

    return (
        <div style={{
            'marginTop': '5vh'
        }}>

            {feedbackMessage}

            <br></br>
            <div style={{
                'padding': '10px 0px 0px 0px'
            }}>
                <PersonajeRetro result={props.result}></PersonajeRetro>
            </div>

        </div>
    )
}