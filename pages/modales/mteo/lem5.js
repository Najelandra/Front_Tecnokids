import GoBack from '../../components/GoBack'

export default function Lem5() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Recarga limón mapa conceptual_quimica.svg"></img>
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
                     <strong>Química</strong>
                </h1> <br></br>
                <p>
                Es la energía potencial que tiene una sustancia en sus enlaces químicos y que se libera debido a las reacciones químicas, cuando la materia que la contiene se transforma. El carbón es una fuente de energía química que se manifiesta al quemarse transformándose en luz y calor. Las baterías, el petróleo y el gas son también ejemplo de energía química, así como lo es la comida en el cuerpo humano.
                  </p>
            </div>
        </div>
    )
}