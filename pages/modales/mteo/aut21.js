import GoBack from '../../components/GoBack'

export default function Aut21() {
    return (
        <div style={{
            'padding': '9%'
        }}>
            <GoBack route="/courses/less/aut2/a5"></GoBack>
            <Contenido></Contenido>
        </div>
    )

}

function Contenido() {
    return (
        <div
            style={{
            'textAlign': 'center',
            'display': 'table',
            'clear': 'both'
        }}>
            <div
                style={{
                'width': '50%',
                'float': 'left'
            }}>
                <img src="/cc1gif1.gif"></img>
            </div>
            <div
                style={{
                'width': '50%',
                'float': 'left'
            }}>
                <h1
                    style={{
                    'textAlign': 'center',
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '24px'
                }}>
                    <strong>¿Qué es un autómata?</strong>
                </h1>
                <br></br>
                <p>
                    Haz de cuenta que es una máquina que copia la forma y movimiento, como si fuera
                    un mimo. ¿Y cómo se construye un autómata? ¡Es súper sencillo! Puede ser por
                    medio de mecanismos simples (palancas, ruedas-ejes, tornillos, planos
                    inclinados, cuñas o polea) o con mecanismos compuestos (engranajes, levas,
                    cigüeñales, entre otros).
                </p>
            </div>
        </div>
    )
}