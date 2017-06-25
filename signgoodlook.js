import React, { Component } from 'react';
import * as firebase from 'firebase';

// Component Styles

const mainColor = '#1A1C2B';
const accentColor = '#F50057';


const styles = {

  signInModal: {
    alignItems: 'center',
    background: mainColor,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    opacity: '.95',
    position: 'absolute',
    width: '100vw',
    zIndex: 1,
  },
  usernameInput: {
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${accentColor}`,
    color: accentColor,
    fontSize: '4em',
    outline: 'none',
    textAlign: 'center',
    width: '50%',
  },
};


export default class SignInModal extends Component {

  constructor(props, context) {
    super(props, context);
    this.setClientUsername = this.props.setUser;
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      username: '',
    };
  }// end of contructor_function

  handleInput(e) {
        // RegEx to check for text field with no characters
    const emptySpaces = new RegExp(/^\s+/, 'g');

    if (e.key == 'Enter' && e.target.value != '' && !e.target.value.match(emptySpaces)) {
      firebase.auth().signInAnonymously().catch((e) => {
        console.log(`${e.code}: \n\n e.message`);
      });

      this.setClientUsername(e.target.value);
      styles.signInModal = { display: 'none' };
      debugger;
      return null;
    }

    this.setState({ username: e.target.value });
  }

  render() {
    return (

      <div className="signInModal" style={styles.signInModal}>
        <input onKeyPress={this.handleInput} className="usernameInput" style={styles.usernameInput} placeholder="UserName" />
      </div>

    );
  }

}
