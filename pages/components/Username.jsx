import React from "react";

export default class Username extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:''
        }
    
    } 
    componentDidMount(prevProps) {
        var self = this;
        var username = '';
        if (typeof window !== 'undefined') {
            username = sessionStorage.getItem('userName');
            self.setState({ username: username });
        }
    }

    
    render() {
        let user_name = <div></div>;
        if(this.state.username != '')
        {
            user_name =<BackUsername username={this.state.username}></BackUsername>
        }
        return (
            <div style={{
                'backgroundColor': '#62BFCF',
                'paddingTop':'3px'
            }}>

            {user_name}  

            </div>
        )

    }

}



export function BackUsername(props) {

    var username = props.username;

    return (
        <span style={{
            'backgroundColor': '#FAC706',
            'borderRadius': '25px',
            'border': '2px solid black',
            'fontFamily':'Nunito-Bold',
            'paddingLeft': '10px',
            'paddingRight': '10px'
        }}> {username} </span>


    );

}