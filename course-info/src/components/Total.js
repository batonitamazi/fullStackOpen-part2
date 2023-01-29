import React from 'react'

function Total({parts}) {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>total of {total} exercises</div>
  )
}

export default Total