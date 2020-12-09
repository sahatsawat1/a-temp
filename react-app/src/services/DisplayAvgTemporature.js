import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

const Avg = styled.div`
  font-size: 25px;
  font-weight: bold;
`

function DisplayAvgTemporature() {
  const avgTemporature = useSelector(state => state.avgTemporature)
  return (
    <>
      <Avg>
        {avgTemporature.temporature}
      </Avg>    
      <Avg>
        {avgTemporature.location}
      </Avg>
    </>

  )
}

export default DisplayAvgTemporature;