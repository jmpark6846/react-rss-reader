import React from 'react'
import PropTypes from 'prop-types'

const PageTemplate = ({children}) => {
  return (
    <div className='page'>
      {children}
    </div>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.node
}

export default PageTemplate
