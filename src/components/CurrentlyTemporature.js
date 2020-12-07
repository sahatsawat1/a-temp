import React from 'react'
import {useSelector} from 'react-redux'

function CurrentlyTemporature() {
  const currentTemporature = useSelector(state => state.currentTemporature)
  return (
    <div>
      {currentTemporature}
    </div>
  )
}

export default CurrentlyTemporature;
