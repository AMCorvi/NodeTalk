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
        this.syncUsersToApp = this.syncUsersToApp.bind(this);
        this.state = {
            activeSession: null, 
            clientUser:'',
            users: {}
            

        }

    } // end of constructor_function

    componentDidMount() {
            
        console.log(firebase.auth().currentUser) ;

    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(
            (user) => {
                if(user){
                    this.setState({
                        activeSession: user
                    });
                }
            }
        )
    }


    setClientUsername(username){

        // Reference to entire user object
        debugger ;
        let userListRef = firebase.database().ref('/users')
        console.log(userListRef);
        debugger;
        

        if ( this.state.activeSession == null) {

            // Reference object location specific to current user 
            let userRef = userListRef.child(username.toLowerCase());
    
                firebase.auth().signInAnonymously().catch( e => {
                    console.log(`${e.code}: \n\n e.message`);
                });

                //write user entry in the '/user' database endpoint
                console.log(this.state.activeSession.uid);
                userRef.update(
                    {
                       'username': username,
                       'userID': this.state.activeSession.uid,
                       'lastupdate': Date.now(),
                       'connected': true
                    }
                );
        } else {
            
            //retrieve userid from session cookie
            let { uid } = this.state.activeSession ;

            //Craving a burrito bad!!! Taco King RUN!?
            //Retrieve user information from user endpoint and set user to state

            let usernameFromID = _.filter(this.state.users, (elem) => {
                return elem.userID == uid ;
            });

            // Determine if username was passed to functions if not set it
            username = (!username) ? usernameFromID : username ;

        }



        // write user to state
        // this.setState( {
        //     clientUser: username,
        // } )






        //write user to state
        this.setState( { clientUser: username } )
    } // end of setUserClientUsername_function

    render (){
        
        return (

            <div style={styles.app}>

                {
                    this.state.activeSession == null
                    ? <SignInModal setUser={this.setClientUsername} /> 
                    : this.setClientUsername() 
                }
               

                <UserWindow syncUsers={ this.syncUsersToApp } clientuser={this.state.clientUser} style={styles.userWindow} />

                <ChatRoom  clientuser={this.state.clientUser} style={styles.chatRoom} />

            </div>
            
        )
    }
}


ReactDom.render(<App/>, document.getElementById('app'))
