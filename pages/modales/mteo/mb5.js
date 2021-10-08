import GoBack from '../../components/GoBack'

export default function Mb4() {
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
                    src="/svg/Mblok mapa conceptual_bucles.svg"></img>
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
                    Bucles
                    </strong>
                </h1>
                <br></br>
                <p>
                Son estructuras que permiten
                 <strong> repetir </strong> acciones un número de veces dado o hasta que se cumpla una condición.
                </p>

            </div>

        </div>
    )
}