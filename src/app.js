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
                height: "100%",
                margin: '0',
                width: "100%"
             }
}


class App extends Component {

    constructor(){
        super()
        this.state = {
            clientUser:''
        }
    }


    render (){
        return (

            <div style={styles.app}>
                <SignInModal clientuser={this.state.clientUser} />
                <UserWindow clientuser={this.state.clientUser} style={styles.userWindow} />
                <ChatRoom  clientuser={this.state.clientUser} style={styles.chatRoom} />
            </div>
            
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
