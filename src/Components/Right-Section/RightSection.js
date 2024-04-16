import React from 'react'
import ChatContainer from './ChatContainer/ChatContainer'
import ChatHeading from './ChatHeading/ChatHeading'

function RightSection() {
  return (
    <div className='right-section'>
      <ChatHeading/>
      <ChatContainer/>
    </div>
  )
}

export default RightSection
