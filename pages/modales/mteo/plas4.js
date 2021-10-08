import GoBack from '../../components/GoBack'

export default function Plas4() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Plastilina mapa conceptual_corriente.svg"></img>
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
                     Corriente</strong>
                </h1> <br></br>
                <p>
                Define la cantidad de electricidad que pasa por un circuito; es decir, cuántos electrones por segundo fluyen a través de él. Se mide en amperios [A].
                  </p>
            </div>
        </div>
    )
}