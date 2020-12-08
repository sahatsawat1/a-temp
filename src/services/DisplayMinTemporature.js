import React from 'react'
import {useSelector} from 'react-redux'

function DisplayAvgTemporature() {
  const minTemporature = useSelector(state => state.minTemporature)
  return (
    <>
      <div>
        {minTemporature.temporature}
      </div>    
      <div>
        {minTemporature.location}
      </div>
    </>
  )
}

export default DisplayAvgTemporature;