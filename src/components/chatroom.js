import React, { Component } from 'react';


//Component Styling
let styles = {
    messagesList: {
        color: "red",
        fontSize: "30px",
        margin: "0px auto", 
        marginBottom: "20px"
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
            <div>
                <ol style={styles.messagesList}>
                    <li>meassage 1</li>
                    <li>meassage 2</li>
                    <li>meassage 3</li>
                </ol>
                <br/>
                <input type="text" placeholder="Type your message here 😎" />
                <button>Submit Message</button>
            </div>
        )

    }
}
