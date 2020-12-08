import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

const Max = styled.div`
  font-size: 25px;
  font-weight: bold;
`

function DisplayMvgTemporature() {
  const maxTemporature = useSelector(state => state.maxTemporature)
  return (
    <>
      <Max>
        {maxTemporature.temporature}
      </Max>    
      <Max>
        {maxTemporature.location}
      </Max>
    </>

  )
}

export default DisplayMvgTemporature;