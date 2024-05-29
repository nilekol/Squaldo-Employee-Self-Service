import React from 'react'
import Picker from '../components/Picker'
import WelcomeBar from '../components/WelcomeBar'
import { UserContext, UserProvider } from '/UserContext'

const Home = () => {
  const {user} = React.useContext(UserContext)
  
  
  return (
    
    <>
      <WelcomeBar />
      <Picker />
    </>
    
  )
}

export default Home