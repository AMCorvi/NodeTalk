import React, {Component} from 'react';



// Component Styles

    const mainColor = "#1A1C2B",
        accentColor = "#F50057";

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
                // height: '100vh',
                marginTop: 55,
                overflow: 'scroll'
            },
            user: {
                alignItems: 'center',
                background: 'white',
                color: accentColor,
                borderBottom: '1px solid #f2f2f2',
                display: "flex",
                fontSize: '.9em',
                justifyContent: 'center',
                // borderTop: '1px solid grey',
                padding: '10px',
            },
            userIMG: {
                borderRadius: 30
            },
            userName: {
                paddingLeft: 20
            }
    }



    export default class UserWindow extends Component {
        constructor(props, context){
            super(props)
            this.retrieveListofUsers = this.retrieveListOfUsers.bind(this);
            this.state = {
                    users: ['AMCorvi', "Cartman's Mom", 'Stan', 'Kyle', 'Kenny', 'Cartman','AMCorvi', "Cartman's Mom", 'Stan', 'Kyle', 'AMCorvi', "Cartman's Mom", 'Stan', 'Kyle' ]
                }
        }

        retrieveListOfUsers(){
            let user = this.state.users.map( (elem, index) => {
                return (
                    <div className="user" key={index} style={styles.user}>
                        <img className="userIMG" style={styles.userIMG} src={`http://i.pravatar.cc/40?u=${elem}`} alt=""/>
                        <div className='userName' style={styles.userName}>{elem}</div>
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
