import React from 'react'


const display=()=>{
  return "Help me!"
}

const Hey = () => {
  return (
    <h1>Hey from component {display()}</h1>
  )
}

export default Hey