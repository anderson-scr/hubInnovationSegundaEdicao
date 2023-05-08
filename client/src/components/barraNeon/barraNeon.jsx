import React from 'react'
import './barraNeonStyle.css'

const BarraNeon = ({ corNeon }) => {
  return (
    <div className="d-flex">
      <div className="pontaBarraNeon"></div>
      <div className="barraNeon flex-grow-1" data-corNeon={corNeon}></div>
      <div className="pontaBarraNeon" data-corNeon={corNeon}></div>
    </div>
  )
}

export default BarraNeon