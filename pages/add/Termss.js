import styles from '../../styles/courses/Profile.module.css';
import styles2 from '../../styles/Home.module.css'
import Construccion from '../components/Construccion';
import React from 'react';
//import Profile from '../components/Profile';
import Footer from '../components/Footer';

function Title1(params) {
    return (
        <div
            style={{
            'fontFamily': 'Kg-second-chances',
            'paddingRight': '7vw',
            'fontSize': '25px',
            'paddingLeft': '7vw'
        }}>
            <br></br>
            <h1 style={{}}>
                POLÍTICA DE PRIVACIDAD<br></br>
                PLATAFORMA TECNOKIDS
            </h1>
        </div>
    )
}

function Paragraph1(params) {
    return (
        <section style={{'fontFamily':'Nunito-Semibold'}}>
            CREATVRA SAS, obrando como el creador y operador de la plataforma TECNOKIDS, en
            el marco de su proyecto de integración social por medio de la educación y la
            tecnología , le informa sobre su Política de Privacidad respecto del Tratamiento
            y Protección de los Datos de carácter Personal de los usuarios que puedan ser
            recabados durante el uso de la plataforma TECNOKIDS. El mero uso de la
            plataforma implica la aceptación de esta Política de Privacidad. Sin embargo, es
            menester aclarar que las Instituciones Educativas (IE) son quienes tendrán
            directo contacto con los usuarios y se deja claro que CREATVRA no recopilará ni
            dará Tratamiento a los Datos Personales de menores de edad.

        </section>
    )
}

function Paragraph2(params) {
    return (
        <section>
            <strong style={{'fontFamily':'Nunito-Semibold'}}>Identidad del responsable</strong>
            <ol style={{
                'display': 'list-item',
                'list-style-type': 'circle',
                'marginLeft': '20px ',
                'fontFamily':'Nunito-Semibold'
            }}>
                <li>
                    Responsable: CREATVRA S.A.S
                </li>
                <li>
                    NIT: 900750374
                </li>
                <li>
                    Domicilio: Bogotá - Colombia.
                </li>
                <li>
                    Dirección: Calle 45ª # 20-32
                </li>
                <li>
                    Teléfono: 3108718051
                </li>
                <li>
                    Correo electrónico: soporte@tecnokids.com.co

                </li>
                <li>
                    Sitio Web: https://www.tecnokids.com.co/
                </li>
            </ol>

        </section>
    )
}

function Paragraph3(params) {
    return (
        <section style={{'fontFamily':'Nunito-Semibold'}}>
            CREATVRA, mediante la operación de la plataforma TECNOKIDS, en virtud de su
            condición de responsable del Tratamiento de Datos Personales obtenidos en el
            marco de su función como prestadora de servicios educativos y didácticos de
            carácter privado, y en procura de garantizar la protección de los derechos
            fundamentales de los titulares de los datos, da a conocer sus Políticas de
            Tratamiento de Datos Personales. La aceptación de estas políticas presupone el
            compromiso de cuidado en el contacto y manejo de los Datos Personales de menores
            por parte de las personas que tienen contacto directo con los usuarios de la
            plataforma, siendo estos menores de edad.
        </section>
    )
}

function Paragraph4(params) {
    return (
        <section>
            <h2
                style={{
                'fontFamily': 'Kg-second-chances',
                'fontSize': '23px',
                'color': '#F55361'
            }}>
                Legislación aplicable
            </h2>
            <br></br>
           <p style={{'fontFamily':'Nunito-Semibold'}}> Constitución Política de Colombia, artículos 15 y 20.</p>
            <ul
                style={{
                'display': 'list-item',
                'list-style-type': 'circle',
                'marginLeft': '20px ',
                'fontFamily':'Nunito-Semibold'
            }}>
                <li>
                    Ley 1266 de 2008.
                </li>
                <li>
                    Ley 1581 de 2012.
                </li>
                <li>
                    Decreto 1377 de 2013.
                </li>
                <li>
                    Decreto Único 1074 de 2015.
                </li>
                <li>
                    Decreto 090 de 2018.
                </li>
                <li>
                    Sentencias de la Corte Constitucional C – 1011 de 2008, y C – 748 del 2011.
                </li>
                <li>
                    Circular 003 de 2018, emitida por la Superintendencia de Industria y Comercio.
                </li>
                <li>
                    Guías y cartillas emitidas por la Superintendencia de Industria y Comercio.
                </li>
            </ul>
        </section>
    )
}

function Paragraph5(params) {
    return (
        <section>
            <h2
                style={{
                'fontFamily': 'Kg-second-chances',
                'fontSize': '23px',
                'color': '#F55361'
            }}>Principios</h2>
            <br></br>
          <p style={{'fontFamily':'Nunito-Semibold'}}>  CREATVRA aplicará los siguientes principios específicos que se establecen a
            continuación, los cuales constituyen las reglas a seguir en la recolección,
            manejo, uso, tratamiento, almacenamiento e intercambio de Datos Personales: 
            </p>
            <br></br>
            <strong  style={{'fontFamily':'Nunito-Bold'}}> a. Principio de legalidad:
            </strong>
         <span style={{'fontFamily':'Nunito-Semibold'}}>   en el uso, captura, recolección y tratamiento de Datos Personales, se dará
            aplicación a las disposiciones vigentes y aplicables que rigen el Tratamiento de
            Datos Personales y demás derechos fundamentales conexos.
</span>
            <br></br>
            <strong style={{'fontFamily':'Nunito-Bold'}}>
                b. Principio de libertad:
            </strong>
            <span style={{'fontFamily':'Nunito-Semibold'}}>  el uso, captura, recolección y Tratamiento de Datos Personales solo puede
            llevarse a cabo con el consentimiento previo, expreso e informado del titular.
            Los Datos Personales no podrán ser obtenidos o divulgados sin previa
            autorización, o en ausencia de mandato legal, estatutario, o judicial que releve
            el consentimiento.</span>
            <br></br>
            <strong style={{'fontFamily':'Nunito-Bold'}}>
                c. Principio de finalidad:
            </strong>
            <span style={{'fontFamily':'Nunito-Semibold'}}>   el uso, captura, recolección y Tratamiento de Datos Personales a los que tenga
            acceso y sean acopiados y recogidos por CREATVRA estarán subordinados y
            atenderán una finalidad legítima, la cual debe serle informada al respectivo
            titular de los Datos Personales.</span>
            <br></br>
            <strong style={{'fontFamily':'Nunito-Bold'}}>
                d. Principio de veracidad o calidad:
            </strong>
            <span style={{'fontFamily':'Nunito-Semibold'}}>  la información sujeta a uso, captura, recolección y Tratamiento de Datos
            Personales debe ser veraz, completa, exacta, actualizada, comprobable y
            comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos,
            fraccionados o que induzcan a error.</span>
            <br></br>
            <strong style={{'fontFamily':'Nunito-Bold'}}>
                e. Principio de transparencia:
            </strong>
            <span style={{'fontFamily':'Nunito-Semibold'}}>   en el uso, captura, recolección y Tratamiento de Datos Personales debe
            garantizarse el derecho del titular a obtener de CREATVRA en cualquier momento y
            sin restricciones, información acerca de la existencia de cualquier tipo de
            información o dato personal que sea de su interés o titularidad.</span>
            <br></br>
            <strong style={{'fontFamily':'Nunito-Bold'}}>
                f. Principio de acceso y circulación restringida:
            </strong>
            <span style={{'fontFamily':'Nunito-Semibold'}}>  los Datos Personales, salvo la información pública, no podrán estar disponibles
            en Internet u otros medios de divulgación o comunicación masiva, salvo que el
            acceso sea técnicamente controlable para brindar un conocimiento restringido
            solo a los titulares o terceros autorizados. Para estos propósitos la obligación
            de CREATVRA será de medio.</span>
            <br></br>
            <strong style={{'fontFamily':'Nunito-Bold'}}>
                g. Principio de seguridad:
            </strong>
            <span style={{'fontFamily':'Nunito-Semibold'}}>  los Datos Personales e información usada, capturada, recolectada y sujeta a
            tratamiento por CREATVRA, será objeto de protección en la medida en que los
            recursos técnicos y estándares mínimos así lo permitan, a través de la adopción
            de medidas tecnológicas de protección, protocolos y todo tipo de medidas
            administrativas que sean necesarias para otorgar seguridad a los registros y
            repositorios electrónicos evitando su adulteración, modificación, pérdida,
            consulta y, en general, en contra de cualquier uso o acceso no autorizado.</span>
        </section>
    )
}

export default function Terms() {

    return (
        <div className={styles.container}>
            {/**    <Header></Header> */}
            <main className={styles.main}>
                <div style={{
                    'position': 'relative'
                }}>
                    <a href="/courses/main">
                        <img
                            src="/imgs-png/ex.png"
                            style={{
                            'position': 'absolute',
                            'width': '40px',
                            'right': '0vw'
                        }}></img>
                    </a>
                </div>
                <Title1></Title1>

                <div
                    style={{
                    'textAlign': 'left',
                    'padding': '3vw'
                }}>
                    <Paragraph1></Paragraph1>
                    <br></br>
                    <Paragraph2></Paragraph2>
                    <br></br>
                    <Paragraph3></Paragraph3>
                    <br></br>
                    <Paragraph4></Paragraph4>
                    <br></br>
                    <Paragraph5></Paragraph5>
                    <br></br>
                    <Paragraph6></Paragraph6>
                    <br></br>
                    <Paragraph7></Paragraph7>
                    <br></br>
                    <Paragraph8></Paragraph8>
                    <br></br>
                    <Paragraph9></Paragraph9>
                    <br></br>
                    <Paragraph10></Paragraph10>
                    <br></br>
                    <Paragraph11></Paragraph11>
                    <br></br>
                    <Paragraph12></Paragraph12>
                    <br></br>
                    <Paragraph13></Paragraph13>
                    <br></br>

                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

function Paragraph6(params) {
    return (
        <div>
            <section>
                <h2
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '23px',
                    'color': '#F55361'
                }}>Finalidad del Tratamiento de Datos Personales</h2>
                <br></br>
                <p style={{'fontFamily':'Nunito-Semibold'}}>
                    Cuando se hace uso de la plataforma TECNOKIDS, la Institución Educativa o el
                    tallerista está facilitando la recolección de datos concernientes a las
                    respuestas, el proceso y demás menesteres de carácter meramente operativo
                    mediante perfiles de los cuales CREATVRA no tendrá conocimiento del nombre, ni
                    de la edad, ni del género, ni ningún tipo de información personal de menores de
                    edad. El manejo de esta información y su tratamiento es meramente
                    responsabilidad de la Institución Educativa o el tallerista encargado de tal
                    fin.
                </p>
            </section>
        </div>

    )
}

function Paragraph7(params) {
    return (
        <div>
            <section>
                <h2
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '23px',
                    'color': '#F55361'
                }}>Datos sensibles
                </h2>
                <br></br>
                <p style={{'fontFamily':'Nunito-Semibold'}}>
                    Se podrá hacer uso y tratamiento de los datos catalogados como sensibles cuando:
                </p>
                <ul style={{'fontFamily':'Nunito-Semibold',
               'display': 'list-item',
               'list-style-type': 'circle',
               'marginLeft': '20px ',}}>
                    <li>
                        El titular o su acudiente hayan dado su autorización explícita a dicho
                        tratamiento, salvo en los casos que por ley no sea requerido el otorgamiento de
                        dicha autorización.
                    </li>
                    <li>
                        El Tratamiento sea necesario para salvaguardar el interés vital del titular y
                        este se encuentre física o jurídicamente incapacitado. En estos eventos, los
                        representantes legales deberán otorgar su autorización.
                    </li>
                    <li>
                        El Tratamiento sea efectuado en el curso de las actividades legítimas y con las
                        debidas garantías por parte de una fundación, ONG, asociación o cualquier otro
                        organismo sin ánimo de lucro, cuya finalidad sea política, filosófica, religiosa
                        o sindical, siempre que se refieran exclusivamente a sus miembros o a las
                        personas que mantengan contactos regulares por razón de su finalidad. En estos
                        eventos, los datos no se podrán suministrar a terceros sin la autorización del
                        titular.
                    </li>
                    <li>
                        El Tratamiento se refiera a datos que sean necesarios para el reconocimiento,
                        ejercicio o defensa de un derecho en un proceso judicial.
                    </li>
                    <li>
                        El Tratamiento tenga una finalidad histórica, estadística o científica. En este
                        evento deberán adoptarse las medidas conducentes a la supresión de identidad de
                        los titulares.
                    </li>
                </ul>
            </section>
        </div>

    )
}

function Paragraph8(params) {
    return (
        <div>
            <section>
                <h2
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '23px',
                    'color': '#F55361'
                }}>
                    Autorización del titular
                </h2>
                <br></br>
                <p style={{'fontFamily':'Nunito-Semibold'}}>
                    Sin perjuicio de las excepciones previstas en la ley, en el Tratamiento se
                    requiere la autorización previa, expresa e informada del titular, la cual deberá
                    ser obtenida por cualquier medio que pueda ser objeto de consulta y verificación
                    posterior.
                    <br></br>
                    <br></br>
                    En este caso, tendrá que mediar un consentimiento informado de los acudientes,
                    dejando de presente que ni CREATVRA ni sus asociados darán tratamiento a ningún
                    tipo de datos de los usuarios de la plataforma.
                    <br></br>
                    <br></br>
                    La autorización se dará por medio de cualquier documento físico, electrónico,
                    mensaje de datos, Internet, sitios web, en cualquier otro medio que permita
                    garantizar su posterior consulta, o mediante un mecanismo técnico o tecnológico
                    idóneo, que permita manifestar u obtener el consentimiento.
                </p>

            </section>
        </div>

    )
}

function Paragraph9(params) {
    return (
        <div>
            <section>
                <h2
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '23px',
                    'color': '#F55361'
                }}>
                    Derechos de los niños, niñas y adolescentes
                </h2>
                <br></br>
                <p style={{'fontFamily':'Nunito-Semibold'}}>
                    En el Tratamiento se asegurará el respeto a los derechos prevalentes de los
                    menores. Queda proscrito el Tratamiento de Datos Personales de menores, salvo
                    aquellos datos que sean de naturaleza pública.
                    <br></br>
                    <br></br>
                    Es tarea del Estado y las entidades educativas de todo tipo proveer información
                    y capacitar a los representantes legales y tutores sobre los eventuales riesgos
                    a los que se enfrentan los menores respecto del tratamiento indebido de sus
                    Datos Personales, y proveer de conocimiento acerca del uso responsable y seguro
                    por parte de niños, niñas y adolescentes de sus Datos Personales, su derecho a
                    la privacidad y protección de su información personal y la de los demás.
                    <br></br>
                    <br></br>
                    Por lo tanto, la plataforma TECNOKIDS no recopilará de ninguna manera Datos
                    Personales de menores de edad, solo se crearán perfiles de usuario identificados
                    con números consecutivos y todo perfil se borrará ante la solicitud de la
                    Institución Educativa o el tallerista encargado.

                </p>

            </section>
        </div>

    )
}

function Paragraph10(params) {
    return (
        <div>
            <section>
                <h2
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '23px',
                    'color': '#F55361'
                }}>
                    Derechos de los titulares de la información
                </h2>
                <br></br>
                <ul  style={{'fontFamily':'Nunito-Semibold'}}>
                    <li>
                        a. Acceder, conocer, rectificar y actualizar sus Datos Personales frente a
                        CREATVRA, en su condición de responsable del Tratamiento.
                    </li>
                    <li>
                        b. Por cualquier medio válido, solicitar prueba de la autorización otorgada a
                        CREATVRA, en su condición de responsable del Tratamiento.
                    </li>
                    <li>
                        c. A recibir información por parte de CREATVRA, previa solicitud, respecto del
                        uso que les ha dado a sus Datos Personales.
                    </li>
                    <li>
                        d. Acudir ante las autoridades legalmente constituidas, en especial ante la
                        Superintendencia de Industria y Comercio, y presentar quejas por infracciones a
                        lo dispuesto en la normatividad vigente en las normas aplicables, previo trámite
                        de consulta o requerimiento ante el responsable del Tratamiento.
                    </li>
                    <li>
                        e. Modificar y revocar la autorización o solicitar la supresión del dato cuando
                        en el Tratamiento no se respeten los principios, derechos y garantías
                        constitucionales y legales vigentes.
                    </li>
                    <li>
                        f. Tener conocimiento y acceder en forma gratuita a sus Datos Personales que
                        hayan sido objeto de Tratamiento.
                    </li>

                </ul>

            </section>
        </div>

    )
}

function Paragraph11(params) {
    return (
        <div>
            <section>
                <h2
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '23px',
                    'color': '#F55361'
                }}>
                    Deberes de CREATVRA en relación con el Tratamiento de los Datos Personales
                </h2>
                <br></br>
                <p style={{'fontFamily':'Nunito-Semibold'}}>
                    CREATVRA tendrá presente, en todo momento, que los Datos Personales son
                    propiedad de las personas a las que se refieren y que solo ellas pueden decidir
                    sobre los mismos. En este sentido, hará uso de ellos solo para aquellas
                    finalidades para las que se encuentra facultado debidamente, y respetando en
                    todo caso la normatividad vigente sobre protección de Datos Personales.
                </p>

            </section>
        </div>

    )
}

function Paragraph12(params) {
    return (
        <div>
            <section>
                <h2
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '23px',
                    'color': '#F55361'
                }}>
                    Pasos para corregir, actualizar o suprimir Datos Personales
                </h2>
                <br></br>
                <p style={{'fontFamily':'Nunito-Semibold'}}>
                    El titular de los datos recopilados en todo momento está facultado para
                    solicitar a CREATVRA el acceso a los Datos Personales registrados en la
                    plataforma TECNOKIDS, así como la solicitud de la corrección, actualización o
                    supresión de los Datos Personales recolectados si estos dan lugar por medio de
                    envío de la correspondiente solicitud en los siguientes medios:
                </p>
                <ul
                    style={{
                    'display': 'list-item',
                    'list-style-type': 'circle',
                    'marginLeft': '20px ',
                    'fontFamily':'Nunito-Semibold'
                }}>
                    <li>
                        Correspondencia en la dirección: Calle 45ª #20-32
                    </li>
                    <li>
                        Correo electrónico: soporte@tecnokids.com.co
                    </li>
                    <li>
                        Teléfono: 3108718051
                    </li>

                </ul> <br></br>
                <p style={{'fontFamily':'Nunito-Semibold'}}>
                    En la solicitud de la petición queda o reclamo frente a los Datos Personales a
                    tratar debe costar la siguiente información.
                </p>
                <ul
                    style={{
                    'display': 'list-item',
                    'list-style-type': 'circle',
                    'marginLeft': '20px ',
                    'fontFamily':'Nunito-Semibold'
                }}>
                    <li>
                        Nombre completo y apellidos del titular de los Datos Personales y si da a lugar
                        el acudiente de este.
                    </li>
                    <li>
                        Datos de contacto del titular de los datos personales.
                    </li>
                    <li>
                        Dirección física o correo electrónico.
                    </li>
                    <li>
                        Teléfono de contacto.
                    </li>
                    <li>
                        Motivos del reclamo, petición o consulta junto con el derecho que dese ejercitar
                        (conocer, actualizar, rectificar, solicitar prueba de la autorización otorgada,
                        revocarla, suprimir, acceder a la información, entre otros).
                    </li>
                    <li>
                        Número de identificación.
                    </li>
                </ul> <br></br>
                <p style={{'fontFamily':'Nunito-Semibold'}}>
                    Posterior a la recepción de la petición, queja o reclamo del titular, CREATVRA
                    cuenta con quince días hábiles para dar respuesta. Si este término no se cumple,
                    se informará dentro de un tiempo perentorio de ocho días hábiles más para dar
                    respuesta. Y si este término no se da, el titular es libre de poner el caso en
                    conocimiento de la Superintendencia de Industria y Comercio –Delegatura para la
                    Protección de Datos Personales–.
                </p>
            </section>
        </div>

    )
}

function Paragraph13(params) {
    return (
        <div>
            <section>
                <h2
                    style={{
                    'fontFamily': 'Kg-second-chances',
                    'fontSize': '23px',
                    'color': '#F55361'
                }}>
                    Vigencia de la Política
                </h2>
                <br></br>
                <p  style={{'fontFamily':'Nunito-Semibold'}}>

                    La vigencia de la presente Política será desde el día 15 de agosto del año 2021,
                    momento en el cual estará publicada en la plataforma para su posterior consulta.
                    <br></br>
                    <br></br>
                    Cualquier cambio sustancial en las Políticas de Tratamiento de Datos Personales
                    se comunicará con antelación a los educadores, titulares y acudientes, y será
                    publicada en la misma plataforma para su consulta.
                </p>

            </section>
        </div>

    )
}
