import GoBack from '../../components/GoBack'

export default function Bin8() {
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
                    src="/svg/Binario mapa conceptual_hardware.svg"></img>
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
                        Hardware
                    </strong>
                </h1>
                <br></br>
                <p>
                    La parte <strong> física </strong> de un sistema de cómputo, todo lo que puedes tocar. Aunque
                    pueden cambiar un montón de máquina a máquina, virtualmente todos los
                    computadores cuentan con dos partes: una memoria y una unidad central de proceso
                    -<strong>CPU</strong>-, la cual ejecuta los programas; aquí están los circuitos electrónicos que
                    realizan los cálculos como tal y coordinan los diferentes procesos que se están
                    llevando a cabo. También hacen parte del hardware partes como la pantalla o los
                    amplificadores y los dispositivos <strong> periféricos </strong> que pueden ser de entrada o salido
                    y que nos facilitan la interacción con el computador, como el teclado o el mouse
                    que transforman nuestros gestos en señales binarias que el sistema interpreta.
                </p>

            </div>

        </div>
    )
}