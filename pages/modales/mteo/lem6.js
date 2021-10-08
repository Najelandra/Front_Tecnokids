import GoBack from '../../components/GoBack'

export default function Lem6() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Recarga limón mapa conceptual_electrica.svg"></img>
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
                     <strong>Eléctrica</strong>
                </h1> <br></br>
                <p>
                La energía eléctrica es el movimiento de electrones. Definimos energía eléctrica o electricidad como la forma de energía que resulta de la existencia de una diferencia de potencial entre dos puntos, es decir la diferencia de acumulación de cargas eléctricas negativas de un punto respecto a otro y la tendencia a fluir buscando el equilibrio en su distribución.
                  </p>
            </div>
        </div>
    )
}