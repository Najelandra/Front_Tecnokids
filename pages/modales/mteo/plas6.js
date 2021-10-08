import GoBack from '../../components/GoBack'

export default function Plas6() {
    return (
        <div style={{
            'padding': '9%'
        }}>
       <GoBack route="/courses/less/plas/a5"></GoBack>
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
               <img  style={{'width':'25vh'}}  src="/svg/Plastilina mapa conceptual_ley de ohm.svg"></img>
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
                     <strong>
                     Ley de Ohm</strong>
                </h1> <br></br>
                <p>
                Define la relación matemática entre las tres propiedades eléctricas básicas de un circuito, a través de una ecuación muy sencilla:
Voltaje = Resistencia x Corriente o en sus versiones equivalentes:
Corriente = Voltaje / Resistencia
Resistencia = Voltaje / corriente

                  </p>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/WpuLTZrhAgs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}