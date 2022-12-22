import React from 'react'
import Logo from './Imgs/logo.png'

export default () => {
  return(
    <>
        <header>
            <img src={Logo} className='Rick'/>
            <h4>Rick and Morty</h4>
        </header>
    </>
  )
}