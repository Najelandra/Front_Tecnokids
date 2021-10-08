import GoBack from '../../components/GoBack'

export default function Mcc5() {
    return (
        <div style={{
            'padding': '10%'
        }}>
            <GoBack route="/courses/less/aut1/a5"></GoBack>
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
            'clear': 'both',
            'marginLeft':'15vw'
        }}>
            <div
                style={{
                'width': '50%',
                'float': 'left'
            }}>
                <img style={{'width':'25vh'}} src="/svg/Automata 1 prueba 4 nueva_fuerzas y torque.svg"></img>
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
                    <strong>Fuerzas y Torques</strong>
                </h1> <br></br>
                <p>
                La fuerza es cualquier acción, esfuerzo o influencia que puede alterar el <strong> estado de movimiento</strong> o de reposo de un cuerpo. <br></br> <br></br>
El <strong> torque</strong> por su parte es la fuerza aplicada en una <strong> palanca</strong> que hace rotar alguna pieza. 
                </p>
            </div>
        </div>
    )
}