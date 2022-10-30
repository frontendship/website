import React from 'react'
import Title from '../Title/Title';
import style from './Event.module.css';
const Event = () => {
  return (
    <section className='w-full'>
      <div className='flex flex-col justify-start items-center'>
       <Title level={6}> Yaklaşan Etkinlikler</Title>
       </div>
    </section>
  )
}

export default Event;
