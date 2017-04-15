import React, {Component} from 'react';



// Component Styles

    const mainColor = "#1A1C2B",
        accentColor = "#F50057";

    let styles = {
            currentUser: {
                alignItems: 'center',
                background: mainColor,
                color: accentColor,
                borderBottom: '1px solid #f2f2f2',
                display: "flex",
                fontSize: '.9em',
                justifyContent: 'center',
                // borderTop: '1px solid grey',
                padding: '10px',
            },
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
                border: '2px groove ' +accentColor,
                borderLeft: 'none',
                borderRight: 'none',
                color: 'white',
                display: 'flex',
                flex: '100%',
                justifyContent: 'center',
                height: 55,
                position: 'absolute',
                width: '25%'
            },
            userList:{
                background: 'white',
                height: '100vh',
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
                    currentUser: 'Cartman',
                    users: ['AMCorvi', "Cartman's Mom", 'Stan', 'Kyle', 'Kenny', 'Cartman' ]
                }
        }//end of contructor

        componentWillReceiveProps(nextProps) {
            // When and if client user prop is received set it as currenUser in state causing re-render
            !nextProps ? null : this.setState({
                currentUser: nextProps.clientuser
            });           

        }// end of componentWillReceiveProps_method





        //
        // labelCurrentUser(elem){
        //   if (elem) {
        //       return(
        //             <div className="currentUser" key={1} style={styles.currentUser}>
        //                 <img className="userIMG" style={styles.userIMG} src={`http://i.pravatar.cc/40?u=${elem}`} alt=""/>
        //                 <div className='userName' style={styles.userName}>{this.state.currentUser}</div>
        //             </div>
        //
        //       )
        //   }
        // }

        retrieveListOfUsers(){
            //--- create divs for all user in chat 
            let user = this.state.users.map( (elem, index) => {
                   
                  // When parsing thru list of users if current username match the name of current user skip if else create user div
                    if (elem == this.state.currentUser) {
                        return (
                                <div className="currentUser" key={'currentuser'} style={styles.currentUser}>
                                    <img className="userIMG" style={styles.userIMG} src={`http://i.pravatar.cc/40?u=${elem}`} alt=""/>
                                    <div className='userName' style={styles.userName}>{this.state.currentUser}</div>
                                </div>
                        )
                    } else {

                            return (
                                <div className="user" key={index} style={styles.user}>
                                    <img className="userIMG" style={styles.userIMG} src={`http://i.pravatar.cc/40?u=${elem}`} alt=""/>
                                    <div className='userName' style={styles.userName}>{elem}</div>
                                </div>
                           )
                        }
                    })
           

            return user;
            forceUpdate();
        }// end of retriveListofUser_method

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
