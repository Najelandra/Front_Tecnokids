export default function Dibujo(props) {
    return (
        <div>
            {props.active == "0" && <SVGDibujoBN></SVGDibujoBN>
}
            {props.active == "1" && <SVGDibujoC></SVGDibujoC>
}

        </div>

    )
}

function SVGDibujoBN(props) {
    return (<img src={'/svg/dibujo-inactivo.svg'} alt="Logo"/>) 
}

function SVGDibujoC(props) {
    
    return (<img src={'/svg/dibujo-activo.svg'} alt="Logo"/>)
}