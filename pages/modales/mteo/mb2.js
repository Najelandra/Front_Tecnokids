import GoBack from '../../components/GoBack'

export default function Mb2() {
    return (
        <div style={{
            'padding': '9%'
        }}>
            <GoBack route="/courses/less/mblock/a5"></GoBack>
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
                    src="/svg/Mblok mapa conceptual_variables.svg"></img>
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
                        Variables
                    </strong>
                </h1>
                <br></br>
                <p>
                    Son espacios en <strong> memoria </strong> a los que les damos 
                    un <strong> nombre </strong> y donde se almacenan <strong> datos </strong>
                    que son importantes para el programa. Las variables pueden guardar distintos
                    <strong> tipos </strong> de datos, como números, letras, palabras, etc. A menudo debemos
                     <strong> inicializar </strong> las variables, es decir asignarles un valor cuando el programa
                    arranca, por ejemplo 0 para el caso de los números. Podemos compararlas con los
                    bolsillos de una prenda de ropa, en los que buscamos las cosas que nos interesa
                    guardar.
                </p>

            </div>

        </div>
    )
}