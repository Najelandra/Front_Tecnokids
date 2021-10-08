import GoBack from '../../components/GoBack'

export default function Lem2() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Recarga limón mapa conceptual_energia.svg"></img>
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
                     <strong>Energía</strong>
                </h1> <br></br>
                <p>
                La capacidad de hacer trabajo. Este es uno de los conceptos más amplios en el mundo de la física porque se usa en muchos contextos más allá de la mecánica. ¿Cómo está hoy tu nivel de energía es decir cuánto trabajo podrías hacer? Recuerdas uno de los principales  enunciados alrededor de este concepto: La energía no se crea ni se destruye, sólo se transforma… ¿De dónde viene entonces tu energía?
                </p>
            </div>
        </div>
    )
}