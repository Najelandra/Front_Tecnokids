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
                    src="/svg/Mblok mapa conceptual_funciones.svg"></img>
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
                        Funciones
                    </strong>
                </h1>
                <br></br>
                <p>
                    Son paquetes de código que agrupan acciones y que son llamadas por el programa
                    general para que cumplan una tarea específica, se uso facilita la lectura y
                    organización del programa y la reutilización de código. Llevan un <strong> nombre </strong> y
                    generalmente reciben unos valores de entrada y retornan un resultado.
                    <br></br> <br></br>
                     En el
                    código usado para el juego de <strong> Simón Dice </strong> en Mblock el conjunto de bloques de
                    <strong> nuevoNivel </strong> conforman una función que se llama o invoca cada vez que el jugador
                    acierta la secuencia.
                </p>

            </div>

        </div>
    )
}