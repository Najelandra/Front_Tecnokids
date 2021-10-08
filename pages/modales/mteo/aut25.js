import GoBack from '../../components/GoBack'

export default function Aut25() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Automata 2 prueba_biela - manivela.svg"></img>
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
                     <strong>Biela-Manivela</strong>
                </h1> <br></br>
                <p>
                Transforma un movimiento circular en un movimiento de traslación, o viceversa. La biela es un elemento rígido y largo que se articula por un extremo con la manivela y por el otro con el émbolo. Cuando la biela se mueve alternativamente, adelante y atrás, se consigue hacer girar la manivela. Y al revés, cuando gira la manivela, se consigue mover alternativamente adelante y atrás la biela y el émbolo. En el ejemplo de la bici tu pierna es la biela y el pedal es la manivela, el punto articulado es el pié.
                </p>
            </div>
        </div>
    )
}