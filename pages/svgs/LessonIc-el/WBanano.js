export default function WBanano(props) {
    return (
        <div>
            {props.active == "0" && <SVGWBananoBN></SVGWBananoBN>
}
            {props.active == "1" && <SVGWBananoC></SVGWBananoC>
}

        </div>

    )
}

function SVGWBananoBN(props) {
    return (<img src={'/svg/banano-inactivo-compu.svg'} alt="Logo"/>) 
}

function SVGWBananoC(props) {
    
    return (<img src={'/svg/banano-activo-compu.svg'} alt="Logo"/>)
}