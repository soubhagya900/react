import React from 'react'
import UserContext from './userContext'

const UserContextProvider = ({chidren}) =>{

    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}> 
            {chidren}
        </UserContext.Provider>
    )
}

export default UserContextProvider