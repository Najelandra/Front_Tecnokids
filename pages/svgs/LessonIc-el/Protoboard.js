export default function Proto(props) {
    return (
        <div>
            {props.active == "0" && <SVGProtoBN></SVGProtoBN>
}
            {props.active == "1" && <SVGProtoC></SVGProtoC>
}

        </div>

    )
}

function SVGProtoBN(props) {
    return (<img src={'/svg/protoboard-inactivo.svg'} alt="Logo"/>) 
}

function SVGProtoC(props) {
    
    return (<img src={'/svg/protoboard-activo.svg'} alt="Logo"/>)
}