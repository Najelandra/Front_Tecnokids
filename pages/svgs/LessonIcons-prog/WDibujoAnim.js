export default function WDibujoAnim(props) {
    return (
        <div>
            {props.active == "0" && <SVGWDibujoAnimBN></SVGWDibujoAnimBN>
}
            {props.active == "1" && <SVGWDibujoAnimC></SVGWDibujoAnimC>
}

        </div>

    )
}

function SVGWDibujoAnimBN(props) {
    return (<img src={'/svg/dibujoanimado-inactivo-compu.svg'} alt="Logo"/>) 
}

function SVGWDibujoAnimC(props) {
    
    return (<img src={'/svg/dibujoanimado-activo-compu.svg'} alt="Logo"/>)
}