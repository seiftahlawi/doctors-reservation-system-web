import React from 'react';
import { Component } from 'react';

  const UserContext=React.createContext({
'doctor':null,
'patients':null,
'loggedin':false
});
/*
export class UserContext extends Component{
    render(){
        return(
            <UserContext.Provider>
            {this.props.children}

            </UserContext.Provider>
        )
    }
}*/
export default UserContext
