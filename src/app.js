import React, {Component} from 'react';
import ReactDom from 'react-dom';
import * as firebase from 'firebase';
 
//External Components
import ChatRoom from "./components/chatroom.js";
import UserWindow from "./components/userwindow.js";
import SignInModal from "./components/signin_modal.js";

// Component Styles
let styles = {
        app: {
                display: 'flex',
                fontFamily: ` 'Ubuntu', sans-serif `,
                height: "100vh",
                margin: '0',
                width: "100vw"
             }
}


// Initialize firebase

      const config = {
        apiKey: "AIzaSyAhYImR87niWp7-hhBckisrfv1us4b9D78",
        authDomain: "nodetalk.firebaseapp.com",
        databaseURL: "https://nodetalk.firebaseio.com",
        projectId: "nodetalk",
        storageBucket: "nodetalk.appspot.com",
        messagingSenderId: "400797870003"
      };
      firebase.initializeApp(config);


class App extends Component {

    constructor(){

        super()
        this.setClientUsername = this.setClientUsername.bind(this);
        this.state = {
            clientUser:''
        }

    } // end of constructor_function

    setClientUsername(username){
        
        //write user entry in the '/user' database endpoint
        firebase.database().ref('/users').child(username.toLowerCase()).update(
            {
               'username': username,
               'lastupdate': Date.now(),
               'connected': true
            }
        )

        //write user to state
        this.setState( { clientUser: username } )
    } // end of setUserClientUsername_function

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
