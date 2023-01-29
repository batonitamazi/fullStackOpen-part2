import React from 'react'
import Part from './Part'
function Content({parts}) {
  return (
    <div>
      {parts.map((part) => <Part name={part.name} exerciseCount={part.exercises} key={part.id}/>)}
    </div>
  )
}

export default Content