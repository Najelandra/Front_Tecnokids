import GoBack from '../../components/GoBack'

export default function Bin2() {
    return (
        <div style={{
            'padding': '9%'
        }}>
            <GoBack route="/courses/less/bin/a5"></GoBack>
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
                    src="/svg/Binario mapa conceptual_abierto.svg"></img>
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
                        Circuito Abierto
                    </strong>
                </h1>
                <br></br>
                <p>
                    Un camino <strong>abierto</strong> por el cual la corriente eléctrica (los electrones) no puede
                    fluir. En el experimento del siete segmentos, una tarjeta perforada con una
                    sección <strong>tapada</strong> va a abrir el circuito <strong>apagando</strong> el led correspondiente.
                </p>
            </div>
        </div>
    )
}