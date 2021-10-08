import GoBack from '../../components/GoBack'

export default function Plas5() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Plastilina mapa conceptual_resistencia.svg"></img>
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
                     <strong>
                     Resistencia</strong>
                </h1> <br></br>
                <p>
                Es la oposición que generan los materiales al paso de los electrones.. Se mide en ohmios [Ω]. De acuerdo a su valor de resistencia eléctrica los materiales suelen clasificarse en:
Conductores: Materiales con poca resistencia eléctrica, es decir ideales para los circuitos, los más comunes son los metales.
No conductores: Materiales con alta resistencia eléctrica, conocidos también como aislantes, el plástico o el caucho por ejemplo. Ten en cuenta que dependiendo del voltaje y las condiciones del circuito un material puede dejar pasar la electricidad aunque no sea un conductor ideal. Cuando cae un rayo por ejemplo, el voltaje es tan alto que incluso el aire se vuelve un material conductor.
                  </p>
            </div>
        </div>
    )
}