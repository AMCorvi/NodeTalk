import React, { Component } from 'react';


//Component Styling
let styles = {

        chatContainer: {
            background: 'black',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            margin: 0,
            width: '100%'
        },
        messagesList: {
            alignItems: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '1.3em',
            marginTop: '40px',
            marginBottom: '20px',
            width: '100%'
        },
        messageOutgoing: {
            alignSelf: 'flex-start',
            background: 'purple',
            border: '1px fuschia solid',
            borderRadius: '10px',
            margin: "0px 10px 5px 10px",
            maxWidth: "55%",
            padding: '5px'
        },
        messageIncoming: {
            alignSelf: 'flex-end',
            background: 'grey',
            border: '1px fuschia solid',
            borderRadius: '10px',
            margin: "0px 10px 5px 10px",
            maxWidth: "55%",
            padding: '5px'
        },
        userInputMessageGroup: { 
            display: 'flex',
            justifyContent: 'center'
        },
        userMessageInput: {
            flex: '2 1 80%'
        },
        userMessageSubmit: {
            flex: '1 20%',
            height: 70
        }

}


export default class ChatRoom extends Component {

    constructor(props,context){
        super(props, context)
        this.state =  {
            messages: [
                {id:1, text: 'first message'},
                {id:2, text: 'second message'},
                {id:3, text: 'third message'},
            ]
        }
    }
    

    render(){


        return ( 
            <div style={styles.chatContainer} >


                    <div style={styles.messagesList}>

                        <div style={ styles.messageOutgoing }>message 1</div>
                        <div style={ styles.messageOutgoing }>message 2</div>
                        <div style={ styles.messageIncoming }>This is a sample of a long message. Its purpose is to determine the parameters by which longer messages are to be displayed</div>
                    </div>



                <div style={styles.userInputMessageGroup}>
                    
                    <input style={styles.userMessageInput} type="text" placeholder="Type your message here 😎" />
                    <button style={styles.userMessageSubmit}>Submit Message</button>

                </div>

            </div>
        )

    }
}
