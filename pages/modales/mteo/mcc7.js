import GoBack from '../../components/GoBack'

export default function Mcc7() {
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
                'width': '30%',
                'float': 'left',
                'marginLeft':'20%'
            }}>
                <img  style={{'width':'25vh'}} src="/svg/Automata 1 prueba 4 nueva_velocidad.svg"></img>
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
                    <strong>Velocidad</strong>
                </h1> <br></br>
                <p>
                Magnitud física que relaciona el cambio de <strong> posición</strong> de un 
                cuerpo en el <strong> tiempo</strong>. Es una medida de qué tan rápido algo se mueve en alguna dirección: Por ejemplo: Caminas 5 metros en un segundo hacia el sur.
                <br></br><br></br>


Aunque estamos más familiarizados con la <strong> velocidad lineal </strong>(qué tan rápido
 se mueve algo en línea recta) dependiendo el tipo de movimiento, puede ser mucho más útil 
 medir la <strong> velocidad angular</strong> que determina el ángulo recorrido en un intervalo de tiempo. Por ejemplo en una rueda de chicago que da una vuelta (360°) en 1 minuto.
                </p>
            </div>
        </div>
    )
}