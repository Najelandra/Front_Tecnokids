import NavBar0 from '../svgs/PNavBars/NavBar0';
import NavBar1 from "../svgs/PNavBars/NavBar1"
import NavBar2 from "../svgs/PNavBars/NavBar2"
import NavBar3 from "../svgs/PNavBars/NavBar3"
import NavBar4 from "../svgs/PNavBars/NavBar4"
import NavBar5 from "../svgs/PNavBars/NavBar5"
import NavBar6 from "../svgs/PNavBars/NavBar6"
import NavBarInac from '../svgs/PNavBars/NavBarInac';


/**
 * @version 1.0
 * @author Creatvra
 * @function ProgressBar
 * @description Manejador de barritas de acuerdo al porcentaje
 */

export default function ProgressBar(props) {
    return (
        <div>
            {props.completed == "1" && <NavBar0></NavBar0>}
            {props.completed == "0" && <NavBar1></NavBar1>}
            {props.completed == "20" && <NavBar3></NavBar3>}
            {props.completed == "40" && <NavBar4></NavBar4>}
            {props.completed == "60" && <NavBar5></NavBar5>}
            {props.completed == "80" && <NavBar6></NavBar6>}
            {props.completed == "100" && <NavBar2></NavBar2>}
            {props.completed == "in" && <NavBarInac></NavBarInac>}
        </div>
    )
}