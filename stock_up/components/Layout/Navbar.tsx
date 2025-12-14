'use client'
import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full bg-white h-16 shadow-sm flex items-center justify-end px-6">
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Olá, Willian 👋</span>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">W</div>
      </div>
    </header>
  )
}
