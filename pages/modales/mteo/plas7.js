import GoBack from '../../components/GoBack'

export default function Plas7() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Plastilina mapa conceptual_circuito.svg"></img>
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
                     Circuito</strong>
                </h1> <br></br>
                <p>
                Es el camino que los electrones recorren desde el polo negativo de la batería (o lo que haga sus veces) hacia el polo positivo. Para ello, atraviesan cables y componentes eléctricos y electrónicos. ¡Todo un desafío! La idea un circuito es aprovechar la energía eléctrica al transformarla en sonido, luz, movimiento u otro fenómeno físico.
El corto circuito por su parte es el camino más fácil que se le puede ofrecer a los electrones en un circuito y hay que evitarlo a toda costa, porque hace que estas partículas fluyan en grandes cantidades calentando los conductores, posiblemente dañando las fuentes de energía eléctrica y desaprovechando su uso.
                  </p>
            </div>
        </div>
    )
}