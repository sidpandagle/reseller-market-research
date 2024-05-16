import React from 'react'

export default function Skeleton({ count }) {
    return (
        <div>
            <h3 className="h-4 bg-gray-200 rounded-full " style={{ width: '40%' }} />
            <ul className="my-5 space-y-3">
                {[...new Array(Number(count))].map((r, i) => {
                    return <li key={i} className="w-full h-4 bg-gray-200 rounded-full " />
                })}
            </ul>
        </div>)
}
