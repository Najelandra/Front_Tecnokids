import GoBack from '../../components/GoBack'

export default function Bin10() {
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
                    src="/svg/Binario mapa conceptual_programacion.svg"></img>
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
                        Programación
                    </strong>
                </h1>
                <br></br>
                <p>
                    Es el proceso de creación de programas, a través de instrucciones ordenadas
                    comunicadas en un   <strong>  lenguaje      </strong>  comprensible por un   <strong>
                        sistema digital    </strong>, para que este cumpla una tarea específica. Un ejemplo podría ser
                    programar la alarma del celular, para hacerlo nos “comunicamos” con el
                    dispositivo a través de sus botones para que se active de manera automática
                    cuando llegue la hora indicada.
                    <br></br>
                    <br></br>
                    Las   <strong>   tarjetas perforadas  </strong>
                    fueron una de las primeras herramientas para programar las computadoras
                    principalmente para que hicieran cálculos de una manera más rápida.
                </p>

            </div>

        </div>
    )
}