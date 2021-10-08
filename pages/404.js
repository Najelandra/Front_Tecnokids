
import RobotinaOK from "./svgs/Characters/RobotinaOK"

function ImgNotF(props) {
    return (
        <h3>¡Regresa a la página anterior!</h3>
    )
}

export default function Custom404() {
    return (
        <div style={{
            'padding': '10%'
        }}>

            <RobotinaOK></RobotinaOK>
            <ImgNotF></ImgNotF>
        </div>
    )
}