
export default function Dialogos(props) {
    return (
        <div
            class="flex flex-wrap overflow-hidden"
            style={{
                'textAlign': 'center',
                'backgroundColor':'#F6D9D3'
            }}>

            <div class="w-1/2 overflow-hidden" >
                <img  style={{'height':'180px'}}
                    src="/svg/LEDTICIA.svg"></img>
            </div>

            <div class="w-1/2 overflow-hidden">
                <p style={{'fontFamily':'Nunito-Semibold',
                'padding':'3%'
            }} >
                    {/** Qué te parece si ayudamos a Valentina
                        y Juan Esteban a descubrir ¿cómo funcionan los juguetes? */}
                <br></br>

                    {props.texto}
                </p>
            </div>

        </div>
    )
}
