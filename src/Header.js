import React from 'react'

const Header = () => {
  return (
    <header>
       <img src={process.env.PUBLIC_URL + '/Promigo-Logo.png'} alt="Promigo Logo" className="headlogo"/>
       <h1>Promigo Travel Journal</h1>   
    </header>
  )
}

export default Header