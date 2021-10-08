import GoBack from '../../components/GoBack'

export default function Mb4() {
    return (
        <div style={{
            'padding': '9%'
        }}>
            <GoBack route="/courses/less/mblock/a5"></GoBack>
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
            'width': '100%',
            'clear': 'both'
        }}>
            <div
                style={{
                'width': '50%',
                'float': 'left',
                'paddingLeft': '20%'
            }}>
                <img
                    style={{
                    'width': '25vh'
                }}
                    src="/svg/Mblok mapa conceptual_condicionales.svg"></img>
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
                    <strong>
                        Condicionales
                    </strong>
                </h1>
                <br></br>
                <p>
                    Son estructuras de <strong> decisión </strong> que permiten que el programa tome un <strong> camino </strong> de
                    acuerdo al resultado. El más popular es <strong> if </strong>, traduce si de condición, diferente
                    al sí de afirmación. Un ejemplo común de su uso en un videojuego puede ser: si
                    el jugador alcanzó el máximo nivel <strong> entonces </strong> se reproduce un sonido de victoria.
                </p>

            </div>

        </div>
    )
}