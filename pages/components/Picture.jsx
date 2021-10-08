import AProfile from "../svgs/NavBar/AProfile"
import IConfig from "../svgs/NavBar/IProfile"
import styles from "../../styles/components/Navsup.module.css"
import React from 'react';

function Picture(props) {
    return (

        <a href="/add/profile" className={styles.row}>
            <div
                className={styles.column}
                style={{
                    'width': '49px',
                    'position': 'absolute'
                }}>
                {/**    <AProfile></AProfile> */}

                <ImgProfile></ImgProfile>

            </div>
            <div className={styles.column}>
                <p
                    className={styles.letra}
                    style={{
                        'marginLeft': '105%'
                    }}>
                    Perfil
                </p>
            </div>
        </a>

    )
}
export default Picture

class ImgProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            avatar: '1',
            idUser: '',
            city: '',
            institute: ''
        };
    }

    componentDidMount(prevProps) {
        var self = this;
        // get Id usuario
        var id = '';
        var username = '';
        var avatar = '';
        if (typeof window !== 'undefined') {
            id = sessionStorage.getItem('idUser');
            username = sessionStorage.getItem('userName');
            avatar   = sessionStorage.getItem('avatar');
            if (!id) {
                router.push('../intro/login');  
            }
            self.setState({ idUser: id });      
            self.setState({ username: username });
            self.setState({ avatar: avatar });
        }

        
        //obtener la informacion del usuario
        const urlUser = `${process.env.HOST}/moodle/login/indexws.php?methodcore=core_users_profile&userid=${id}`;
        const optionsUser = {
            method: 'GET'
        };

        const resUser = fetch(urlUser, optionsUser).then(function (response) {
            return response.json();
        })
            .then(function (data) {
                console.log('usuario', data);

                self.setState({ institute: data.inst });
                self.setState({ city: data.city });
            })
            .catch((error) => {
                console.log(error);
            });

    }
    render() {

        var avatar = <div></div>;
        if(this.state.avatar != '')
        {
           avatar =  <img
                src={`${process.env.HOST}/moodle/img/AVATAR/${this.state.avatar}.png`}
                style={{
                    'border': '3px solid white',
                    'borderRadius': '65%',
                    'width': '58px'
                }}
                alt="" />;

        }

        return (
             <div>
                {avatar}
             </div>               
        )
    }

}