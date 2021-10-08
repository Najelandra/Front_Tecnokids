export default function Dibujoanim(props) {
    return (
        <div>
            {props.active == "0" && <SVGDibujoanimBN></SVGDibujoanimBN>
}
            {props.active == "1" && <SVGDibujoanimC></SVGDibujoanimC>
}

        </div>

    )
}

function SVGDibujoanimBN(props) {
    return (<img src={'/svg/dibujoanimado-inactivo.svg'} alt="Logo"/>) 
}

function SVGDibujoanimC(props) {
    
    return (<img src={'/svg/dibujoanimado-activo.svg'} alt="Logo"/>)
}