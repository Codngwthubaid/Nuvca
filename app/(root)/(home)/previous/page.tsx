import CallList from '@/components/CallList'
import React from 'react'

const Previous = () => {
  return (
    <section className='flex flex-col text-white gap-10 size-full'>
      <h1 className='text-3xl font-boldl'>Previous</h1>
      <CallList type='ended'/>
    </section>
  )
}

export default Previous