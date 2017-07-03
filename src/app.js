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
            clientUser: "",
            activationStatus: undefined 
      }

    } // end of constructor_function

    setClientUsername(username){
        


        
        // declare variable used to represent successful selection and creation of
        // of username (i.e. true) or unsuccessful selection (i.e. false)
        let result 

        // Referance point to user table
        let ref = firebase.database().ref('/users')

        
        // OnComplete callback function 
        const setResult = (snapshot)=>{     
           
            !snapshot.child(username.toLowerCase()).exists() ?
             result = true
             : result = false
        }

        ref.once('value',setResult,this)
        .then(function(snapshot){


            // Control to set user to database if name available. 
            //  If user is already in existance set advisory for user
            if( snapshot.child( username.toLowerCase()).exists() === true ){
                // TODO: send props signin component to display that username is unavailable
                    
                 

            } else {


                //post user entry in the '/user' database endpoint
                ref.child(username.toLowerCase()).set(
                    {
                       'username': username,
                       'lastupdate': Date.now(),
                       'connected': true
                    }
                );


        
            }
        })

        
        // set username and successful 'activationStatus' to true in state if username is available
        //  If: Username is not available set activation status to false.  
        result ? this.setState({
            activationStatus: true,
            clientUser: username 
        }) 
        : this.setState({ activationStatus: false });
        
        return result

    } // end of setUserClientUsername_function

    render (){
        return (

            <div style={styles.app}>
                <SignInModal setUser={this.setClientUsername} activationStatus={this.state.activationStatus}/>
                <UserWindow clientuser={this.state.clientUser} style={styles.userWindow} />
                <ChatRoom  clientuser={this.state.clientUser} style={styles.chatRoom} />
            </div>
            
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'))
