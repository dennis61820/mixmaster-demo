import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/not-found.svg'

const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not-found' />
          <h4>Oh, noooo....</h4>
          <p>We can't seem to find what you're looking for.</p>
          <Link to='/' className='btn'>
            back to home
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h3>Sometning went wrong!</h3>
    </Wrapper>
  )
}

export default Error
