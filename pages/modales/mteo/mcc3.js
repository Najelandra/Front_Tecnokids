import GoBack from '../../components/GoBack'

export default function Mcc3() {
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
            'width': '100%',
            'clear': 'both'
        }}>
            <div
                style={{
                'width': '50%',
                'float': 'left',
                'paddingLeft':'20%'
            }}>
                <img style={{'width':'25vh'}} src="/svg/dinam.svg"></img>
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
                    <strong>Dinámica</strong>
                </h1>
                <br></br>
                <p>
                La dinámica estudia las causas del movimiento, es decir las fuerzas que lo generan.
                </p>
            </div>
        </div>
    )
}