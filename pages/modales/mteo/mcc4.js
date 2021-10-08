import GoBack from '../../components/GoBack'

export default function Mcc4() {
    return (
        <div style={{
            'padding': '10%'
        }}>
             <GoBack route="/courses/less/aut1/a5"></GoBack>
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
            'width': '20%',
            'float': 'left',
            'marginLeft':'20%'
        }}>
            <img style={{'width':'25vh'}} src="/svg/Automata 1 prueba 4 nueva_cinematica.svg"></img>
        </div>
        <div
            style={{
            'width': '50%',
            'float': 'left'
        }}>
            <h1 style={{
                'textAlign': 'center',
                'fontFamily': 'Kg-second-chances',
                'fontSize':'24px'
            }}>
                <strong>Cinemática</strong>
            </h1> <br></br>
            <p>
            Describe el movimiento de los cuerpos sin que importen las fuerzas que lo causan. La cinemática se limita entonces principalmente al estudio de la trayectoria (el camino que recorre el cuerpo) y cómo cambia su posición y velocidad en el tiempo.
            </p>
        </div>
    </div>
    )
}