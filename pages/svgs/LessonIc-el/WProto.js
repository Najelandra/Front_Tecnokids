export default function WProto(props) {
    return (
        <div>
            {props.active == "0" && <SVGWProtoBN></SVGWProtoBN>
}
            {props.active == "1" && <SVGWProtoC></SVGWProtoC>
}

        </div>

    )
}

function SVGWProtoBN(props) {
    return (<img src={'/svg/protoboard-inactivo-compu.svg'} alt="Logo"/>) 
}

function SVGWProtoC(props) {
    
    return (<img src={'/svg/protoboard-activo-compu.svg'} alt="Logo"/>)
}