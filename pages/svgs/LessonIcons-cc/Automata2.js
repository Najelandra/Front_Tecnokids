function Automata2(props) {
    return (
        <div>
            {props.active == "0" && <SVGAut2BN></SVGAut2BN>
}
            {props.active == "1" && <SVGAut2C></SVGAut2C>
}
        </div>

    )
}

export default Automata2

function SVGAut2C() {
    return (
        <img src={'/svg/automata2-activo.svg'} alt="Logo"/>
    )
}

function SVGAut2BN() {
    return (<img src={'/svg/automata2-inactivo.svg'} alt="Logo"/>) 
}
