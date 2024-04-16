import React from 'react'
import Hero from './Hero/Hero'
import Conversation from './Conversation/Conversation'

function LeftSection() {
  return (
    <div className='left-section' style={{ padding: '10px' }}>
      <Hero />
      <Conversation />
    </div>
  )
}

export default LeftSection
