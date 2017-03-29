import React, {Component} from 'react';
import ReactDom from 'react-dom'
 
//External Components
import ChatRoom from "./components/chatroom.js";
import UserWindow from "./components/userwindow.js";

let styles = {
        app: {

            fontFamily: ` 'Ubuntu', sans-serif `,
            height: "100vh",
            margin: '0',
            width: "100vw",
                        
        }
    }

class App extends Component {

    render (){
        return (

            <div style={styles.app}>
                <UserWindow />
                <ChatRoom />
            </div>

            
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
