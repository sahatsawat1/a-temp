import React from 'react'
import {useSelector} from 'react-redux'

function DisplayCurrentTemporature() {
  const currentTemporature = useSelector(state => state.currentTemporature)
  return (
    <>
      <div>
        {currentTemporature.temporature}
      </div>    
      <div>
        {currentTemporature.location}
      </div>
    </>
  )
}

export default DisplayCurrentTemporature;