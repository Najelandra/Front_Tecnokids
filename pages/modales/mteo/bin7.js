import GoBack from '../../components/GoBack'

export default function Bin7() {
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
                    src="/svg/Binario mapa conceptual_logica binaria.svg"></img>
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
                    Lógica binaria
                    </strong>
                </h1>
                <br></br>
                <p>
                Base de los sistemas digitales y por tanto del funcionamiento de los computadores. Piensa en un bit como una pequeña cajita, un espacio en la memoria de un computador, parece poco pero al juntarse con otros se pueden hacer operaciones matemáticas y sobre todo aprovechar la transformación de esos bits a sonido o luz para el control de una pantalla de computador por ejemplo. 

                </p>

            </div>

        </div>
    )
}