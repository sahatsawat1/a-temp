import React from 'react'
import {useSelector} from 'react-redux'
import {currently} from '../redux/actions/temporature'

function Temporature() {
  const count = useSelector(state => state.count)
  return (
    <div>
      {count}
    </div>
  )
}

export default Temporature;
