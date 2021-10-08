import React from 'react';
import styles from '/styles/courses/A1.module.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '50vh',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative'
    }
};

export default function ModalLanding() {

    const [modalIsOpen,
        setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div style={{
            'textAlign': 'center'
        }}>
            <button onClick={openModal}>
                <img
                    style={{
                    'marginTop': '10px',
                    'width': '126px'
                }}
                    src={'/svg/MENU-HAM.svg'}
                    alt="Logo"/>

            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <div >
                <br></br>
                <br></br>
                    <ul
                        style={{
                        'fontFamily': 'Kg-second-chances',
                        'textAlign': 'center'
                    }}>
                        <li>Cursos</li>
                        <li>
                            Proyectos
                        </li>
                        <li>
                            Tecnokids
                        </li>
                        <li>
                           Nuestro Canal
                        </li>
                    </ul>
                    <br></br>
                    <img
                    style={{
                    'marginTop': '10px',
                    'width': '236px'
                }}
                    src={'/robotina-feliz.png'}
                    alt="Logo"/>
                                    </div>
                <div style={{
                    'textAlign': 'right'
                }}>
                    <button
                        style={{
                        'backgroundColor': '#F51C51',
                        'borderRadius': '25px',
                        'padding': '10px',
                        'color': 'white',
                        'fontFamily': 'Kg-second-chances'
                    }}
                        onClick={closeModal}>Cancelar</button>
                </div>
            </Modal>
        </div>
    );
}
