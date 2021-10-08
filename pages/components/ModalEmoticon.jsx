import React from 'react';
// import styles from '/styles/intro/Ins.module.css'
import Modal from 'react-modal';
// import {useHistory} from 'react-router'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'none',
        border: '1px solid transparent',
        cursor: 'pointer'
    }
};

export default function ModalEmoticon(props) {

    let emoticon1 = props.emoticon1;
    let emoticon2 = props.emoticon2;
    let emoticon3 = props.emoticon3;

    // let subtitle;
    const [modalIsOpen,
        setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

        //Enviar Emoticon seleccionado a Moodle
        const urlUserData = `${process.env.HOST}${process.env.set_emoticon_user}${props.idUser}&lessonid=${props.idLesson}&emoticon=${props.opt}`;
        const optionsUserData = {
            method: 'GET'
        };

        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response
                .text()
                .then(function (text) {
                    console.log(text);
                    if (text == "avatar modificado") {
                        window
                            .location
                            .reload();
                    }
                });
        }).catch((error) => {
            console.log(error);
        });
    }

    function closeModal() {

        setIsOpen(false);
    }

    return (
        <div
            style={{
            'textAlign': 'center',
            'cursor': 'pointer'
        }}>
            <button onClick={openModal} style={{}}>
                {props.opt == 1 && <img src={emoticon1}></img>}
                {props.opt == 2 && <img src={emoticon2}></img>}
                {props.opt == 3 && <img src={emoticon3}></img>}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div onClick={closeModal}>
                    {props.opt == 1 && <img src="/imgs/sera1.png"></img>}
                    {props.opt == 2 && <img src="/imgs/aiuda1.png"></img>}
                    {props.opt == 3 && <img src="/imgs/menc1.png"></img>}
                </div>

            </Modal>
        </div>
    );
}
