function Siguenos(props) {
    return (
        <div style={{
            'textAlign': 'center'
        }}>
            {props.titulo && <h3
                style={{
                'fontFamily': 'Kg-second-chances',
                'textAlign': 'left',
                'paddingBottom': '10px',
                'fontSize': '20px'
            }}>Síguenos</h3>}

            <div class="flex flex-wrap overflow-hidden">

                <div class="w-1/4 overflow-hidden">
                    <a target="_blank" href="https://www.facebook.com/tecnokids.co">
                        <img
                            style={{
                            'width': '80%'
                        }}
                            src={'/svg/facebook.svg'}
                            alt="Logo"/>
                    </a>
                </div>

                <div class="w-1/4 overflow-hidden">
                    <a target="_blank" href="https://www.instagram.com/tecnokids.co/">
                        <img
                            style={{
                            'width': '80%'
                        }}
                            src={'/svg/instagram.svg'}
                            alt="Logo"/>
                    </a>
                </div>

                <div class="w-1/4 overflow-hidden">
                    <a
                        target="_blank"
                        href="
https://www.youtube.com/channel/UCfzUVBt3DrBfpS97AK0oUNg">
                        <img
                            style={{
                            'width': '80%'
                        }}
                            src={'/svg/youtube.svg'}
                            alt="Logo"/>
                    </a>
                </div>

                <div class="w-1/4 overflow-hidden">
                    <a target="_blank" href="https://www.tiktok.com/@tecnokids.co">
                        <img
                            style={{
                            'width': '80%'
                        }}
                            src={'/svg/tiktok.svg'}
                            alt="Logo"/>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Siguenos
