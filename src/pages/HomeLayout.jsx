import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  const value = 'somevalue'
  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div className='loading'></div>
      ) : (
        <div className='page'>
          <Outlet />
        </div>
      )}
    </div>
  )
}

export default HomeLayout
