import React, {Component} from 'react';
import ReactDom from 'react-dom'
 
//External Components
import ChatRoom from "./components/chatroom.js";
import UserWindow from "./components/userwindow.js";
import SignInModal from "./components/signin_modal.js";


let styles = {
        app: {
                display: 'flex',
                fontFamily: ` 'Ubuntu', sans-serif `,
                height: "100vh",
                margin: '0',
                width: "100vw"
             }
}


class App extends Component {

    constructor(){
        super()
        this.setClientUsername = this.setClientUsername.bind(this);
        this.state = {
            clientUser:''
        }
    }

    setClientUsername(username){
        this.setState( {clientUser: username } )
    }
    render (){
        return (

            <div style={styles.app}>
                <SignInModal setUser={this.setClientUsername} />
                <UserWindow clientuser={this.state.clientUser} style={styles.userWindow} />
                <ChatRoom  clientuser={this.state.clientUser} style={styles.chatRoom} />
            </div>
            
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
