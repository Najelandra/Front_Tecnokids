import GoBack from '../../components/GoBack'

export default function Aut26() {
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
            'width': '100%',
            'clear': 'both'
        }}>
            <div
                style={{
                'width': '50%',
                'float': 'left',
                'paddingLeft':'20%'
            }}>
               <img  style={{'width':'25vh'}}  src="/svg/Automata 2 prueba_engranajes.svg"></img>
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
                     <strong>Engranajes</strong>
                </h1> <br></br>
                <p>
                Son ruedas con dientes que se acoplan entre sí para transmitir potencia a medida que giran. Jugando con el tamaño de sus diámetros y el número de sus dientes los mecanismos pueden ganar fuerza o velocidad al hacer uso de los engranajes. ¿Te fijaste qué pasa con el sentido de giro?
En una bicicleta aunque los engranajes no tienen contacto directo entre sí transmiten su movimiento a través de la cadena y funcionan bajo una lógica similar sin que haya cambio de sentido de giro. Los cambios en la relación entre los platos (los engranajes de adelante) y los piñones (los de atrás) permiten aprovechar mejor la fuerza de tus piernas para ir más rápido en una bajada o pedalear sin tanto esfuerzo al subir una montaña.
                </p>
            </div>
        </div>
    )
}