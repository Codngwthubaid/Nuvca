import CallList from '@/components/CallList'
import React from 'react'

const Recording = () => {
  return (
    <section className='flex flex-col text-white gap-10 size-full'>
    <h1 className='text-3xl font-boldl'>Recordings</h1>

    <CallList type='recordings'/>
  </section>
  )
}

export default Recording