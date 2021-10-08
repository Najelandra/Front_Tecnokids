import styles from "../../styles/components/Retroalimentacion.module.css"

let sectionStyle = {
    position: 'absolute',
    marginTop: '105px',
    display: 'table-cell',
    verticalAlign: 'middle',
    zIndex: '-10'
};

let sectionStyle2 = {
    position: 'absolute',
    marginTop: '0%',
    display: 'table-cell',
    verticalAlign: 'middle',
    zIndex: '-10'
};

export default function PersonajeRetro(props) {
    return (

        <div >

            {props.result == 1 && <div>
                <img className={styles.starfondo} style={sectionStyle} src="/svg/bien.svg"></img>
                <img
                    className={styles.personaje}
                    src="/gif/Ledticia-feliz-animada-cuadrado.gif"></img>
            </div>}

            {props.result == 0 && <div>
                <br></br>
                <img className={styles.starfondo} style={sectionStyle2} src="/svg/mal.svg"></img>
                <img
                    className={styles.personaje}
                    style={{
                    'width': '70%'
                }}
                    src="/gif/Ledticia-corto-animado-cuadrado.gif"></img>
            </div>}
        </div>

    )
}