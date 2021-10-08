export default function WSimon(props) {
    return (
        <div>
            {props.active == "0" && <SVGWSimonBN></SVGWSimonBN>
}
            {props.active == "1" && <SVGWSimonC></SVGWSimonC>
}

        </div>

    )
}

function SVGWSimonBN(props) {
    return (<img src={'/svg/simon-inactivo-compu.svg'} alt="Logo"/>)
}

function SVGWSimonC(props) {

    return (<img src={'/svg/simon-activo-compu.svg'} alt="Logo"/>)
}