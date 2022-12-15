import React, { useState, useEffect } from 'react'

// import assets
import Post from "./assets/images/image-chess.webp"
import MarkWebber from "./assets/images/avatar-mark-webber.webp"
import AngelaGray from "./assets/images/avatar-angela-gray.webp"
import JacobThompson from "./assets/images/avatar-jacob-thompson.webp"
import RizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp"
import KimberlySmith from "./assets/images/avatar-kimberly-smith.webp"
import NathanPeterson from "./assets/images/avatar-nathan-peterson.webp"
import AnnaKim from "./assets/images/avatar-anna-kim.webp"

const App = () => {
  const notifications = [
    {
      name: 'Mark Webber',
      profile: MarkWebber,
      ago: '1m',
      info: 'reacted to your recent post',
      focus: 'My fisrt tournament today!',
      message: "",
      photo: '',
      isRead: false
    },
    {
      name: 'Angela Gray',
      profile: AngelaGray,
      ago: '5m',
      info: 'followed you',
      focus: '',
      message: "",
      photo: '',
      isRead: false
    },
    {
      name: 'Jacob Thompson',
      profile: JacobThompson,
      ago: '1 day',
      info: 'has joined your group',
      focus: 'Chess Club',
      message: '',
      photo: '',
      isRead: false
    },
    {
      name: 'Rizky Hasanuddin',
      profile: RizkyHasanuddin,
      ago: '5 days',
      info: 'sent you a private message',
      focus: '',
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      photo: '',
      isRead: true
    },
    {
      name: 'Kimberly Smith',
      profile: KimberlySmith,
      ago: '1 week',
      info: 'commented on your picture',
      focus: '',
      message: '',
      photo: Post,
      isRead: true
    },
    {
      name: 'Nathan Peterson',
      profile: NathanPeterson,
      ago: '2 weeks',
      info: 'reacted yo your recent post',
      focus: '5 end-game stretegies to increase your win rate',
      message: '',
      photo: '',
      isRead: true
    },
    {
      name: 'Anna Kim',
      profile: AnnaKim,
      ago: '2 weeks',
      info: 'left the group',
      focus: 'Chess Club',
      message: '',
      photo: '',
      isRead: true
    },

  ]

  // states
  const [notificacionArr, setNotificationArr] = useState(notifications)
  const [unRead, setUnRead] = useState(0)

  useEffect(() => {
    let x = 0
    notificacionArr.map((item) => {
      if (item.isRead === false) {
        return x++
      }
    })
    setUnRead(x)
  })

  const handleMarkAsRead = () => {
    const newArr = notificacionArr.map(obj => {
      if (obj.isRead === false) {
        return { ...obj, isRead: true }
      }
      return obj
    })
    setNotificationArr(newArr)
  }

  return (
    <main className='bg-white md:bg-very-light-grayish-blue h-screen font-sans px-5 mt-6 md:mt-0 md:flex md:items-center md:justify-center md:flex-col'>
      <div className=' md:bg-white max-w-[730px] md:shadow-2xl md:shadow-black/5 md:p-8 md:pt-10 rounded-2xl'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-2 items-center'>
            <h1 className='text-2xl font-bold'>Notifications</h1>
            <div className={`${unRead === 0 ? ' bg-dark-grayish-blue' : 'bg-blue'} text-white px-3 rounded-lg font-semibold`}>
              <span>{unRead === 0 ? '0' : unRead}</span>
            </div>
          </div>
          <button onClick={handleMarkAsRead} className={`${unRead === 0 ? ' cursor-default' : ' cursor-pointer hover:text-very-dark-blue'} text-dark-grayish-blue`}>{unRead === 0 ? 'All messages read' : 'Mark all as read'}</button>
        </div>

        <div className='flex flex-col gap-y-3 mt-5'>
          {notificacionArr.map((item, index) => {
            return (
              <div key={index} className={`${item.isRead ? '' : ' bg-light-grayish-blue-1/40'} rounded-xl p-4 flex gap-x-3 justify-between`}>
                <img className='w-10 h-10' src={item.profile} alt="" />
                <div className='text-dark-grayish-blue flex-1'>
                  <span>
                    <a href='#' aria-label={`Profile ${item.name}`} className='hover:text-blue hover:font-bold font-semibold text-black'>{item.name} </a>
                    {item.info}
                    <a href='#' aria-label={`Read more about ${item.focus}`} className='text-blue hover:font-bold'> {item.focus}</a>
                    {!item.isRead && <span className='text-red'> ●</span>}
                  </span>
                  <div>
                    <span>{item.ago} ago</span>
                    {item.message &&
                      <div className='cursor-pointer hover:bg-light-grayish-blue-1 hover:border-white text-sm p-3 border-2 rounded-lg mt-2'>
                        {item.message}
                      </div>
                    }
                  </div>
                </div>
                {item.photo &&
                  <div>
                    <img className='h-10 w-10' src={item.photo} alt="" />
                  </div>
                }
              </div>
            )
          })}
        </div>
      </div>
    </main >
  )
}

export default App