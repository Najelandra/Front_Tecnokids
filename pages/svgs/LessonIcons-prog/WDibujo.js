export default function WDibujo(props) {
    return (
        <div>
            {props.active == "0" && <SVGWDibujoBN></SVGWDibujoBN>
}
            {props.active == "1" && <SVGWDibujoC></SVGWDibujoC>
}

        </div>

    )
}

function SVGWDibujoBN(props) {
    return (<img src={'/svg/dibujo-inactivo-compu.svg'} alt="Logo"/>) 
}

function SVGWDibujoC(props) {
    
    return (<img src={'/svg/dibujo-activo-compu.svg'} alt="Logo"/>)
}