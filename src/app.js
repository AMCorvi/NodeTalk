import React, {Component} from 'react';
import ReactDom from 'react-dom'
 
//External Components
import ChatRoom from "./components/chatroom.js"

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
                <ChatRoom />
            </div>

            
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
