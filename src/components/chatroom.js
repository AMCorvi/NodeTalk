import React, { Component } from 'react';


//Component Styling
let styles = {

        chatContainer: {
            background: '#1A1C2B',
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
            fontFamily: '"Roboto", san-serif',
            fontSize: '1em',
            fontWeight: '300',
            marginTop: '40px',
            marginBottom: '20px',
            width: '100%'
        },
        messageOutgoing: {
            alignSelf: 'flex-end',
            background: '#1F2130',
            border: '1px  #1F2130 solid',
            borderRadius: '10px',
            margin: "0px 10px 5px 10px",
            maxWidth: "55%",
            padding: '5px'
        },
        messageIncoming: {
            alignSelf: 'flex-start',
            background: '#F50057',
            border: '1px #F50057 solid',
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
            background: '#1F2130',
            border: 'none',
            color: 'white',
            flex: '2 1 80%',
            fontFamily: ' "Roboto" , san-serif ',
            fontSize: '1em',
            fontWeight: '100',
            textAlign: 'center'
        },
        userMessageSubmit: {
            background: '#1F2130',
            border: 'none',
            color: '#F50057',
            flex: '1 20%',
            fontFamily: ' "Roboto" , san-serif ',
            fontSize: '1em',
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

                        <div style={ styles.messageIncoming }>message 1</div>
                        <div style={ styles.messageIncoming }>message 2</div>
                        <div style={ styles.messageOutgoing }>This is a sample of a long message. Its purpose is to determine the parameters by which longer messages are to be displayed</div>

                    </div>



                <div style={styles.userInputMessageGroup}>
                    
                    <input style={styles.userMessageInput} type="text" placeholder="Type your message here 😎" />
                    <button style={styles.userMessageSubmit}>Send</button>

                </div>

            </div>
        )

    }
}
