import GoBack from '../../components/GoBack'

export default function Bin3() {
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
                    src="/svg/Binario mapa conceptual_cerrado.svg"></img>
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
                        Circuito Cerrado
                    </strong>
                </h1>
                <br></br>
                <p>
                    Un camino     <strong> cerrado </strong>  por el cual la   <strong>corriente eléctrica </strong> 
                     (los electrones) fluye. En
                    el experimento del siete segmentos, una tarjeta perforada con una sección    <strong> destapada </strong>
                     permite que se cierre el circuito y que se   <strong> encienda </strong>  el led
                    correspondiente. 
                    
              
                </p>
            </div>
        </div>
    )
}