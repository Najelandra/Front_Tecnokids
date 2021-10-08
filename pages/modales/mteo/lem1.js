import GoBack from '../../components/GoBack'

export default function Lem1() {
    return (
        <div style={{
            'padding': '9%'
        }}>
       <GoBack route="/courses/less/lem/a5"></GoBack>
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
               <img  style={{'width':'25vh'}}  src="/ICONO-recagra-limon-ANIMADO.gif"></img>
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
                     <strong>¿Qué es la Fuerza?</strong>
                </h1> <br></br>
                <p>
                En el módulo de mecánica nos enfocamos en la definición de fuerza asociada al movimiento. Su clasificación suele darse entre las de contacto: fricción, empuje, tensión, etc; y las que actúan a distancia: gravedad, electromagnética, nucleares débiles y fuertes. Estas últimas son las fuerzas que encontramos en la naturaleza. 
                </p>
            </div>
        </div>
    )
}