import React from 'react'

interface ResultItemProps {
    label:string, value:number
}

export function ResultItem({label, value}: ResultItemProps) {
    return <p className="">{label}: <span className="text-blue-300">{value.toFixed(2)}</span></p>
}