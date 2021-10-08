export default function WColoreando(props) {
    return (
        <div>
            {props.active == "0" && <SVGWColoreandoBN></SVGWColoreandoBN>
}
            {props.active == "1" && <SVGWColoreandoC></SVGWColoreandoC>
}

        </div>

    )
}

function SVGWColoreandoBN(props) {
    return (<img src={'/svg/color1.0-inactivo-compu.svg'} alt="Logo"/>) 
}

function SVGWColoreandoC(props) {
    
    return (<img src={'/svg/color1.0-activo-compu.svg'} alt="Logo"/>)
}