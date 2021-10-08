export default function Coloreando(props) {
    return (
        <div>
            {props.active == "0" && <SVGColoreandoBN></SVGColoreandoBN>
}
            {props.active == "1" && <SVGColoreandoC></SVGColoreandoC>
}

        </div>

    )
}

function SVGColoreandoBN(props) {
    return (<img src={'/svg/color1.0-inactivo.svg'} alt="Logo"/>) 
}

function SVGColoreandoC(props) {
    
    return (<img src={'/svg/color1.0-activo.svg'} alt="Logo"/>)
}