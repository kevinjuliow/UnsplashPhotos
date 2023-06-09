import React from 'react'

const HomeImages = (e) => {
  const {urls } = e.data
  return (
    <>
    <img src={urls.small} alt="" />
    </>
  )
}

export default HomeImages