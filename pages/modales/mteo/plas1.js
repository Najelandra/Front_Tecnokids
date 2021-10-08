import GoBack from '../../components/GoBack'

export default function Plas1() {
    return (
        <div style={{
            'padding': '9%'
        }}>
       <GoBack route="/courses/less/plas/a5"></GoBack>
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
               <img  style={{'width':'25vh'}}  src="/ICONO-Atomo-ANIMADO.gif"></img>
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
                     <strong>¿Qué es un Átomo?</strong>
                </h1> <br></br>
                <p>
                Los átomos son las partículas más pequeñas en que puede dividirse un elemento químico manteniendo sus propiedades. Los átomos constan de tres partículas subatómicas: electrones, protones y neutrones. De acuerdo a la cantidad de protones en su núcleo se define el elemento al que el átomo pertenece, por ejemplo el hidrógeno tiene 1 sólo protón, el oxígeno 6 y el cobre 29, conteniendo este último mucha más masa que los anteriores.
                  </p>
            </div>
        </div>
    )
}