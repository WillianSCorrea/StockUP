'use client'
import React from 'react'

export default function Button({ children, onClick, variant='primary', className='' }: any) {
  const base = 'px-4 py-2 rounded-md font-medium transition'
  const styles = variant === 'primary'
    ? 'bg-primary text-white hover:bg-[#2563EB]'
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  return (
    <button onClick={onClick} className={[base, styles, className].join(' ')}>
      {children}
    </button>
  )
}
