import React from 'react'
import {useSelector} from 'react-redux'

function DisplayMvgTemporature() {
  const maxTemporature = useSelector(state => state.maxTemporature)
  return (
    <>
      <div>
        {maxTemporature.temporature}
      </div>    
      <div>
        {maxTemporature.location}
      </div>
    </>

  )
}

export default DisplayMvgTemporature;