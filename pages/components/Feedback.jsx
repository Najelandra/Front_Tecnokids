import React from 'react';
import RobotinaMal from '/pages/svgs/Characters/RobotinaMal'
import RobotinaOK from '/pages/svgs/Characters/RobotinaOK'

/**
 * @version 1.0
 * @author Creatvra
 * @function Feedback
 *
 */

const feedbackStyles = {
    backgroundColor: "#C8E5E8",
    padding: "23px",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width: "100%"
}

function FeedbackOK() {
    return (
        <div style={feedbackStyles}>
            <div className="grid grid-cols-3 gap-1">
                <div className="col-span-2 ...">
                    <strong>
                        Fantastico! todas tus respuestas son correctas. Sigue así.
                    </strong>
                </div>
                <div className="...">
                    <RobotinaOK></RobotinaOK>
                </div>
            </div>
            <div>
                <ButtonCt></ButtonCt>
            </div>
        </div>
    )
}

const feedbackStyles2 = {
    backgroundColor: "#F2A097",
    padding: "23px",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width: "100%"
}

function FeedbackNO(props) {
    return (
        <div style={feedbackStyles2}>
            <div className="grid grid-cols-3 gap-1">
                <div className="col-span-2 ...">
                    <strong>
                        ¡Revisa tus respuestas!
                    </strong>
                </div>
                <div className="...">
                    <RobotinaMal></RobotinaMal>
                </div>
            </div>
            <div>
                <ButtonCtNO link={props.route}></ButtonCtNO>
            </div>
        </div>
    )
}

const containerStylesNO = {
    backgroundColor: "#EA6764",
    borderBottom: "5px solid #D56462",
    borderRight: "5px solid #D56462",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    fontWeight: "bold",
    color: "white",
    width: "100%",
    display: "block",
    textAlign: "center"
}

function ButtonCtNO(props) {
    return (

        <a style={containerStylesNO} href={props.link}>
            <strong>
                CONTINUAR
            </strong>
        </a>

    )
}

const containerStyles = {
    backgroundColor: "#7EC7CD",
    borderBottom: "5px solid #3B6D72",
    borderRight: "5px solid #3B6D72",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    fontWeight: "bold",
    width: "100%",
    display: "block",
    textAlign: "center"
}

class ButtonCt extends React.Component {
    handleClick() {
        console.log(' ', this);
    }
    render() {
        return (

            <a onClick={() => this.handleClick()} style={containerStyles} href="./a2">
                <strong>
                    CONTINUAR
                </strong>
            </a>

        );
    }
}

export default function Feedback(props) {
    return (
        <div>
            {props.eval == "1"
                ? (
                    <FeedbackOK></FeedbackOK>
                )
                : <FeedbackNO route={props.next}></FeedbackNO>}

        </div>
    )
}