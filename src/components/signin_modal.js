import React, { Component } from "react";


// Component Styles

const   mainColor = '#1A1C2B',
        accentColor = '#F50057';

const styles = {
        
        signInModal: {
            alignItems: 'center',
            background: mainColor,
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            opacity: '.95',
            position: 'absolute',
            width: '100vw',
            zIndex: 1
        },
        usernameInput: {
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid ' + accentColor,
            color: accentColor,
            fontSize: '4em',
            outline: "none",
            textAlign: 'center',
            width: '50%'
        }   
}


export default class SignInModal extends Component {

    constructor(props,context){
        super(props,context)
        this.setClientUsername = this.props.setUser;
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            username: ''
        };

    }// end of contructor_function

    handleInput(e){
        if(e.key == 'Enter'){
            this.setClientUsername(e.target.value);
            styles.signInModal = {display: 'none'};
            return 0
        }
       this.setState({username: e.target.value}) 
    }

    render(){
        return (

                    <div className='signInModal' style={styles.signInModal}>
                        <input onKeyPress={this.handleInput} className='usernameInput' style={styles.usernameInput} placeholder='UserName'/>
                    </div>
            
            )
    }

}
