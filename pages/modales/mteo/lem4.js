import GoBack from '../../components/GoBack'

export default function Lem4() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Recarga limón mapa conceptual_mecanica.svg"></img>
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
                     <strong>Mecánica</strong>
                </h1> <br></br>
                <p>
                Clasificada en:
Potencial: O potencial gravitatoria; la que quiere hacer caer todas las cosas, es producida por la fuerza de gravedad del planeta en el que te encuentres.
Cinética: Es la energía que posee un cuerpo debido a su movimiento
Elástica: O potencial elástica, la que se almacena en un resorte cuando lo comprimes o lo estiras.
                </p>
            </div>
        </div>
    )
}