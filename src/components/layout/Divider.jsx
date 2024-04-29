import React from 'react'
const divider = {
    backgroundColor: '#ddd', // Replace 'your-color' with the desired background color
    height: '1px', // Set the desired height of the divider
    width: '100%',
}

export default function Divider() {
  return (
    <div className='divider' style={divider}></div>
  )
}
