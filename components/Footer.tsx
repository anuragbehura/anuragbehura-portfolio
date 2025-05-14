import React from 'react'
import { Separator } from './ui/separator'

export default function Footer() {
  return (
    <section className="w-full relative antialiased max-w-xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
      <Separator orientation='horizontal' className='bg-neutral-300'/>
      <span className='flex justify-center text-base font-semibold'>Thank You❤️</span>
    </section>
  )
}


