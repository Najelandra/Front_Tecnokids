export default function WLed(props) {
    return (
        <div>
            {props.active == "0" && <SVGWLedBN></SVGWLedBN>
}
            {props.active == "1" && <SVGWLedC></SVGWLedC>
}

        </div>

    )
}

function SVGWLedBN(props) {
    return (<img src={'/svg/le-inactivo-compu.svg'} alt="Logo"/>) 
}

function SVGWLedC(props) {
    
    return (<img src={'/svg/le-activo-compu.svg'} alt="Logo"/>)
}