import GoBack from '../../components/GoBack'

export default function Aut22() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Automata 2 prueba_mecanismos.svg"></img>
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
                      <strong>Mecanismos</strong>
                </h1> <br></br>
                <p>
                Elementos destinados a transmitir y transformar fuerzas y movimientos desde un punto de aplicación de entrada hacia una salida
                </p>
            </div>
        </div>
    )
}