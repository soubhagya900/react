import React from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/userContext'

function App() {
 
  const [user, setUser] = React.useState(null)
  return (
  
     <UserContext.Provider value={{user,setUser}}>
    <h1>Helo Soubhagya to mini context</h1>
   <Login/>
   <Profile/>
     </UserContext.Provider>
   
  )
}

export default App
