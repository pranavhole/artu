import React from 'react'
import bell from '../images/Bell.png'
function GetNotification() {
  return (
    <div>
      <img src={bell} />
        <div className='  text-white font-medium text-3xl'>
            Get notified when a highly correlated whale makes a move
        </div>
        <div className=' text-white'>
            Find out when a certain whale moves more than any present amount on-chain or when a dormant whale you acre about becomes active.
        </div>
    </div>
  )
}

export default GetNotification
