export default function WCaiman(props) {
    return (
        <div>
            {props.active == "0" && <SVGWCaimanBN></SVGWCaimanBN>
}
            {props.active == "1" && <SVGWCaimanC></SVGWCaimanC>
}

        </div>

    )
}

function SVGWCaimanBN(props) {
    return (<img src={'/svg/caiman-inactivo-compu.svg'} alt="Logo"/>) 
}

function SVGWCaimanC(props) {
    
    return (<img src={'/svg/caiman-activo-compu.svg'} alt="Logo"/>)
}