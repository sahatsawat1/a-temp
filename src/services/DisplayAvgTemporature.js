import React from 'react'
import {useSelector} from 'react-redux'

function DisplayAvgTemporature() {
  const avgTemporature = useSelector(state => state.avgTemporature)
  return (
    <>
      <div>
        {avgTemporature.temporature}
      </div>    
      <div>
        {avgTemporature.location}
      </div>
    </>

  )
}

export default DisplayAvgTemporature;