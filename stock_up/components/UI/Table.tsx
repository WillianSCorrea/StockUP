import React from 'react'

export default function Table({ columns, data }: { columns: string[]; data: React.ReactNode[][] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b bg-gray-100 text-gray-600">
            {columns.map((col,i) => <th key={i} className="p-3 text-left">{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              {row.map((cell,j) => <td key={j} className="p-3 align-top">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
