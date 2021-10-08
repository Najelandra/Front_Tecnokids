import GoBack from '../../components/GoBack'

export default function Mb1() {
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
                    src="/ICONO-programacion-ANIMADO.gif"></img>
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
                        ¿Qué es Programación?
                    </strong>
                </h1>
                <br></br>
                <p>
                    Un programa contiene en sí mismo un  <strong>    algoritmo  </strong>: una   <strong>  secuencia   </strong>  de
                    <strong>  instrucciones ordenadas,  </strong>
                    finitas y delimitadas que se crean con el fin de describir de forma sistemática
                     <strong> la ejecución de una tarea </strong>: La preparación de una sopa podría describirse con un
                    algoritmo. <br></br> <br></br>
                    
                    Existen muchos <strong> lenguajes de programación </strong> para trasladar un algoritmo
                    a un computador. ¡<a href="https://youtu.be/9Z0xqX5nLvg" target="_blank"
                    style={{'textDecoration':'underline',
                    'color':'blue'}}>Aquí</a> Camilab nos cuenta un poco más sobre ello! 
                    
                    <br></br> <br></br>
                    Con el paso de
                    los años se han desarrollado medios para que aprender a programar sea más
                    sencillo, usando los lenguajes de <strong> alto nivel </strong>, donde se usan expresiones más
                    parecidas al lenguaje humano que a través de muchas capas se traducen en las
                    órdenes que el computador finalmente recibe. La <strong> programación por bloques </strong> es una
                    de estas herramientas.
                </p>

            </div>

        </div>
    )
}