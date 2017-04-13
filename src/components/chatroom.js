import React, { Component } from 'react';


//Component Styling

let mainColor = '#1A1C2B',
    accentColor = '#1F2130';

let styles = {

        chatContainer: {
            background: '#1A1C2B',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'space-between',
            margin: 0,
            width: '75%'
        },
        chatStatusBar:{
            background: 'rgba(26, 28, 43, 0.9)',
            boxShadow: '1px -30px 60px 0.1px white',
            color: 'chartreuse',
            display: 'flex',
            // filter: 'blur(5px)',
            justifyContent: 'center',
            alignItems: 'center',
            height: 55,
            position: 'absolute',
            width: '75%'
            
        },
        statusBlur: {
            filter: 'blur(5px)',
            height: '100%',
            position: 'absolute',
            width: '100%',
        },
        statusMessage: {
            left: '35%',
            position: 'absolute'
        },
        messagesList: {
            alignItems: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            fontFamily: '"Roboto", san-serif',
            fontSize: '1em',
            fontWeight: '300',
            height: '100%',
            // margin: '55px 0 0 0 ',
            overflow: 'scroll',
            padding: '55px 0 20px 0',
            width: '100%'
        },
        messageGroup: {
            display: 'flex',
            // flex: '1 1 100%',
            flexDirection: 'column',
            margin: '10px 0px',
            width:'100%'
        },
        messageOutgoing: {
            alignSelf: 'flex-end',
            background: '#1f2130',
            border: '1px  #1F2130 solid',
            borderRadius: '15px',
            height: 'auto',
            margin: "0px 10px 5px 10px",
            maxWidth: "55%",
            padding: '5px'
        },
        messageIncoming: {
            alignSelf: 'flex-start',
            background: '#F50057',
            border: '1px #F50057 solid',
            borderRadius: '10px',
            height: 'auto',
            margin: "0px 10px 5px 10px",
            maxWidth: "55%",
            padding: '5px'
        },
        userMessageInputGroup: { 
            alignItems: 'center', 
            display: 'flex',
            lineHeight: 3,
            marginTop: 10
        },
        userMessageInput: {
            background: '#1F2130',
            border: 'none',
            color: 'white',
            flex: '1 80%',
            fontFamily: ' "Roboto" , san-serif ',
            fontSize: '1em',
            fontWeight: '100',
            height: 68,
            textAlign: 'center',
            verticalAlign: 'center'
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
        this.postMessage = this.postMessage.bind(this);
        this.retrieveMessages = this.retrieveMessages.bind(this);
        this.scrollToLastMessage = this.scrollToLastMessage.bind(this);
        this.messageList = document.getElementsByClassName('messagesList');
        this.state =  {
            currentUser: "AMCorvi", 
            currentUserMessage: '',
            messages: [
                {id:1, user:"Kernel",  time: Date.now(), text: 'first message'},
                {id:2, user:"Kernel", time: Date.now(), text: 'second message'},
                {id:3, user:"AMCorvi", time: Date.now(), text: 'third message'},
            ]
        }
    }

   

    postMessage(e){
        
        // console.log(e.target.value);
        // console.log( this.state.messages, this.state.currentUserMessage )

        if (e.target.value != '' && e.key === 'Enter'){
            console.log(e.key, e.target.value)
            this.setState( { messages: [
                                            ...this.state.messages,
                                            {
                                                id: (this.state.messages.length + 1 ),
                                                user: this.state.currentUser,
                                                time: Date.now(),
                                                text: e.target.value
                                            }
                                       ] 
                                }
            )


            this.scrollToLastMessage();
            return e.target.value  = ""
        }//end of if_block 
    }// end of postMessage_function 
    
    retrieveMessages(){
       let messages = this.state.messages.map(
            (elem, index)=>{
                if (elem.user == this.state.currentUser){
                    return (
                        <div className='messageGroup' key={index} style={styles.messageGroup}>
                            <div className="messageOutgoing" style={styles.messageOutgoing} >
                                {elem.text}
                            </div>
                        </div>
                    )
                } else{
                    return (
                        <div className="messageGroup" key={index} style={styles.messageGroup}>
                            <div className="messageIncoming" style={styles.messageIncoming} >
                                {elem.text}
                            </div>
                        </div>
                    )
                }
            }
        )

        return messages
    } // end of retrieveMessage_function
    
    scrollToLastMessage(){
            
            let messageWindowElement = document.getElementsByClassName('messagesList')
            let messageWindowHeight = messageWindowElement[0].scrollHeight;
            messageWindowElement[0].scrollTop = messageWindowHeight;
        }

    render(){

        return ( 
            <div className='chatContainer' style={styles.chatContainer} >
                        <div className='chatStatusBar' style={styles.chatStatusBar}>
                            <div className='statusBlur' style={styles.statusBlur}> &nbsp; </div> 
                            <div className='statusMessage' style={styles.statusMessage}> 
                                • &nbsp;  &nbsp; Connected
                            </div>
                        </div>


                    <div className='messagesList' style={styles.messagesList}>
                       
                        {this.retrieveMessages()}

                    </div>


                <div className='userMessageInputGroup'  style={styles.userMessageInputGroup}>
                    
                    <textarea
                        className='userMessageInput' style={styles.userMessageInput} type="text"
                        placeholder="Type your message here 😎" 
                        onKeyPress={this.postMessage}
                    /> 



                    <button className='userMessageSubmit' style={styles.userMessageSubmit}>Send</button>

                </div>

            </div>
        )

    }
}
