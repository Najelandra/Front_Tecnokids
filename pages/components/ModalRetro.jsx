import React from 'react';
import styles from '/styles/intro/Ins.module.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '55vh',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
        background: 'none',
        border: '1px solid transparent'
    }
};

export default function ModalRetro() {

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
            
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <div >
                    <svg
                        id="prefix__Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x={0}
                        y={0}
                        viewBox="0 0 346 280"
                        xmlSpace="preserve">
                        <style>
                            {
                                ".prefix__st1{fill:#f0a4a5}.prefix__st3{font-family:&apos;Nunito-Bold&apos;}.prefix__st4{font-size:27px}"
                            }
</style>
                        <path
                            d="M320.7 273.2H28.2c-8.9 0-16.1-7.2-16.1-16.1V23.7c0-8.9 7.2-16.1 16.1-16.1h292.5c8.9 0 16.1 7.2 16.1 16.1V257c0 9-7.2 16.2-16.1 16.2z"
                            fill="#ffda83"/>
                        <path
                            d="M320.7 272.1H33.9c-3.4 0-7.2.3-10.5-.7-6.3-2-10.3-8-10.4-14.6V23.5c.1-8.3 6.7-15 15.1-15.1h291.5c2.4 0 4.6.2 6.8 1.1 5.8 2.4 9.4 8 9.4 14.2v233.1c-.1 8.6-6.8 15.3-15.1 15.3-1.3 0-1.3 2 0 2 8.9-.1 16.5-7 17.1-16 .1-1.1.1-2.2.1-3.2V23.6c0-6.2-3.2-12-8.7-15.1-2.8-1.6-6-2.2-9.2-2.2H29.9c-.9 0-1.9 0-2.8.1-9.1.7-16 8.2-16.1 17.1v233.1c.1 6.5 3.6 12.6 9.4 15.5 4.1 2 8.4 1.8 12.8 1.8h287.4c1.4.3 1.4-1.8.1-1.8z"/>
                        <path
                            className="prefix__st1"
                            d="M315.7 20.4c-2.2 1.2-3.5 3.9-3.1 6.3.4 2.5 2.5 4.6 5.1 5.1 2.6.5 5.5-.9 6.7-3.2 1.2-2.4.7-5.4-1.3-7.2-2.4-2.3-5.4-2.2-7.4-1"/>
                        <path
                            d="M315.1 19.6c-2.6 1.5-4 4.5-3.5 7.5.5 2.8 3 5.3 5.9 5.7 2.9.5 6.1-.9 7.6-3.5s1.1-6-.9-8.2c-2.2-2.6-6.1-3.3-9.1-1.5-1.1.7-.1 2.4 1 1.8 1.9-1.1 4.2-.9 5.9.5 1.7 1.4 2.4 3.8 1.6 5.9-.7 1.9-2.8 3.2-4.9 3.2-2.2 0-4.3-1.4-4.9-3.4-.9-2.4.3-5 2.4-6.2 1.1-.8.1-2.5-1.1-1.8z"/>
                        <path className="prefix__st1" d="M314.5 21.3c2.7 3.1 5.5 6.2 8.2 9.3"/>
                        <path
                            d="M313.9 21.9c2.7 3.1 5.5 6.2 8.2 9.3.3.4 1.1.3 1.4 0 .4-.4.3-1 0-1.4-2.7-3.1-5.5-6.2-8.2-9.3-.3-.4-1.1-.3-1.4 0-.5.4-.5 1 0 1.4z"/>
                        <path
                            className="prefix__st1"
                            d="M315.9 249.3c-2.2 1.2-3.5 3.9-3.1 6.3.4 2.4 2.5 4.6 5.1 5.1 2.6.5 5.5-.9 6.7-3.2 1.2-2.4.7-5.4-1.3-7.2-2.4-2.3-5.3-2.2-7.4-1"/>
                        <path
                            d="M315.4 248.5c-2.6 1.5-4 4.5-3.5 7.5.5 2.8 3 5.3 5.9 5.7 2.9.5 6.1-.9 7.6-3.5s1.1-6-.9-8.2c-2.3-2.6-6.1-3.2-9.1-1.5-1.1.7-.1 2.4 1 1.8 1.9-1.1 4.2-.9 5.9.5 1.7 1.4 2.4 3.8 1.6 5.9-.7 1.9-2.8 3.2-4.9 3.2-2.2 0-4.3-1.4-4.9-3.4-.9-2.4.3-5 2.4-6.2 1.1-.8.1-2.5-1.1-1.8z"/>
                        <path className="prefix__st1" d="M314.8 250.1c2.7 3.1 5.5 6.2 8.2 9.3"/>
                        <path
                            d="M314.1 250.9c2.7 3.1 5.5 6.2 8.2 9.3.3.4 1.1.3 1.4 0 .4-.4.3-1 0-1.4-2.7-3.1-5.5-6.2-8.2-9.3-.3-.4-1.1-.3-1.4 0-.5.4-.4 1 0 1.4z"/>
                        <path
                            className="prefix__st1"
                            d="M25 20c-2.2 1.2-3.5 3.9-3.1 6.3.4 2.5 2.5 4.6 5.1 5.1 2.6.5 5.5-.9 6.7-3.2s.7-5.4-1.3-7.2c-2.4-2.2-5.3-2.2-7.4-1"/>
                        <path
                            d="M24.5 19.2c-2.6 1.5-4 4.5-3.5 7.5.5 2.8 3 5.3 5.9 5.7 2.9.5 6.1-.9 7.6-3.5s1.1-6-.9-8.2c-2.3-2.6-6.1-3.2-9.1-1.5-1.1.7-.1 2.4 1 1.8 1.9-1.1 4.2-.9 5.9.5s2.4 3.8 1.6 5.9c-.7 1.9-2.8 3.2-4.9 3.2-2.2 0-4.3-1.4-4.9-3.4-.9-2.4.3-5 2.4-6.2 1-.7 0-2.4-1.1-1.8z"/>
                        <path className="prefix__st1" d="M23.9 20.8c2.7 3.1 5.5 6.2 8.2 9.3"/>
                        <path
                            d="M23.1 21.6c2.7 3.1 5.5 6.2 8.2 9.3.3.4 1.1.3 1.4 0 .4-.4.3-1 0-1.4-2.7-3.1-5.5-6.2-8.2-9.3-.3-.4-1.1-.3-1.4 0-.4.4-.3 1 0 1.4z"/>
                        <g>
                            <path
                                className="prefix__st1"
                                d="M25 249.3c-2.2 1.2-3.5 3.9-3.1 6.3.4 2.5 2.5 4.6 5.1 5.1 2.6.5 5.5-.9 6.7-3.2 1.2-2.4.7-5.4-1.3-7.2-2.4-2.3-5.3-2.2-7.4-1"/>
                            <path
                                d="M24.5 248.5c-2.6 1.5-4 4.5-3.5 7.5.5 2.8 3 5.3 5.9 5.7 2.9.5 6.1-.9 7.6-3.5s1.1-6-.9-8.2c-2.3-2.6-6.1-3.2-9.1-1.5-1.1.7-.1 2.4 1 1.8 1.9-1.1 4.2-.9 5.9.5 1.7 1.4 2.4 3.8 1.6 5.9-.7 1.9-2.8 3.2-4.9 3.2-2.2 0-4.3-1.4-4.9-3.4-.9-2.4.3-5 2.4-6.2 1-.8 0-2.5-1.1-1.8z"/>
                            <path className="prefix__st1" d="M23.9 250.1c2.7 3.1 5.5 6.2 8.2 9.3"/>
                            <path
                                d="M23.1 250.9c2.7 3.1 5.5 6.2 8.2 9.3.3.4 1.1.3 1.4 0 .4-.4.3-1 0-1.4-2.7-3.1-5.5-6.2-8.2-9.3-.3-.4-1.1-.3-1.4 0-.4.4-.3 1 0 1.4z"/>
                        </g>
                        <path fill="none" d="M54.3 74h240.4v132.7H54.3z"/>
                        <text transform="translate(65.668 93.209)">
                            <tspan x={0} y={0} className="prefix__st3 prefix__st4">
                                {"\xA1LISTOOO! Ahora "}
                            </tspan>
                            <tspan x={-2.8} y={32.4} className="prefix__st3 prefix__st4">
                                {"esperemos que tu "}
                            </tspan>
                            <tspan x={5.1} y={64.8} className="prefix__st3 prefix__st4">
                                {"profe apruebe la "}
                            </tspan>
                            <tspan x={-11.1} y={97.2} className="prefix__st3 prefix__st4">
                                {"carga del proyecto."}
                            </tspan>
                        </text>
                    </svg>

                </div>
                {/**   <div style={{
                    'textAlign': 'right'
                }}>
                    <button
                        style={{
                        'backgroundColor': '#F51C51',
                        'borderRadius': '25px',
                        'padding': '10px',
                        'color': 'white'
                    }}
                        onClick={closeModal}>Cancelar</button>
                </div> */}
            </Modal>
        </div>
    );
}
