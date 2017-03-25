import React, {Component} from 'react';
import ReactDom from 'react-dom'
 
//External Components
import ChatRoom from "./components/chatroom.js"


class App extends Component {

    render (){
        return (

            <div>
                This is nodeTalk!
                <ChatRoom />
            </div>

            
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
