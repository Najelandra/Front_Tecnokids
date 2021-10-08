import GoBack from '../../components/GoBack'

export default function Aut23() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Automata 2 prueba_maquinas simples.svg"></img>
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
                      <strong>Máquinas simples</strong>
                </h1> <br></br>
                <p>
                Herramientas que hacen las tareas difíciles más fáciles al cambiar la dirección o la cantidad de fuerza necesitada para hacer algo
                </p>
            </div>
        </div>
    )
}