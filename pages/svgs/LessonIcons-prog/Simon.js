export default function Simon(props) {
    return (
        <div>
            {props.active == "0" && <SVGSimonBN></SVGSimonBN>
}
            {props.active == "1" && <SVGSimonC></SVGSimonC>
}

        </div>

    )
}

function SVGSimonBN(props) {
    return (<img src={'/svg/simon-inactivo.svg'} alt="Logo"/>) 
}

function SVGSimonC(props) {
    
    return (<img src={'/svg/simon-activo.svg'} alt="Logo"/>)
}