import GoBack from '../../components/GoBack'

export default function Bin9() {
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
                    src="/svg/Binario mapa conceptual_software.svg"></img>
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
                    Software
                    </strong>
                </h1>
                <br></br>
                <p>
                Es el conjunto de programas o aplicaciones, instrucciones y reglas que hacen posible que una máquina o dispositivo electrónico funcione. WhatsApp, Tic Toc, Facebook, YouTube, Word y Paint son ejemplos de software.

                </p>

            </div>

        </div>
    )
}