import GoBack from '../../components/GoBack'

export default function Mcc2() {
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
        'clear': 'both'
    }}>
          <div
            style={{
            'width': '60%',
            'paddingLeft':'20%',
            'float': 'left'
        }}>
            <h1 style={{
                'textAlign': 'center',
                'fontFamily': 'Kg-second-chances',
                'fontSize':'24px'
            }}>
                <strong>Mecánica</strong>
            </h1>
            <br></br>
            <p>
            Parte de la física, ¡sí esa maravillosa ciencia!, que estudia el 
            <strong> movimiento</strong> y el <strong> equilibrio</strong> de los cuerpos (cualquier cosa que ocupa espacio), así como de las 
            <strong> fuerzas</strong> que los mueven o los dejan quietos.
            </p>
        </div>
        <div
            style={{
            'width': '20%',
            'float': 'left',
            'paddingLeft':'5vw'
        }}>
            <img style={{'width':'15vw'}} src="/mec.svg"></img>
        </div>
      
    </div>
    )
}