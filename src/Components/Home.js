import React from 'react'
import GetNotification from './getNotification'
import NotificationBlx from './notificationBlx'
import Testimonial from './testimonial'
import WatchWhat from './watchWhat'
import Signup from './signup'
function Home() {
  return (
    <div className='flex'>
    <div className=' w-[60%]'>
      <div className=' w-[100%] flex justify-between'>
        <GetNotification />
        <NotificationBlx/>
      </div>
        <div>
            <WatchWhat />
            <Testimonial />
        </div>
    </div>
    <div>
      <Signup/>
    </div>
    </div>
  )
}

export default Home
