import React from 'react'

const JustInfo = (props) => {
  const { memoFunction } = props
  
  console.log('Page rendering')
  return (
    <div>
    </div>
  )
}

export default React.memo(JustInfo)