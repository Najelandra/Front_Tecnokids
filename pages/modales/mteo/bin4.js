import GoBack from '../../components/GoBack'

export default function Bin4() {
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
                    src="/svg/Binario mapa conceptual_cero.svg"></img>
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
                    Estado lógico 0
                    </strong>
                </h1>
                <br></br>
                <p>
                Es la representación de un circuito abierto, generalmente equivale a 0 voltios. Expresiones como <strong> off, apagado, falso o false </strong> son equivalentes.
                </p>



                
            </div>



        </div>
    )
}