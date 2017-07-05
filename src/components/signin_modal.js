import React, { Component } from "react";



// Component Styles

const   mainColor = '#1A1C2B',
        accentColor = '#F50057';

const styles = {
        
        signInModal: {
            alignItems: 'center',
            background: mainColor,
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
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
        },
        usernameAdvisory: {

           textAlign: 'center',
           color: accentColor,
           marginTop: 20,
           opacity: 1,   
           transition: 'opacity 1s ease-in-out'
           
        }
        
}


export default class SignInModal extends Component {

    constructor(props,context){
        super(props,context)
        this.setClientUsername = this.props.setUser;
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            username: ""
        };

    }// end of constructor_function


    handleInput(e){

        // RegEx to check for text field with no characters
        let emptySpaces = new RegExp(/^\s+/, 'g')

        if(e.key == 'Enter' && e.target.value != '' && !e.target.value.match(emptySpaces)){


            // call setClientUsername method
            //  - Method will return true and set usernam if name handle is available
            //  - If handle is not available method will return false value to usernameChoice Method
            let usernameWasAvailable = this.setClientUsername(e.target.value);


            if( usernameWasAvailable == true ){
                styles.signInModal = {display: 'none'};
            } else {
                e.target.value = "";
            }


        }
    }

    render(){

      if ( this.props.activationStatus === false ) {
            return (

                        <div className='signInModal' style={styles.signInModal}>
                            <input onKeyPress={this.handleInput} className='usernameInput' style={styles.usernameInput} placeholder='UserName'/>
                            <div className='usernameAdvisory' style={styles.usernameAdvisory}>
                                That Username Is Being Used... But I Believe In Your Creativity                               
                                <br/> Try Another Username
                            </div>
                        </div>
                
                )

        } else {
            return (

                        <div className='signInModal' style={styles.signInModal}>
                            <input onKeyPress={this.handleInput} className='usernameInput' style={styles.usernameInput} placeholder='UserName'/>
                        </div>
                
                )
            }
    }

}
