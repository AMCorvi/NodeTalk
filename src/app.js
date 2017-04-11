import React, {Component} from 'react';
import ReactDom from 'react-dom'
 
//External Components
import ChatRoom from "./components/chatroom.js";
import UserWindow from "./components/userwindow.js";

let styles = {
        app: {
            display: 'flex',
            fontFamily: ` 'Ubuntu', sans-serif `,
            height: "100%",
            margin: '0',
            width: "100%",
        },
        // userWindow: {
        //     flex: '1 1 75%',
        // },
        // chatRoom: {
        //     flex: '2 1 25%',
        // }
    }

class App extends Component {

    render (){
        return (

            <div style={styles.app}>
                <UserWindow style={styles.userWindow} />
                <ChatRoom style={styles.chatRoom} />
            </div>
            
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
