import React, {Component} from 'react';



// Component Styles

    let mainColor = '#1A1C2B',
        accentColor = '#1F2130';

    let styles = {
            userWindowContainer: {
                display: 'flex',
                flex: '1 0 25%',
                flexFlow: 'wrap column',
                height: '100vh',
                overflow: 'scroll',
            },
            titleBar: {
                alignItems: 'center',
                background: '#F50057',
                color: 'white',
                display: 'flex',
                flex: '100%',
                justifyContent: 'center',
                height: 55,
                position: 'absolute',
                width: '25%'
            },
            userList:{
                // background: 'white',
                height: '100%',
                marginTop: 55,
                overflow: 'scroll'
            },
            user: {
                color: 'white',
                fontSize: '1em',
                // background: '#F50057',
                borderBottom: '1px solid gray',
                // borderTop: '1px solid grey',
                padding: '20px',
            }

    }



    export default class UserWindow extends Component {
        constructor(props, context){
            super(props)
            this.retrieveListofUsers = this.retrieveListOfUsers.bind(this);
            this.state = {
                    users: ['AMCorvi', 'greenburg', 'Stan', 'Kyle', 'Kenny', 'Cartman','AMCorvi', 'greenburg', 'Stan', 'Kyle', 'AMCorvi', 'greenburg', 'Stan', 'Kyle', ]
                }
        }

        retrieveListOfUsers(){
            let user = this.state.users.map( (elem, index) => {
                return (
                    <div className="user" style={styles.user}>
                        {elem}
                    </div>
                )
            })

            return user;
        }

        render(){
            
            return (
                <div className="userWindowContainer" style={styles.userWindowContainer}>
                          <div className='titleBar' style={styles.titleBar} >
                                nodeTalk
                          </div>                                              
                          <div className="userList" style={styles.userList} >
                         {this.retrieveListOfUsers()} 
                      </div>
            </div>
        )

    }

        
    }
