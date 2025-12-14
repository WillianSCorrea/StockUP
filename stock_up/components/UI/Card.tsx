import React from 'react'

export default function Card({ title, value, children }: { title: string; value: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-2">
      <span className="text-gray-500">{title}</span>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-primary">{value}</span>
        {children}
      </div>
    </div>
  )
}
