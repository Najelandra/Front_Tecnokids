import GoBack from '../../components/GoBack'

export default function Bin6() {
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
                    src="/svg/Binario mapa conceptual_estados bit 1 y 0.svg"></img>
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
                        Bit
                    </strong>
                </h1>
                <br></br>
                <p>
                    Es la unidad mínima de <strong> información </strong> que puede ser almacenada en un <strong> sistema de
                    cómputo. </strong> Posee únicamente dos estados 1 y 0, sin embargo la unión de varios bits
                    así como la aplicación del álgebra <strong> booleana </strong> son la base del mundo digital en el
                    que navegamos a diario. La unión de 8 bits se llama  <strong> byte </strong>. Mil bytes equivalen a
                    un <strong>Kilobyte</strong>, un millón de bytes a un Megabyte y mil millones de bytes a un
                    Gigabyte.
                    <br></br> <br></br>
                     La tarjeta perforada usada en el display que construimos cuenta con 7
                    bits. ¿Has oído hablar de los videojuegos o la música de 8 bits?¿sabes por qué
                    se llaman así?

                </p>

            </div>

        </div>
    )
}