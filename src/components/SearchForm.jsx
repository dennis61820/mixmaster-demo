import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'

const SearchForm = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form className='form' method='GET'>
        <input type='search' name='search' className='form-input' />
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm
