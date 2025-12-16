'use client'
import React from 'react'

export default function Input(props: any) {
  return (
    <input {...props} className={('border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary') + (props.className ? ' ' + props.className : '')} />
  )
}
