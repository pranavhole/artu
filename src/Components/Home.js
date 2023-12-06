import React from 'react'
import GetNotification from './getNotification'
import NotificationBlx from './notificationBlx'
import Testimonial from './testimonial'
import WatchWhat from './watchWhat'
function Home() {
  return (
    <div>
      <div className=' w-[100%] flex justify-between'>
        <GetNotification />
        <NotificationBlx/>
      </div>
        <div>
            <WatchWhat />
            <Testimonial />
        </div>
    </div>
  )
}

export default Home
