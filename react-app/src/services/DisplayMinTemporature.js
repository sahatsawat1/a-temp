import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

const Min = styled.div`
  font-size: 25px;
  font-weight: bold;
`

function DisplayAvgTemporature() {
  const minTemporature = useSelector(state => state.minTemporature)
  return (
    <>
      <Min>
        {minTemporature.temporature}
      </Min>    
      <Min>
        {minTemporature.location}
      </Min>
    </>
  )
}

export default DisplayAvgTemporature;