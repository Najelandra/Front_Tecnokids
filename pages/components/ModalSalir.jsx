import React from 'react';
import styles from '/styles/components/Modal.module.css';
import Modal from 'react-modal';
// import {useHistory} from 'react-router'
import {useRouter} from 'next/router';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'none',
        border: '1px solid transparent'
    }
};

export default function ModalProf(props) {
    // let subtitle;
    const [modalIsOpen,
        setIsOpen] = React.useState(false);

    

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() { }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div
            style={{
                'textAlign': 'center',
                'cursor': 'pointer'
            }}>
            <button onClick={openModal} className={styles.centerimg}>
                <img
                    style={{
                        'width': '22vh'
                    }}
                    src="/imgs-png/text3158.png"
                    alt=" " />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div onClick={closeModal}>
                    <NewDesign ></NewDesign>
                </div>
                <div style={{
                    'textAlign': 'right'
                }}></div>
            </Modal>
        </div>
    );
}

function NewDesign() {

    let router = useRouter();
    function logout() {

        
        //obtener la informacion del usuario obtener la informacion del usuario
        const urlUserData = `${process.env.HOST}${process.env.logout}`;
        const optionsUserData = {
            method: 'GET'
        };

        const res = fetch(urlUserData, optionsUserData).then(function (response) {
            return response
                .text()
                .then(function (text) {
                    console.log(text);
                    if (text == "logout") {
                        sessionStorage.setItem('idUser', '');
                        sessionStorage.setItem('userName', '');
                        sessionStorage.setItem('avatar', '');

                        router.push("../intro/login");
                    }
                });
        });
        
    }

    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={400} viewBox="0 0 474 338" style={{ 'cursor': 'pointer' }}>
            <defs>
                <style>
                    {
                        ".prefix__cls-1{fill:#e1262f}.prefix__cls-3{opacity:.32}.prefix__cls-4{opacity:.42}.prefix__cls-5{fill:#fff}.prefix__cls-6{fill:#f7c402}.prefix__cls-10{fill:#4386c6}.prefix__cls-13{letter-spacing:.03em}.prefix__cls-14{letter-spacing:-.01em}"
                    }
                </style>
            </defs>
            <g id="prefix__Layer_5" data-name="Layer 5">
                <rect
                    className="prefix__cls-1"
                    x={6.17}
                    y={31.32}
                    width={449.51}
                    height={297.69}
                    rx={47.24}
                    ry={47.24} />
                <rect
                    x={24.71}
                    y={51.77}
                    width={412.44}
                    height={256.78}
                    rx={38.17}
                    ry={38.17}
                    fill="#ffe8b8" />
                <path
                    d="M84.54 296.74c-36.54-.49-42.88-15.9-42.88-35.53L30.32 70.05a30.77 30.77 0 00-5.61 17.57V264c0 19.62 8.29 44.26 42.88 44.25h326.67c10.16 0 21.75-2.93 29.09-7.82z"
                    className="prefix__cls-3" />
                <g className="prefix__cls-4">
                    <path
                        className="prefix__cls-5"
                        d="M394.26 52.09H67.59A50.88 50.88 0 0053.79 54L376.3 66.25c23.68 0 42.88 15.91 42.88 35.53l10.5 187.46c4.6-5.66 8.72-20.08 8.72-27.41l-1.26-165.49c0-19.62-19.14-44.25-42.88-44.25z" />
                </g>
                <path
                    d="M419.58 321.78H67c-42 2.47-53.54-33.32-53.54-56.22l.57-206.94c0-7.49 9.07-13 13.13-19.11C15.7 47.83 6 63 6 76.89l.17 206.74C11 299.21 14 328.25 59.24 329h343.37c15.45 0 29.36-5.66 39.06-14.67-6.62 2.92-14.13 7.45-22.09 7.45z"
                    className="prefix__cls-3" />
                <g className="prefix__cls-4">
                    <path
                        className="prefix__cls-5"
                        d="M42.27 38.55h352.56c32.36 2.22 53 30.45 53 53.34v210.82c0 7.49-14.05 16.37-18.12 22.44 11.48-8.33 26-21.64 26-35.52l.17-201.51c0-25.06-23.93-56.8-53.24-56.8H59.24C43.79 31.32 29.88 37 20.18 46c6.62-2.92 14.13-7.45 22.09-7.45z" />
                </g>
                <path
                    d="M408.44 326.51H72.52c-14.37 0-29.15 1.4-42.07-6.33-14-8.35-21.72-23.34-21.78-39.41V80.6c0-14 5.07-27.11 16-36.31C38.07 33 53.78 33.82 70 33.82h236.18c34 0 68.09-.4 102.13 0 19.15.23 36.62 12.32 42.64 30.73 2.35 7.22 2.23 14.41 2.23 21.84V272.2c0 6.1.35 12.42-.87 18.42-4.25 20.86-22.77 35.58-43.87 35.89-3.21 0-3.22 5 0 5a50.35 50.35 0 0045.94-30.69c3.42-8.22 3.8-16.61 3.8-25.29V87.24c0-6.78.23-13.51-1.34-20.17A50.11 50.11 0 00416 29.41a89.55 89.55 0 00-13.5-.59H175.32c-40 0-80-.07-120 0C26.93 28.87 4 50.25 3.67 79.08c-.17 17.78 0 35.57 0 53.35 0 49.37-.15 98.73 0 148.09.08 28.56 22.35 50.9 50.93 51h353.84c3.22-.01 3.22-5.01 0-5.01z" />
                <path
                    d="M399 306.37H153.28c-30.09 0-60.22.41-90.31 0-18.48-.26-34.49-14.17-36.23-32.82-.42-4.5-.16-9.13-.16-13.64V115.77c0-17.21-2.89-37.2 10.17-50.71C48.17 53.24 62.5 54 77.26 54h319.23c22.63 0 38.78 16.21 38.78 38.84v55.05c0 40.72.63 81.49 0 122.21A36.75 36.75 0 01399 306.37c-2.41 0-2.42 3.79 0 3.75 18.08-.33 34.21-12.34 38.78-30.05 1.55-6 1.26-12.15 1.26-18.27v-146c0-17 2.6-36.19-8.7-50.42-7.82-9.85-19.59-15.07-32.05-15.14H171.68c-35.7 0-71.41-.1-107.11 0C41 50.28 22.9 68 22.83 91.65v136.18c0 14.51-.54 29.14 0 43.65a40.43 40.43 0 0031.33 37.69 61.21 61.21 0 0013.3.95H399a1.88 1.88 0 000-3.75z" />
                <path
                    className="prefix__cls-6"
                    d="M52.48 72.07a9.59 9.59 0 00-4.69 9.71 9.75 9.75 0 007.67 7.67 9.9 9.9 0 0010.26-4.91 9.43 9.43 0 00-1.91-11 9.32 9.32 0 00-11.33-1.44" />
                <path
                    d="M51.72 70.78c-4.81 3-7.12 9.2-4.29 14.44a11.18 11.18 0 0014.72 4.68 10.74 10.74 0 005-14.31 11.13 11.13 0 00-15.41-4.81c-1.7.9-.19 3.5 1.52 2.59 9.68-5.17 17.23 10.37 6.82 14.18-9 3.3-14.86-9.07-6.82-14.18 1.62-1 .12-3.63-1.52-2.59z" />
                <path className="prefix__cls-6" d="M50.78 73.31l12.48 14.25" />
                <path
                    d="M49.72 74.37L62.2 88.62c1.27 1.46 3.39-.67 2.12-2.12L51.84 72.25c-1.28-1.45-3.39.68-2.12 2.12z" />
                <path
                    className="prefix__cls-6"
                    d="M52.48 272a9.6 9.6 0 00-4.69 9.71 9.74 9.74 0 007.67 7.67 9.88 9.88 0 0010.26-4.91 9.43 9.43 0 00-1.91-11A9.32 9.32 0 0052.48 272" />
                <path
                    d="M51.72 270.74c-4.81 3.06-7.12 9.2-4.29 14.44a11.18 11.18 0 0014.72 4.68 10.74 10.74 0 005-14.31 11.13 11.13 0 00-15.41-4.81c-1.7.91-.19 3.5 1.52 2.59 9.68-5.17 17.23 10.38 6.82 14.18-9 3.3-14.86-9.07-6.82-14.18 1.62-1 .12-3.63-1.52-2.59z" />
                <path className="prefix__cls-6" d="M50.78 273.28l12.48 14.24" />
                <path
                    d="M49.72 274.34l12.48 14.24c1.27 1.46 3.39-.67 2.12-2.12l-12.48-14.25c-1.28-1.45-3.39.68-2.12 2.13z" />
                <path
                    className="prefix__cls-6"
                    d="M402.43 272a9.6 9.6 0 00-4.69 9.71 9.74 9.74 0 007.67 7.67 9.88 9.88 0 0010.26-4.91 9.43 9.43 0 00-1.91-11 9.32 9.32 0 00-11.33-1.47" />
                <path
                    d="M401.67 270.74c-4.81 3.06-7.12 9.2-4.29 14.44a11.18 11.18 0 0014.72 4.68 10.74 10.74 0 005-14.31 11.13 11.13 0 00-15.41-4.81c-1.7.91-.19 3.5 1.52 2.59 9.68-5.17 17.23 10.38 6.82 14.18-9 3.3-14.86-9.07-6.82-14.18 1.62-1 .12-3.63-1.52-2.59z" />
                <path className="prefix__cls-6" d="M400.73 273.28l12.48 14.24" />
                <path
                    d="M399.67 274.34l12.48 14.24c1.27 1.46 3.39-.67 2.12-2.12l-12.48-14.25c-1.27-1.45-3.39.68-2.12 2.13z" />
                <text
                    transform="translate(110.69 111.46)"
                    fontSize={34.21}
                    fontFamily="Nunito-Bold,Nunito">
                    <tspan fill="#1d1d1b">
                        {"\xBFEstas segur@ "}
                        <tspan x={24.39} y={38}>
                            {"que quieres"}
                        </tspan>
                        <tspan className="prefix__cls-1" x={216.09} y={38} />
                    </tspan>
                    <tspan className="prefix__cls-1" x={-16.97} y={76}>
                        {"cerrar tu sesi\xF3n?"}
                    </tspan>
                    <tspan x={257.44} y={76} fontFamily="Nunito-ExtraBold,Nunito" fontWeight={700} />
                </text>
                <rect
                    className="prefix__cls-3"
                    x={72.73}
                    y={218.75}
                    width={187.61}
                    height={58.5}
                    rx={29.25}
                    ry={29.25} />
                <rect
                    className="prefix__cls-10"
                    x={77.37}
                    y={214.47}
                    width={187.61}
                    height={57.07}
                    rx={28.53}
                    ry={28.53} />
                <path
                    d="M263.25 233.2a27.64 27.64 0 00-1.08-2.56 28.67 28.67 0 00-7.57-9.64c-.71-.58-1.44-1.13-2.2-1.64a28.41 28.41 0 00-16-4.88H104.41a28.41 28.41 0 00-17.2 7c4.29-1.56 8.39-2.71 10.85-2.71l129.83 5c26-.72 32.1 12.77 32.1 28.53 0 3.31-1.34 7.07-2.93 10.45a28.56 28.56 0 006.19-29.53z"
                    fill="#b4cfe8" />
                <path
                    className="prefix__cls-3"
                    d="M79.1 252.82c.32.87.68 1.73 1.08 2.56a28.8 28.8 0 007.57 9.62c.71.58 1.44 1.13 2.2 1.64a28 28 0 004.85 2.63 28.46 28.46 0 0011.1 2.24H238a28.4 28.4 0 0017.2-6.95c-4.3 1.57-8.4 2.71-10.85 2.71l-131.62-2.85c-18.55 0-30.32-14.92-30.32-30.67 0-3.31 1.34-7.07 2.94-10.46a28.56 28.56 0 00-6.2 29.54z" />
                <path
                    d="M236.45 270H125.56c-7.38 0-15 .61-22.4-.13A27 27 0 0197 217.46c7.6-2.62 17-1.49 25-1.49h90.18c8.52 0 17.14-.41 25.65 0a27.28 27.28 0 0125.65 27c0 15-12.3 26.68-27 27-1.93 0-1.94 3 0 3 22.41-.53 37.45-24.82 26.15-44.82A30.52 30.52 0 00236.45 213H136c-9.88 0-19.77-.14-29.64 0-19.52.29-34.59 18.48-29.44 37.81A30.27 30.27 0 0098.14 272c3.88 1 7.78 1 11.75 1h38.26c28.83 0 57.69.33 86.52 0h1.78a1.5 1.5 0 000-3z" />
                <text
                    transform="translate(107.6 253.67)"
                    className="prefix__cls-3"
                    letterSpacing="-.01em"
                    fontSize={24.53}
                    fontFamily="Kg-second-chances,Kg-second-chances">
                    {"C"}
                    <tspan className="prefix__cls-13" x={17.24} y={0}>
                        {"an"}
                    </tspan>
                    <tspan className="prefix__cls-14" x={51.76} y={0}>
                        {"c"}
                    </tspan>
                    <tspan className="prefix__cls-13" x={68.85} y={0}>
                        {"elar"}
                    </tspan>
                </text>
                <text
                    transform="translate(109.13 251.72)"
                    letterSpacing="-.01em"
                    fontSize={24.53}
                    fontFamily="Kg-second-chances,Kg-second-chances"
                    fill="#fff">
                    {"C"}
                    <tspan className="prefix__cls-13" x={17.24} y={0}>
                        {"an"}
                    </tspan>
                    <tspan className="prefix__cls-14" x={51.76} y={0}>
                        {"c"}
                    </tspan>
                    <tspan className="prefix__cls-13" x={68.85} y={0}>
                        {"elar"}
                    </tspan>
                </text>

                <a onClick={() => logout()} href="#!">
                    <rect
                        className="prefix__cls-3"
                        x={282.71}
                        y={218.75}
                        width={103.27}
                        height={58.5}
                        rx={29.25}
                        ry={29.25} />
                    <rect
                        x={285.81}
                        y={214.47}
                        width={103.31}
                        height={57.07}
                        rx={28.53}
                        ry={28.53}
                        fill="#eb8687" />
                    <path
                        d="M388 233.2c-.21-.88-.43-1.73-.69-2.56-1.13-3.74-5.62-6.32-7.62-8.94a18 18 0 00-2.81-2.35c-1.65-1.09-5.33-2.31-5.91-2.63-4-2.25-5.22-2.25-7.71-2.25H310c-4.14.34-7.91 2.91-10.84 7 2.71-1.56 5.29-2.71 6.84-2.71l55.34 2.14c16.4 1.43 24.67 15.63 24.67 31.39a38.39 38.39 0 01-1.85 10.45 38.68 38.68 0 005-19.72 44.07 44.07 0 00-1.16-9.82z"
                        fill="#fae1e1" />
                    <path
                        d="M287 252.82c.21.87.45 1.73.72 2.56 1.2 3.74 6.5 7 8.62 9.65a21.15 21.15 0 001.47 1.64c1 1 4.24 1.91 5.38 2.63 2.28 1.44 8.35 2.24 11 2.24h52.64-1.38a19.23 19.23 0 0012.92-6.95c-2.87 1.57-5.61 2.71-7.25 2.71l-55.92-1.42c-16 0-28.82-16.41-26-32.1a41.81 41.81 0 012-6.89c-3.27 5.13-5.29 8.5-5.29 16.16a41.27 41.27 0 001.09 9.77z"
                        fill="#ad4e4f" />
                    <path
                        d="M360.58 270h-37.07c-5.53 0-11.42.49-16.78-1.08a27 27 0 012.59-52.52c5.1-1 10.7-.47 15.86-.47 12.21 0 24.59-.6 36.79 0a27.28 27.28 0 0125.65 27c0 15-12.3 26.68-27 27-1.92 0-1.93 3 0 3 24.84-.59 39.31-29.87 23-49.37-11.76-14-31.8-10.7-48.08-10.7-16.72 0-35.63-2.58-46.27 13.6-13.27 20.23 2.11 46.17 25.42 46.54 15.29.27 30.6 0 45.89 0a1.5 1.5 0 000-3z" />
                    <text
                        transform="translate(317.35 253.67)"
                        letterSpacing=".05em"
                        stroke="#ad4e4f"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="#ad4e4f"
                        fontSize={24.53}
                        fontFamily="Kg-second-chances,Kg-second-chances">
                        {"Ok"}
                    </text>
                    <text
                        transform="translate(318.78 251.71)"
                        letterSpacing=".05em"
                        fontSize={24.53}
                        fontFamily="Kg-second-chances,Kg-second-chances"
                        fill="#fff">
                        {"Ok"}
                    </text>
                </a>
                <circle cx={417.84} cy={54.16} r={41.43} className="prefix__cls-3" />
                <circle className="prefix__cls-1" cx={426.57} cy={50.43} r={41.43} />
                <circle className="prefix__cls-10" cx={427.03} cy={50.43} r={27.73} />
                <path
                    d="M452.26 50.43c-.34 13.76-11.21 25.19-25.23 25.22a25.23 25.23 0 010-50.45c14 0 24.89 11.48 25.23 25.23.08 3.21 5.08 3.22 5 0-.31-12.55-7.78-23.88-19.69-28.32a30.44 30.44 0 00-34.05 9.35c-17.27 21.46 2 53.4 28.94 48.69 14.44-2.53 24.45-15.35 24.8-29.72.08-3.22-4.92-3.22-5 0z" />
                <g className="prefix__cls-4">
                    <path
                        className="prefix__cls-5"
                        d="M424.54 30.8c15.31 0 26.17 12.46 24 29.59-.42 3.26-.58 6.44-1.62 9.36a27.73 27.73 0 10-46-28.68c5.08-5.18 15.83-10.27 23.62-10.27z" />
                </g>
                <path
                    d="M431.39 69.7c-14.89 0-27-10.52-27-23.5 0-2.78-2.09-7.94-1.07-10.42-4.72 4.24-5 12.5-5 18.87 0 13 12.07 23.5 27 23.5 11.7 0 21.65-5.88 25.38-15-4.89 4.44-11.7 6.55-19.31 6.55z"
                    className="prefix__cls-3" />
                <path
                    d="M452.88 50.43c-.34 14.1-11.49 25.81-25.85 25.85a25.86 25.86 0 010-51.71c14.36 0 25.51 11.77 25.85 25.86.06 2.4 3.81 2.41 3.75 0-.3-12.27-7.58-23.36-19.22-27.72A29.84 29.84 0 00404 31.9c-16.81 21 2 52.29 28.33 47.64 14.17-2.5 24-15 24.34-29.11.02-2.43-3.73-2.43-3.79 0z" />
                <path
                    className="prefix__cls-5"
                    transform="rotate(-45 426.569 50.43)"
                    d="M423.47 38.55h6.2v23.76h-6.2z" />
                <path
                    className="prefix__cls-5"
                    transform="rotate(-135 426.567 50.425)"
                    d="M423.47 38.55h6.2v23.76h-6.2z" />
                <path
                    d="M430.3 84.38c-22.88 0-42.36-14.95-38.94-42.68.87-7 1.77-13.67 4.87-19.48a41.43 41.43 0 1066.91 47.69c-7.57 8.09-20.85 14.47-32.84 14.47z"
                    className="prefix__cls-3" />
                <g className="prefix__cls-4">
                    <path
                        className="prefix__cls-5"
                        d="M420.4 16.47c23.61-3.12 45.67 18.38 39.81 44.24-1.56 6.87-2.64 12.11-5.74 17.92a41.43 41.43 0 10-66.9-47.69c7.56-8.13 20.94-12.94 32.83-14.47z" />
                </g>
                <path
                    d="M465.5 50.43c-.27 16.19-10.2 31.05-25.63 36.6a38.94 38.94 0 01-46.81-56.44 38.93 38.93 0 0172.44 19.84c.05 3.21 5.05 3.22 5 0a43.93 43.93 0 10-81.42 22.92 44.41 44.41 0 0045.67 20.23c20.74-3.8 35.41-22.37 35.75-43.15.05-3.22-4.95-3.22-5 0z" />
            </g>
        </svg>

    )
}