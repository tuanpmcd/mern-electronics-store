import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '80px',
        height: '80px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only d-none'>Loading...</span>
    </Spinner>
  )
}

export default Loader