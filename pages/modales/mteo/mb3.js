import GoBack from '../../components/GoBack'

export default function Mb3() {
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
                    src="/svg/Mblok mapa conceptual_operaciones.svg"></img>
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
                    Operaciones
                    </strong>
                </h1>
                <br></br>
                <p>
                Para que el programa pueda hacer cálculos con las variables. Las hay de distintos tipos:
                </p>
                <ul>
                    <li>
                        <strong>Matemáticas: </strong> Las que ya conoces, útiles para <strong> sumar </strong> un
                         puntaje, <strong> multiplicar </strong> el número del nivel por la cantidad de obstáculos que aparecen en un
                          juego, <strong> dividir </strong> los turnos de juego entre el número de jugadores, etc. 
                    </li>
                    <li>
                        <strong>Lógicas: </strong>
                        Para agrupar condiciones y evaluar si se cumplen varios enunciados. Las básicas son
                         tres: <strong> Y, O, NO (AND, OR y NOT </strong> en inglés). Solemos usarlas en nuestro lenguaje cotidiano sin darnos cuenta,
                          por ejemplo: Quiero ir al parque <strong> y </strong> ver a mis amigas, en este caso estoy afirmando que deseo cumplir ambas situaciones. En su lugar si digo: Quiero ir al parque o ver a mis amigas, estoy afirmando que estaré conforme si se cumple cualquiera de las dos situaciones. 
                    </li>
                    <li>
                        <strong>Relacionales: </strong>
                        Usados para comparar dos enunciados o valores, son: 
                        <strong> mayor que, mayor igual que, menor que, menor igual que,  igual que, diferente. </strong>
                         Se usan para evaluar condiciones en un programa, por ejemplo en el contexto de nuestro juego si el jugador tiene un nivel 
                         <strong> igual </strong> a 10 es porque alcanzó el máximo nivel y terminó el juego.
                    </li>
                </ul>

            </div>

        </div>
    )
}