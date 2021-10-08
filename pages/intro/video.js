import styles from '../../styles/intro/Welcome.module.css'
import Link from 'next/link'
import React from "react";
import NavegSup from '../components/Navegsup'

class Video extends React.Component {
    constructor(props) {
        super(props);
        //creating ref
        this.videoRef = React.createRef();
        this.state = {
            contador: 0,
            muteado: 0,
            terminado: 0
        };
    }
    render() {
        return (
            <div>
                <video
                    controls
                    ref={this.myRef}
                    onPause={() => this.setState({
                    contador: this.state.contador + 1
                })}
                    onPlaying={() => this.setState({
                    muteado: this.state.muteado + 1
                })}
                    onEnded={() => this.setState({
                    terminado: this.state.terminado + 1
                })}>

                    <source src="https://aframe.glud.org/vid2.mp4" type="video/mp4"/>

                    Sorry, your browser doesn't support embedded videos.
                </video>
                <p>
                    El vídeo ha sido pausado {this.state.contador}
                    {' '}
                    veces, el video ha sido renaudado {this.state.muteado}
                    {' '}
                    veces.
                    <br/>
                    Adicionalmente, se ha llegado al final {this.state.terminado}
                    {' '}
                    veces.

                </p>
            </div>

        );
    }
}

export default function Home() {

    return (
        <div className={styles.container}>
            <NavegSup></NavegSup>
            <main className={styles.main}>
                <div className="grid grid-cols-1 gap-1">
                    <h1 className={styles.titulo1}>
                        Observa el vídeo y pausalo
                    </h1>
                    <span className={styles.imgprinc}>
                        <Video/>
                    </span>

                    <Link href="/intro/guias" className={styles.btn1}>
                        <a href="#" className="">
                            <strong>
                                Continuar
                            </strong>
                        </a>
                    </Link>
                </div>

            </main>
        </div>
    )
}
