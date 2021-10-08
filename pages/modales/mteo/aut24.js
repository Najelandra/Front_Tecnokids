import GoBack from '../../components/GoBack'

export default function Aut24() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Automata 2 prueba_maquinas compuestas.svg"></img>
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
                        <strong>Máquinas compuestas</strong>
                </h1> <br></br>
                <p>
                Suelen definirse como una mezcla de máquinas simples, por ejemplo la carretilla (usa la palanca y la rueda con eje) o una bicicleta.
Aunque también pueden caber aquí máquinas que ya no son únicamente mecánicas, sino que incluyen otras fuentes de energía, como el caso de un carro o una lavadora. ¡Ampliaremos estos conceptos más adelante!
                </p>
            </div>
        </div>
    )
}