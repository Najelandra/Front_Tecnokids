import GoBack from '../../components/GoBack'

export default function Plas2() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Plastilina mapa conceptual_electrones.svg"></img>
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
                     Electrones</strong>
                </h1> <br></br>
                <p>
                Son las partículas subatómicas que orbitan alrededor del núcleo de un átomo y que se consideran con carga eléctrica negativa. En un átomo eléctricamente neutro se encontrará igual cantidad de electrones que de protones. El electrón posee muy poca masa unas 1.800 veces menor que la masa del protón o a la del neutrón. Si un electrón tuviera la masa de una moneda un protón tendría la de una bola de bolos. Esta partícula es considerada (hasta el día de hoy) una elemental, es decir que no puede dividirse en otras menores. 
                  </p>
            </div>
        </div>
    )
}