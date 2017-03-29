import React, {Component} from 'react';

let styles = {
    
    userWindowContainer: {}
    }

export default class UserWindow extends Component {
    constructor(props, context){
        super(props)
        this.state = {
            users: {
            
            }
        }
    }

    render(){
        
        return (
            <div className="userWindowContainer" styles={styles.userWindowContainer}>
                                                    
            </div>
        )

    }

        
    }
