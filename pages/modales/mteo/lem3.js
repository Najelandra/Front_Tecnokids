import GoBack from '../../components/GoBack'

export default function Lem3() {
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
               <img  style={{'width':'25vh'}}  src="/svg/Recarga limón mapa conceptual_alternativas.svg"></img>
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
                     <strong>Alternativas</strong>
                </h1> <br></br>
                <p>
                Esta no es una categoría muy aplicada en el contexto de la física, puesto que no se usa para compararse con las demás sino para distinguirse de aquellas energías que priman en la actualidad: las que provienen de los combustibles fósiles -carbón, gas y petróleo que son fuentes de energía química-. Así, a veces este término se presenta como sinónimo de las energías renovables y otras veces además de estas abarca la energía nuclear e incluso la hidroeléctrica. El término se ha hecho cada vez más popular dado que enfrentamos una crisis energética mundial y hemos empezado a pensar otras formas de satisfacer nuestras necesidades energéticas como especie, formas en las que aprovechamos fuentes naturales virtualmente inagotables como el sol, el viento, la fuerza del mar, el calor interno de la tierra, entre otras.
                </p>
            </div>
        </div>
    )
}